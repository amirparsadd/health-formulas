import { ActivityLevel } from '../enums/activity-level';
import { Gender } from '../enums/gender';

/**
 * Calculate TDEE
 * @param weight in kilograms
 * @param height in meters
 * @param age in years
 * @param gender
 * @param activity
 * @returns a final TDEE
 */
export function calculateTDEE(
  weight: number,
  height: number,
  age: number,
  gender: Gender,
  activity: ActivityLevel | number
): number {
  const bmr =
    10 * weight + 6.25 * height - 5 * age + (gender === Gender.MALE ? 5 : -161);

  return bmr * activity;
}
