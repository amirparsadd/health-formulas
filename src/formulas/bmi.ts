/**
 * Calculate BMI
 *
 * @param weight The weight in kilograms
 * @param height The height in meters
 */
export function calculateBMI(weight: number, height: number): number {
  return weight / height ** 2;
}
