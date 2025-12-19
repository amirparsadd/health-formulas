import { Gender } from '../enums/gender';

/**
 * Calculate Lean Body Mass (LBM) using the Boer formula
 *
 * @param weight Weight in kg
 * @param height Height in cm
 * @param gender Gender of the person
 * @returns Lean Body Mass in kg
 *
 * Boer formula (metric):
 * Male:   LBM = 0.407 * weight + 0.267 * height − 19.2
 * Female: LBM = 0.252 * weight + 0.473 * height − 48.3
 */
export function calculateLBM(
  weight: number,
  height: number,
  gender: Gender
): number {
  if (gender === Gender.MALE) {
    return 0.407 * weight + 0.267 * height - 19.2;
  } else {
    return 0.252 * weight + 0.473 * height - 48.3;
  }
}
