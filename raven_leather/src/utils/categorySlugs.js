export const CATEGORY_SLUGS = {
  Portfele: "portfele",
  Etui: "etui",
  Torebki: "torebki",
  "Paski do spodni": "paski",
  Akcesoria: "akcesoria",
};

const SLUG_TO_CATEGORY = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([name, slug]) => [slug, name]),
);

export function categoryToSlug(category) {
  return CATEGORY_SLUGS[category] ?? category.toLowerCase();
}

export function slugToCategory(slug) {
  return SLUG_TO_CATEGORY[slug];
}
