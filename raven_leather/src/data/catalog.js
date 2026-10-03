const files = import.meta.glob("../assets/produkty/*/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const filesByFolder = {};
for (const [filePath, url] of Object.entries(files)) {
  const match = filePath.match(/produkty\/([^/]+)\/(\d+)-(\d+)\.jpg$/);
  if (!match) continue;
  const [, folder, number, size] = match;
  const photos = (filesByFolder[folder] ??= {});
  (photos[number] ??= {})[size] = url;
}

function photosOf(folder) {
  const photos = filesByFolder[folder] ?? {};
  return Object.keys(photos)
    .sort((a, b) => Number(a) - Number(b))
    .map((number) => ({
      thumb: photos[number]["800"],
      medium: photos[number]["1600"],
      large: photos[number]["2560"],
    }));
}

const product = (title, folder) => ({ title, folder, photos: photosOf(folder) });

const CATALOG = {
  Portfele: [product("Biker", "bikerwallet"), product("Bifold", "bifold")],
  Etui: [
    product("Cardholders", "card-holder-1"),
    product("Card Holders Minimalist", "card-holder-minimalist"),
    product("Paszport", "paszport"),
  ],
  Torebki: [product("Torba damska model 1", "torba-damska-model-1")],
  "Paski do spodni": [product("Pasek", "pasek")],
};

export const PRODUCTS_BY_CATEGORY = Object.fromEntries(
  Object.entries(CATALOG).map(([category, products]) => [
    category,
    products.filter((p) => p.photos.length > 0),
  ]),
);

export function coverOf(folder) {
  return photosOf(folder)[0];
}
