import assert from 'node:assert/strict';
import { recommendProducts } from '../src/lib/recommendationEngine.js';
import { buildMoneyPlan } from '../src/lib/budgetEngine.js';

const minorProfile = {
  age: 16,
  incomeAmount: 150,
  frequency: 'weekly',
  goal: 'Laptop or school tech',
  independenceLevel: 'medium'
};
const minorPlan = buildMoneyPlan(minorProfile);
const minorResult = recommendProducts({ ...minorProfile, monthlyIncome: minorPlan.monthlyIncome });

assert.equal(minorResult.ageBand, 'minor-earner');
assert.ok(minorResult.recommendations.some((item) => item.id === 'high-school-checking'));
assert.ok(minorResult.recommendations.some((item) => item.id === 'savings-autosave'));
assert.ok(!minorResult.recommendations.some((item) => item.id === 'freedom-rise'));
assert.ok(minorResult.warnings.some((warning) => warning.includes('under 18')));

const adultReadyProfile = {
  age: 19,
  incomeAmount: 800,
  frequency: 'monthly',
  goal: 'Responsible credit building',
  independenceLevel: 'high',
  hasSteadyIncome: true,
  canPayInFull: true,
  knowsCreditBasics: true
};
const adultReadyPlan = buildMoneyPlan(adultReadyProfile);
const adultReadyResult = recommendProducts({ ...adultReadyProfile, monthlyIncome: adultReadyPlan.monthlyIncome });

assert.equal(adultReadyResult.ageBand, 'young-adult-earner');
assert.ok(adultReadyResult.recommendations.some((item) => item.id === 'secure-banking'));
assert.ok(adultReadyResult.recommendations.some((item) => item.id === 'credit-journey'));
assert.ok(adultReadyResult.recommendations.some((item) => item.id === 'freedom-rise'));

const adultNotReadyProfile = {
  age: 18,
  incomeAmount: 250,
  frequency: 'biweekly',
  goal: 'Emergency fund',
  hasSteadyIncome: true,
  canPayInFull: false,
  knowsCreditBasics: false
};
const adultNotReadyPlan = buildMoneyPlan(adultNotReadyProfile);
const adultNotReadyResult = recommendProducts({ ...adultNotReadyProfile, monthlyIncome: adultNotReadyPlan.monthlyIncome });

assert.ok(adultNotReadyResult.recommendations.some((item) => item.id === 'credit-journey'));
assert.ok(!adultNotReadyResult.recommendations.some((item) => item.id === 'freedom-rise'));
assert.ok(adultNotReadyResult.warnings.some((warning) => warning.includes('readiness')));

console.log('All FLEX recommendation tests passed.');
