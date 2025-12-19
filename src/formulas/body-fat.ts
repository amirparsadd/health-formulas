import { Gender } from '../enums/gender';

/**
 * Calculate body fat percentage using the US Navy method (metric)
 *
 * @param gender Gender of the person
 * @param height Height in centimeters
 * @param neck Neck circumference in centimeters
 * @param waist Waist circumference in centimeters
 * @param hip Hip circumference in centimeters (required for women)
 * @returns Body fat percentage
 */
export function calculateBodyFat(
  gender: Gender,
  height: number,
  neck: number,
  waist: number,
  hip?: number
): number {
  if (gender === Gender.MALE) {
    // Men: 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76
    return (
      86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
    );
  } else {
    if (hip === undefined) {
      throw new Error('Hip measurement is required for females');
    }
    // Women: 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387
    return (
      163.205 * Math.log10(waist + hip - neck) -
      97.684 * Math.log10(height) -
      78.387
    );
  }
}
