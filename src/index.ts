import { ActivityLevel } from './enums/activity-level';
import { Gender } from './enums/gender';
import { calculateBMI } from './formulas/bmi';
import { calculateBMR } from './formulas/bmr';
import { calculateBodyFat } from './formulas/body-fat';
import {
  calculateCaloriesForGoal,
  calculateMacrosForCalories,
} from './formulas/calculate-calories';
import { calculateTDEE } from './formulas/tdee';

export default {
  Gender,
  ActivityLevel,
  calculateBMI,
  calculateTDEE,
  calculateBMR,
  calculateBodyFat,
  calculateCaloriesForGoal,
  calculateMacrosForCalories,
};
