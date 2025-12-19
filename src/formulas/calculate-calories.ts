import { MacroTargets } from '../types/macro-targets';

/**
 * Calculate daily calories for a weight change goal
 *
 * @param tdee Total Daily Energy Expenditure
 * @param weightChangeKgPerWeek Positive to gain, negative to lose
 * @returns Daily calories to eat
 */
export function calculateCaloriesForGoal(
  tdee: number,
  weightChangeKgPerWeek: number
): number {
  // 1 kg fat ≈ 7700 kcal
  const weeklyCalories = weightChangeKgPerWeek * 7700;
  const dailyCalories = tdee + weeklyCalories / 7; // divide by 7 days
  return dailyCalories;
}

/**
 * Calculate macros based on calories and weight
 *
 * @param calories Daily calories
 * @param weight Weight in kg
 * @returns Macro targets
 */
export function calculateMacrosForCalories(
  calories: number,
  weight: number
): MacroTargets {
  // Standard macros
  const protein = weight * 1.8; // grams per kg
  const fat = weight * 0.8; // grams per kg

  const proteinCalories = protein * 4;
  const fatCalories = fat * 9;

  const remainingCalories = calories - (proteinCalories + fatCalories);
  const carbs = remainingCalories / 4; // grams

  // Simple fixed guidelines
  const sodium = 2300; // mg
  const sugar = Math.min(50, carbs * 0.1); // g, 10% of carbs or max 50g
  const fiber = Math.max(25, weight * 0.3); // g, based on weight

  return {
    protein,
    fat,
    carbs,
    sodium,
    sugar,
    fiber,
  };
}
