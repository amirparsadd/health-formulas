import { ActivityLevel } from '../enums/activity-level';
import { Gender } from '../enums/gender';

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
