import { PRODUCT_CATALOG } from '../data/productCatalog.js';

const byId = (id) => PRODUCT_CATALOG.find((product) => product.id === id);

function createRecommendation(id, reason, priority = 'Recommended') {
  return {
    ...byId(id),
    reason,
    priority
  };
}

export function getAgeBand(age) {
  if (age < 16) return 'below-scope';
  if (age <= 17) return 'minor-earner';
  if (age <= 19) return 'young-adult-earner';
  return 'above-scope';
}

export function recommendProducts(profile) {
  const age = Number(profile.age) || 0;
  const monthlyIncome = Number(profile.monthlyIncome) || 0;
  const ageBand = getAgeBand(age);
  const recommendations = [];
  const warnings = [];

  if (ageBand === 'below-scope') {
    warnings.push('FLEX is designed for users aged 16–19. For younger users, parent-led banking education is recommended.');
    return { ageBand, recommendations, warnings };
  }

  if (ageBand === 'above-scope') {
    warnings.push('FLEX is optimized for 16–19 year-old young earners. This profile may need a broader adult banking journey.');
  }

  if (age <= 17) {
    recommendations.push(
      createRecommendation(
        'high-school-checking',
        'You are under 18, so FLEX prioritizes a teen checking path with parent/guardian co-ownership.',
        'Best first step'
      )
    );

    if (age === 17 && profile.independenceLevel === 'high') {
      recommendations.push(
        createRecommendation(
          'secure-banking',
          'At 17, Chase Secure Banking can be reviewed as a more independent checking path, subject to eligibility and opening requirements.',
          'Next-step option'
        )
      );
    }
  }

  if (age >= 17 && age <= 24) {
    const alreadyRecommended = recommendations.some((item) => item.id === 'secure-banking');
    if (!alreadyRecommended) {
      recommendations.push(
        createRecommendation(
          'secure-banking',
          'You are in the 17–24 band where Chase Secure Banking can support simple checking with no overdraft fees.',
          age >= 18 ? 'Best first step' : 'Review with guardian'
        )
      );
    }
  }

  if (monthlyIncome > 0 || profile.goal) {
    recommendations.push(
      createRecommendation(
        'savings-autosave',
        'You have income or a goal, so automated savings can turn each paycheck into progress.',
        'Habit builder'
      )
    );
  }

  if (age >= 18) {
    recommendations.push(
      createRecommendation(
        'credit-journey',
        'You are 18+, so credit education and monitoring should come before applying for credit.',
        'Credit education'
      )
    );

    if (profile.hasSteadyIncome && profile.canPayInFull && profile.knowsCreditBasics) {
      recommendations.push(
        createRecommendation(
          'freedom-rise',
          'You passed the readiness check: steady income, full-payment discipline, and basic credit understanding.',
          'Only if ready'
        )
      );
    } else {
      warnings.push('Credit card options are hidden until the user passes the readiness check: steady income, full-payment discipline, and basic credit understanding.');
    }
  } else {
    warnings.push('Credit products are locked because the user is under 18. FLEX should focus on banking, savings, and parent/guardian-supported education.');
  }

  return { ageBand, recommendations, warnings };
}

export function getNextBestAction(profile, moneyPlan, recommendations) {
  if (!profile.age) return 'Complete your age and earning profile.';
  if (!profile.incomeAmount) return 'Add your usual income amount to generate a money map.';
  if (!profile.goal) return 'Choose one financial goal so FLEX can personalize your plan.';
  if (recommendations.some((item) => item.id === 'savings-autosave')) {
    return `Set a weekly autosave target of about $${moneyPlan.autoSaveWeekly}.`;
  }
  return 'Review your recommended Chase product pathway.';
}
