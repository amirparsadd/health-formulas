import { ActivityLevel } from './enums/activity-level';
import { Gender } from './enums/gender';
import { calculateBMI } from './formulas/bmi';
import { calculateBMR } from './formulas/bmr';
import { calculateBodyFat } from './formulas/body-fat';
import {
  calculateCaloriesForGoal,
  calculateMacrosForCalories,
} from './formulas/calculate-calories';
import { calculateHydration } from './formulas/hydration';
import { calculateLBM } from './formulas/lbm';
import { calculateBodyWater } from './formulas/tbw';
import { calculateTDEE } from './formulas/tdee';
import { estimateVO2Max } from './formulas/vo2max';
import { calculateWaistToHeightRatio } from './formulas/whtr';

export default {
  Gender,
  ActivityLevel,
  calculateBMI,
  calculateTDEE,
  calculateBMR,
  calculateBodyFat,
  calculateCaloriesForGoal,
  calculateMacrosForCalories,
  calculateHydration,
  calculateLBM,
  calculateWaistToHeightRatio,
  estimateVO2Max,
  calculateBodyWater,
};
