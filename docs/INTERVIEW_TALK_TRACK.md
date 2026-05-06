# FLEX Interview Talk Track

## 30-second pitch

FLEX is a youth financial enablement agent for 16–19 year-old earners. It helps them convert first income into financial independence through age-aware product recommendations, paycheck planning, automated savings, and responsible credit education. The prototype is intentionally minimal because the user segment needs speed, clarity, and trust.

## Why this matters to JPMC

JPMC can use FLEX to engage young earners before they become full-scale adult banking customers. The experience builds trust early by helping users avoid mistakes: not saving, overdrafting, choosing the wrong account, or using credit before they are ready.

## Product decisions I made

1. **Age-first routing**
   - A 16-year-old and a 19-year-old should not see the same product journey.

2. **Savings before credit**
   - The agent unlocks credit education at 18, but credit-card recommendations require readiness.

3. **Minimal UI**
   - The app avoids dense financial language and uses a one-page dashboard.

4. **Transparent recommendation logic**
   - Every product card explains why FLEX chose it.

5. **Compliance-aware UX**
   - The agent does not collect sensitive identifiers and shows guardrails directly in the experience.

## Demo script

1. Start with the default 17-year-old profile.
2. Show the Money Score and next best action.
3. Explain the paycheck split and weekly autosave suggestion.
4. Show that the product path prioritizes teen-safe checking and savings.
5. Change age to 18 or 19.
6. Show Credit Journey becoming available.
7. Complete the credit readiness checklist.
8. Show Chase Freedom Rise becoming visible only after readiness gates are met.

## Strong interviewer answer

> “I designed FLEX as an enablement agent, not just a chatbot. The key design decision is that the agent does not push products blindly. It uses age, income, goal, and credit readiness to decide what should be shown, what should be hidden, and what needs a human or guardian handoff. That makes it suitable for a regulated financial-services environment.”

## Possible enhancements

- Add multilingual microcopy for wider student populations.
- Add parent/guardian view for 16–17 year-olds.
- Add financial education modules with badges.
- Add Chase branch handoff based on ZIP code.
- Integrate Chase product eligibility APIs and content governance.
