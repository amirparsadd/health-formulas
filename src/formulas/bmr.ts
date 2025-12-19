import { ActivityLevel } from '../enums/activity-level';
import { Gender } from '../enums/gender';
import { calculateTDEE } from './tdee';

/**
 * Calculates BMR, a wrapper for calculateTDEE
 * @param weight in kilograms
 * @param height in meters
 * @param age in years
 * @param gender
 * @returns the final BMR
 */
export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  gender: Gender
): number {
  return calculateTDEE(weight, height, age, gender, ActivityLevel.BMR);
}
