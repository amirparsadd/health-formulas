/**
 * Calculate Waist-to-Height Ratio (WHtR)
 *
 * @param waist Waist circumference in cm
 * @param height Height in cm
 * @returns WHtR ratio (unitless)
 *
 * Interpretation (rough guideline):
 *  < 0.4   → underweight
 *  0.4–0.49 → healthy
 *  0.5–0.59 → overweight
 *  ≥ 0.6   → obesity / high risk
 */
export function calculateWaistToHeightRatio(
  waist: number,
  height: number
): number {
  return waist / height;
}
