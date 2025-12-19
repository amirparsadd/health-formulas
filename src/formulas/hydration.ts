/**
 * Calculate daily water intake in liters
 *
 * @param weight Weight in kilograms
 * @param activityFactor Optional multiplier for activity (1 = normal, 1.2 = active)
 * @returns Water intake in liters/day
 */
export function calculateHydration(weight: number, activityFactor = 1): number {
  const baseWater = weight * 0.033; // liters per day
  return baseWater * activityFactor;
}
