import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.resolve(here, "../../zdjecia-oryginaly");
const PRODUCTS_DIR = path.resolve(here, "../src/assets/produkty");
const PAGE_DIR = path.resolve(here, "../src/assets/strona");

const SIZES = [
  { name: "800", maxEdge: 800, quality: 80 },
  { name: "1600", maxEdge: 1600, quality: 82 },
  { name: "2560", maxEdge: 2560, quality: 85 },
];

const PRODUCT_FILE =
  /^(\d+)(?:\s+\d+)?\s+(.+?)(?:\s*-\s*profil(?:owe)?)?\.jpe?g$/i;
const PAGE_FILE = /^(.+?)\.jpe?g$/i;

function slugify(text) {
  return text
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function writeSizes(sourcePath, outBase) {
  const image = sharp(sourcePath).rotate();
  let bytes = 0;
  for (const size of SIZES) {
    const info = await image
      .clone()
      .resize({
        width: size.maxEdge,
        height: size.maxEdge,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: size.quality, mozjpeg: true })
      .toFile(`${outBase}-${size.name}.jpg`);
    bytes += info.size;
  }
  return bytes;
}

async function main() {
  let entries;
  try {
    entries = await fs.readdir(SOURCE_DIR);
  } catch {
    console.error(`Brak folderu z oryginałami: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const products = new Map();
  const pageFiles = [];
  const skipped = [];

  for (const file of entries.sort()) {
    const productMatch = file.match(PRODUCT_FILE);
    if (productMatch) {
      const number = Number(productMatch[1]);
      const name = productMatch[2].trim();
      const slug = slugify(name);
      if (!products.has(slug)) products.set(slug, { name, files: new Map() });
      const product = products.get(slug);
      if (product.files.has(number)) {
        console.error(
          `Dwa zdjęcia z numerem ${number} dla "${name}": "${product.files.get(number)}" i "${file}". Zmień numer jednego z nich.`,
        );
        process.exit(1);
      }
      product.files.set(number, file);
      continue;
    }
    const pageMatch = file.match(PAGE_FILE);
    if (pageMatch) pageFiles.push({ file, slug: slugify(pageMatch[1]) });
    else skipped.push(file);
  }

  await fs.rm(PRODUCTS_DIR, { recursive: true, force: true });
  await fs.rm(PAGE_DIR, { recursive: true, force: true });

  let inputBytes = 0;
  let outputBytes = 0;

  for (const [slug, product] of products) {
    const dir = path.join(PRODUCTS_DIR, slug);
    await fs.mkdir(dir, { recursive: true });
    for (const [number, file] of [...product.files].sort((a, b) => a[0] - b[0])) {
      const source = path.join(SOURCE_DIR, file);
      inputBytes += (await fs.stat(source)).size;
      outputBytes += await writeSizes(source, path.join(dir, String(number).padStart(2, "0")));
    }
    console.log(`${product.name.padEnd(28)} -> produkty/${slug}/ (${product.files.size} zdjęć)`);
  }

  if (pageFiles.length) await fs.mkdir(PAGE_DIR, { recursive: true });
  for (const { file, slug } of pageFiles) {
    const source = path.join(SOURCE_DIR, file);
    inputBytes += (await fs.stat(source)).size;
    outputBytes += await writeSizes(source, path.join(PAGE_DIR, slug));
    console.log(`${file.padEnd(28)} -> strona/${slug}-*.jpg`);
  }

  for (const file of skipped) console.warn(`Pominięto (to nie JPG): ${file}`);

  const mb = (b) => (b / 1024 / 1024).toFixed(1);
  console.log(`\nOryginały: ${mb(inputBytes)} MB -> strona: ${mb(outputBytes)} MB (wszystkie 3 rozmiary)`);
}

main();
