import { Gender } from '../enums/gender';

/**
 * Estimate Total Body Water (TBW) in liters using Watson formula
 *
 * @param weight Weight in kg
 * @param height Height in cm
 * @param age Age in years
 * @param gender Gender
 * @returns Estimated body water in liters
 *
 * Watson formula (metric):
 * Men:   TBW = 2.447 − 0.09156 * age + 0.1074 * height + 0.3362 * weight
 * Women: TBW = −2.097 + 0.1069 * height + 0.2466 * weight
 */
export function calculateBodyWater(
  weight: number,
  height: number,
  age: number,
  gender: Gender
): number {
  if (gender === Gender.MALE) {
    return 2.447 - 0.09156 * age + 0.1074 * height + 0.3362 * weight;
  } else {
    return -2.097 + 0.1069 * height + 0.2466 * weight;
  }
}
