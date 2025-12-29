export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // spaces → -
    .replace(/[^\w-]/g, "") // remove symbols
    .replace(/-+/g, "-") // collapse multiple -
    .replace(/^-+|-+$/g, ""); // trim leading/trailing -
}

export function jobSlug(time: string, title: string, company: string) {
  const startYear = time.match(/\b\d{4}\b/)?.[0] ?? "";
  return slugify(`${title} ${company} ${startYear}`);
}

export const h1Style = "text-2xl font-bold";
export const h2Style = "text-xl font-semibold";
export const h3Style = "text-lg font-medium";
export const h4Style = "text-normal font-semibold uppercase tracking-wide";
