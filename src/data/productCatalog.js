export const PRODUCT_CATALOG = [
  {
    id: 'high-school-checking',
    name: 'Chase High School Checking℠',
    category: 'Checking',
    minAge: 13,
    maxAge: 17,
    fit: 'Teen banking with parent/guardian co-ownership',
    summary:
      'Best for 16–17 year-old earners who still need a parent/guardian co-owner and want to practice money management safely.',
    highlights: [
      'For students 13–17 at account opening',
      'Requires parent/guardian co-owner',
      'No Monthly Service Fee',
      'Supports direct deposit and everyday banking basics'
    ],
    guardrails: [
      'Open-in-branch guidance may apply',
      'Parent/guardian involvement required',
      'Avoid collecting sensitive data inside FLEX'
    ],
    officialUrl: 'https://www.chase.com/personal/checking/high-school-checking',
    sourceNote:
      'Official Chase page describes this as a student checking account for teens 13–17 with parent/guardian co-owner and no Monthly Service Fee.'
  },
  {
    id: 'secure-banking',
    name: 'Chase Secure Banking℠',
    category: 'Checking',
    minAge: 17,
    maxAge: 24,
    fit: 'Simple independent checking with fee predictability',
    summary:
      'Best for 17–19 year-old young earners who need a simple checking path with no overdraft fees and a youth monthly-fee waiver.',
    highlights: [
      'No overdraft fees',
      '$0 Monthly Service Fee for account owners age 17–24',
      'Direct deposit support',
      'Simple checking account for first independence'
    ],
    guardrails: [
      'Account approval still applies',
      'FLEX should explain fee conditions clearly',
      'Do not present as guaranteed eligibility'
    ],
    officialUrl: 'https://personal.chase.com/personal/secure-banking',
    sourceNote:
      'Official Chase pages describe Secure Banking as a simple checking account with no overdraft fees and $0 Monthly Service Fee for account owners 17–24.'
  },
  {
    id: 'savings-autosave',
    name: 'Chase Savings℠ + Autosave',
    category: 'Savings',
    minAge: 16,
    maxAge: 99,
    fit: 'Automated goal saving',
    summary:
      'Best for young earners who need a repeatable habit for emergency funds, college goals, devices, transportation, or move-out savings.',
    highlights: [
      'Automatic checking-to-savings transfers',
      'Can save on a schedule or when deposits arrive',
      'Goal-based behavior design',
      'Simple first emergency fund pathway'
    ],
    guardrails: [
      'Requires eligible Chase checking and savings relationship',
      'Savings rate suggestions are educational only',
      'User should be able to edit/cancel recurring transfers'
    ],
    officialUrl: 'https://www.chase.com/personal/financial-tools/plan/automate-savings',
    sourceNote:
      'Official Chase Autosave information says customers can transfer money automatically from Chase checking to Chase savings on a schedule or when a deposit arrives.'
  },
  {
    id: 'credit-journey',
    name: 'Chase Credit Journey®',
    category: 'Credit Education',
    minAge: 18,
    maxAge: 99,
    fit: 'Credit literacy and score monitoring',
    summary:
      'Best for 18–19 year-olds who are ready to understand credit scores before applying for credit products.',
    highlights: [
      'Free credit score access',
      'Credit education resources',
      'Credit monitoring and identity monitoring context',
      'Good pre-credit-card learning step'
    ],
    guardrails: [
      'Only unlock for users 18+',
      'Credit education comes before credit acquisition',
      'Do not request SSN or credit report details inside FLEX'
    ],
    officialUrl: 'https://www.chase.com/personal/credit-cards/education/credit-score/why-use-chase-credit-journey',
    sourceNote:
      'Official Chase education pages describe Credit Journey as a free tool for credit score access, education, and monitoring.'
  },
  {
    id: 'freedom-rise',
    name: 'Chase Freedom Rise®',
    category: 'Credit Card',
    minAge: 18,
    maxAge: 99,
    fit: 'New-to-credit card path for ready users',
    summary:
      'Best for 18–19 year-olds only after passing a readiness check: steady income, full-balance discipline, and understanding APR.',
    highlights: [
      'Designed for new-to-credit users and students',
      '1.5% cash back on purchases',
      '$0 annual fee',
      'Can support credit building when used responsibly'
    ],
    guardrails: [
      'Never recommend to users under 18',
      'Require readiness check before surfacing',
      'Warn that interest applies if balances are carried',
      'Recommend autopay/full payment behavior'
    ],
    officialUrl: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/rise',
    sourceNote:
      'Official Chase Freedom Rise page positions it as best for new-to-credit users and students with 1.5% cash back and $0 annual fee.'
  }
];

export const GOALS = [
  'Emergency fund',
  'College move-in',
  'Laptop or school tech',
  'Car or transport',
  'First apartment',
  'Responsible credit building'
];

export const FREQUENCIES = [
  { label: 'Weekly', value: 'weekly', multiplier: 4.33 },
  { label: 'Biweekly', value: 'biweekly', multiplier: 2.17 },
  { label: 'Monthly', value: 'monthly', multiplier: 1 },
  { label: 'Irregular', value: 'irregular', multiplier: 1 }
];
