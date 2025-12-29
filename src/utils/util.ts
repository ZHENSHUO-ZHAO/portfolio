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
