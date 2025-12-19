/**
 * Estimate VO2 Max based on resting and max heart rate (ml/kg/min)
 *
 * @param age Age in years
 * @param restingHR Resting heart rate in bpm
 * @param gender Gender of the person (optional, can be used for more refined formulas)
 * @returns VO2 Max estimate in ml/kg/min
 *
 * Formula (Uth et al. 2004):
 * VO2max = 15.3 * (maxHR / restingHR)
 * where maxHR ≈ 220 − age
 */
export function estimateVO2Max(age: number, restingHR: number): number {
  const maxHR = 220 - age;
  return 15.3 * (maxHR / restingHR);
}
