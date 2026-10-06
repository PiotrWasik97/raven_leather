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

const product = (title, folder, price) => ({
  title,
  folder,
  price,
  photos: photosOf(folder),
});

const CATALOG = {
  Portfele: [
    product("Biker Wallet – Draupnir", "bikerwallet", "od 950 zł"),
    product("Bifold – Bifrost", "bifold", "od 620 zł"),
  ],
  Etui: [
    product("Huginn", "card-holder-1", "od 270 zł"),
    product("Ingwaz", "card-holder-minimalist", "od 90 zł"),
    product("Paszport – Ratatosk", "paszport", "od 380 zł"),
  ],
  Torebki: [
    product("Torba damska – Skidbladnir", "torba-damska-model-1", "870–1990 zł"),
  ],
  "Paski do spodni": [product("Paski", "pasek", "od 190 zł")],
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
