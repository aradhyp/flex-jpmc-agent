# FLEX Architecture

## Front-end

- React + Vite single-page application.
- Minimal CSS system, no heavy UI framework.
- Componentized dashboard, onboarding, recommendations, credit readiness, and chat.

## Core modules

```text
src/
  components/
    Header.jsx
    OnboardingPanel.jsx
    ScoreCard.jsx
    MoneyPlan.jsx
    ProductRecommendations.jsx
    CreditReadiness.jsx
    SafetyBanner.jsx
    FlexChat.jsx
  data/
    productCatalog.js
  lib/
    budgetEngine.js
    recommendationEngine.js
    agentResponses.js
```

## Agent flow

1. **Profile capture**
   - Age
   - Stage
   - Income amount and frequency
   - Goal and goal amount
   - Independence level
   - Credit readiness checks

2. **Budget engine**
   - Normalizes income into estimated monthly income.
   - Creates paycheck buckets.
   - Calculates weekly autosave suggestion.
   - Estimates goal timeline.

3. **Recommendation engine**
   - Classifies user by age band.
   - Recommends Chase products by age, income, goals, and readiness.
   - Applies credit guardrails.

4. **Agent response layer**
   - Lightweight rule-based responses for demo purposes.
   - Intended production upgrade: retrieval-augmented, policy-constrained LLM responses.

## Production extensions

- Authenticated Chase customer context, only after explicit consent.
- Product eligibility API integration.
- Human handoff for branch/account-opening guidance.
- Analytics for onboarding completion, goal creation, and education module completion.
- Model monitoring for unsafe or over-promotional credit suggestions.
- Content governance workflow for product copy and compliance approval.

## Safety and privacy

FLEX intentionally avoids:

- SSN collection.
- Account number collection.
- Card number collection.
- Login credential collection.
- Personalized investment, tax, or legal advice.

The demo uses synthetic profile data only.
