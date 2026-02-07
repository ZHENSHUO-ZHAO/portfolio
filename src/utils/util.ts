import type { Image } from "../contexts/pageContext";

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

/**
 * Creates a CSS linear gradient string.
 * @param degree - the gradient angle in degrees
 * @param stops - array of [color, percentage] tuples
 *                percentage is optional (0-100)
 * @returns CSS gradient string
 */
export function createLinearGradientWithStops(
  degree: number,
  stops: Array<[string, number?]>,
): string {
  const stopsStr = stops
    .map(([color, pct]) => (pct !== undefined ? `${color} ${pct}%` : color))
    .join(", ");
  return `linear-gradient(${degree}deg, ${stopsStr})`;
}

/**
 * Creates a CSS conic-gradient string with a specified rotation angle and center.
 *
 * @param degree - The starting angle of the gradient in degrees.
 *                 0° corresponds to the top of the gradient, 90° to the right, etc.
 * @param colors - An array of CSS color strings representing the gradient stops.
 * @param center - Optional. The position of the gradient's center within the element.
 *                 Can be any valid CSS position value (e.g., "center", "bottom left", "50% 50%").
 *                 Defaults to "center".
 * @returns A string representing the CSS `conic-gradient()` with the specified angle, center, and colors,
 *          which can be used directly in a style or Tailwind inline style.
 *
 * @example
 * const gradient = createConicGradient(45, ["#F59E0B", "#EF4444"], "bottom left");
 * // Returns: "conic-gradient(from 45deg at bottom left, #F59E0B, #EF4444)"
 */
export function createConicGradient(
  degree: number,
  colors: string[],
  center: string = "center",
): string {
  return `conic-gradient(from ${degree}deg at ${center}, ${colors.join(", ")})`;
}

/**
 * Creates a CSS conic-gradient string with custom stops and optional center.
 *
 * @param degree - The starting angle of the gradient in degrees (0° = top).
 * @param stops - Array of [color, percentage?] tuples. Percentage is optional (0-100).
 * @param center - Optional. The center point of the gradient. Defaults to "center".
 * @returns A CSS conic-gradient string usable in inline styles or Tailwind.
 *
 * @example
 * const gradient = createConicGradientWithStops(
 *   90,
 *   [["#F59E0B", 0], ["#EF4444", 30], ["#6366F1", 70], ["#10B981", 100]],
 *   "bottom left"
 * );
 * // Returns:
 * // "conic-gradient(from 90deg at bottom left, #F59E0B 0%, #EF4444 30%, #6366F1 70%, #10B981 100%)"
 */
export function createConicGradientWithStops(
  degree: number,
  stops: Array<[string, number?]>,
  center: string = "center",
): string {
  const stopsStr = stops
    .map(([color, pct]) => (pct !== undefined ? `${color} ${pct}%` : color))
    .join(", ");
  return `conic-gradient(from ${degree}deg at ${center}, ${stopsStr})`;
}

/**
 * Creates a CSS radial-gradient string with a specified shape, size, and center.
 *
 * @param shape - Optional. The shape of the radial gradient ("circle" or "ellipse"). Defaults to "ellipse".
 * @param size - Optional. The size of the gradient ("closest-side", "farthest-corner", etc.). Defaults to "farthest-corner".
 * @param colors - An array of CSS color strings representing the gradient stops.
 * @param center - Optional. The position of the gradient's center within the element. Defaults to "center".
 * @returns A string representing the CSS `radial-gradient()` with the specified shape, size, center, and colors.
 *
 * @example
 * const gradient = createRadialGradient("circle", "closest-side", ["#F59E0B", "#EF4444"], "bottom left");
 * // Returns: "radial-gradient(circle closest-side at bottom left, #F59E0B, #EF4444)"
 */
export function createRadialGradient(
  shape: "circle" | "ellipse" = "ellipse",
  size: string = "farthest-corner",
  colors: string[],
  center: string = "center",
): string {
  return `radial-gradient(${shape} ${size} at ${center}, ${colors.join(", ")})`;
}

/**
 * Creates a CSS radial-gradient string with custom stops and optional center.
 *
 * @param shape - Optional. The shape of the radial gradient ("circle" or "ellipse"). Defaults to "ellipse".
 * @param size - Optional. The size of the gradient ("closest-side", "farthest-corner", etc.). Defaults to "farthest-corner".
 * @param stops - Array of [color, percentage?] tuples. Percentage is optional (0-100).
 * @param center - Optional. The position of the gradient's center within the element. Defaults to "center".
 * @returns A CSS radial-gradient string usable in inline styles or Tailwind.
 *
 * @example
 * const gradient = createRadialGradientWithStops(
 *   "circle",
 *   "closest-side",
 *   [["#F59E0B", 0], ["#EF4444", 30], ["#6366F1", 70], ["#10B981", 100]],
 *   "bottom left"
 * );
 * // Returns:
 * // "radial-gradient(circle closest-side at bottom left, #F59E0B 0%, #EF4444 30%, #6366F1 70%, #10B981 100%)"
 */
export function createRadialGradientWithStops(
  shape: "circle" | "ellipse" = "ellipse",
  size: string = "farthest-corner",
  stops: Array<[string, number?]>,
  center: string = "center",
): string {
  const stopsStr = stops
    .map(([color, pct]) => (pct !== undefined ? `${color} ${pct}%` : color))
    .join(", ");
  return `radial-gradient(${shape} ${size} at ${center}, ${stopsStr})`;
}

/**
 * Generates a CSS inset box-shadow string for inner shadows.
 *
 * @param offsetX - Horizontal offset of the shadow (default: 0px)
 * @param offsetY - Vertical offset of the shadow (default: 4px)
 * @param blur - Blur radius of the shadow (default: 6px)
 * @param color - Shadow color (default: rgba(0,0,0,0.2))
 * @returns A string representing a CSS inset box-shadow that can be used in Tailwind arbitrary style or inline style
 *
 * @example
 * const shadow = createInnerShadow();
 * // Returns: "inset 0px 4px 6px rgba(0,0,0,0.2)"
 *
 * const customShadow = createInnerShadow(0, 2, 8, "rgba(0,0,0,0.3)");
 * // Returns: "inset 0px 2px 8px rgba(0,0,0,0.3)"
 */
export function createInnerShadow(
  offsetX: string | number = "0px",
  offsetY: string | number = "4px",
  blur: string | number = "6px",
  color: string = "rgba(0,0,0,0.2)",
): string {
  return `inset ${offsetX} ${offsetY} ${blur} ${color}`;
}

export function mixColor(
  color1Percentage: number,
  color1: string,
  color2: string,
): string {
  return `color-mix(in oklch, ${color1} ${color1Percentage}%, ${color2})`;
}

export function getRem(pixels: number): number {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return pixels / rootFontSize;
}

/**
 * Create Image data for a batch of images
 *
 * @param paths - The urls for the images.
 * @param alts - The alt properties for each image.
 * @returns An Image object array.
 */
export function createImageDataBatch(paths: string[], alts: string[]): Image[] {
  return paths.sort().map((src, i) => ({ url: src, alt: alts[i] }) as Image);
}
