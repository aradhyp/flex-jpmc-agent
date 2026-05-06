export function generateFlexReply(prompt, profile, moneyPlan, recommendations) {
  const text = prompt.toLowerCase();

  if (!prompt.trim()) {
    return 'Ask me about saving, first checking accounts, direct deposit, credit readiness, or how to split your first paycheck.';
  }

  if (text.includes('credit') || text.includes('card')) {
    if (profile.age < 18) {
      return 'Because you are under 18, FLEX will not recommend a credit card. Your safer path is checking + savings habits, then Credit Journey when you turn 18.';
    }
    const cardReady = profile.hasSteadyIncome && profile.canPayInFull && profile.knowsCreditBasics;
    return cardReady
      ? 'You passed the readiness screen. FLEX can show Chase Freedom Rise as an option, but only with a full-payment rule: never carry a balance for lifestyle spending.'
      : 'Start with Credit Journey first. FLEX unlocks credit-card recommendations only after steady income, full-payment discipline, and credit-basics confidence.';
  }

  if (text.includes('save') || text.includes('autosave') || text.includes('goal')) {
    return `Your FLEX plan suggests saving about $${moneyPlan.autoSaveWeekly}/week. That supports your future-goal and emergency-buffer buckets before flexible spending.`;
  }

  if (text.includes('product') || text.includes('account') || text.includes('checking')) {
    const top = recommendations[0];
    return top
      ? `Your strongest current match is ${top.name}. FLEX chose it because: ${top.reason}`
      : 'Complete your profile first. FLEX needs your age and income pattern to recommend an account pathway safely.';
  }

  if (text.includes('dream') || text.includes('independent') || text.includes('freedom')) {
    return 'Financial independence starts with repeatable behaviors: deposit income, save first, avoid fees, track goals, and only use credit when you can pay in full.';
  }

  return 'FLEX keeps it simple: earn, separate savings first, spend within a limit, avoid fees, and build credit only when ready.';
}
