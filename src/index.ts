import { ActivityLevel } from './enums/activity-level';
import { Gender } from './enums/gender';
import { calculateBMI } from './formulas/bmi';
import { calculateBMR } from './formulas/bmr';
import { calculateTDEE } from './formulas/tdee';

export default {
  Gender,
  ActivityLevel,
  calculateBMI,
  calculateTDEE,
  calculateBMR,
};
