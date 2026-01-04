export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // spaces → -
    .replace(/[^\w-]/g, "") // remove symbols
    .replace(/-+/g, "-") // collapse multiple -
    .replace(/^-+|-+$/g, ""); // trim leading/trailing -
}

export function jobSlug(time: string, title: string, company: string): string {
  const startYear = time.match(/\b\d{4}\b/)?.[0] ?? "";
  return slugify(`${title} ${company} ${startYear}`);
}

export function createLinearGradient(degree: number, colors: string[]): string {
  return `linear-gradient(${degree}deg, ${colors.join(", ")})`;
}

export function createConicGradient(degree: number, colors: string[]): string {
  return `conic-gradient(from ${degree}deg, ${colors.join(", ")})`;
}

export function mixColor(
  color1Percentage: number,
  color1: string,
  color2: string
): string {
  return `color-mix(in oklch, ${color1} ${color1Percentage}%, ${color2})`;
}

export function getRem(pixels: number): number {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return pixels / rootFontSize;
}
