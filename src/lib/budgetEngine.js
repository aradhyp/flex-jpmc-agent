import { FREQUENCIES } from '../data/productCatalog.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function normalizeMonthlyIncome(incomeAmount, frequency) {
  const parsed = Number(incomeAmount) || 0;
  const selected = FREQUENCIES.find((item) => item.value === frequency) || FREQUENCIES[2];
  return Math.round(parsed * selected.multiplier);
}

export function buildMoneyPlan({ incomeAmount, frequency, goalAmount = 500, age, goal }) {
  const monthlyIncome = normalizeMonthlyIncome(incomeAmount, frequency);
  const isLowExpenseTeen = age <= 18 && monthlyIncome <= 800;

  const split = isLowExpenseTeen
    ? { future: 0.35, emergency: 0.15, needs: 0.25, flex: 0.25 }
    : { future: 0.2, emergency: 0.1, needs: 0.5, flex: 0.2 };

  const future = Math.round(monthlyIncome * split.future);
  const emergency = Math.round(monthlyIncome * split.emergency);
  const needs = Math.round(monthlyIncome * split.needs);
  const flex = Math.max(0, monthlyIncome - future - emergency - needs);
  const autoSaveWeekly = Math.max(5, Math.round((future + emergency) / 4.33));
  const target = Number(goalAmount) || 500;
  const monthsToGoal = target > 0 && future + emergency > 0 ? Math.ceil(target / (future + emergency)) : null;

  return {
    monthlyIncome,
    split,
    buckets: [
      {
        key: 'future',
        label: 'Future Goal',
        amount: future,
        description: goal ? `Toward ${goal.toLowerCase()}` : 'College, laptop, car, or move-out goal'
      },
      {
        key: 'emergency',
        label: 'Emergency Buffer',
        amount: emergency,
        description: 'Your first layer of independence'
      },
      {
        key: 'needs',
        label: 'Needs',
        amount: needs,
        description: 'Food, transport, school, phone, essentials'
      },
      {
        key: 'flex',
        label: 'Flexible Spend',
        amount: flex,
        description: 'Guilt-free spending after saving first'
      }
    ],
    autoSaveWeekly,
    monthsToGoal,
    coachingLine:
      monthlyIncome === 0
        ? 'Enter your first paycheck amount to unlock a savings plan.'
        : `Save about $${autoSaveWeekly}/week first, then spend from what remains.`
  };
}

export function calculateMoneyScore(profile, recommendations = []) {
  const income = normalizeMonthlyIncome(profile.incomeAmount, profile.frequency);
  let score = 35;

  if (profile.age >= 16 && profile.age <= 19) score += 10;
  if (income > 0) score += 15;
  if (profile.goal) score += 10;
  if (profile.goalAmount && Number(profile.goalAmount) > 0) score += 5;
  if (recommendations.some((item) => item.id === 'savings-autosave')) score += 10;
  if (profile.age >= 18 && profile.knowsCreditBasics) score += 5;
  if (profile.age >= 18 && profile.hasSteadyIncome && profile.canPayInFull) score += 5;
  if (profile.guardianMode && profile.age < 18) score += 5;

  return clamp(score, 0, 100);
}
