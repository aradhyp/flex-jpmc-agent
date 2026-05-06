# FLEX — Financial Liberator and Enablement Xcaliber

FLEX is a **youth financial enablement agent** designed for 16–19 year-old young earners who are in high school, college-bound, or just starting college. The agent recommends age-appropriate Chase/JPMC digital product pathways, creates a first-paycheck money map, and gates credit suggestions behind safety checks.

> Interview positioning: FLEX is not a generic chatbot. It is an age-aware, guardrail-first financial enablement tool that supports the journey toward financial sustainability.

---

## Prototype preview

The app demonstrates:

- A simple, minimal, mobile-friendly UI.
- Age-based product recommendation logic.
- First-income budgeting and Autosave coaching.
- Credit readiness gating for 18–19 year-olds.
- Compliance-aware guardrails for minors.
- A lightweight Ask FLEX chat experience.

---

## Product concept

Young earners often start making money before they understand banking, savings, credit, or fee avoidance. FLEX supports the sequence:

```text
Earn → Save first → Spend safely → Avoid fees → Learn credit → Build independence
```

The agent helps users answer:

1. What should I do with my first paycheck?
2. Which Chase product fits my age and current life stage?
3. How much should I save automatically?
4. When am I actually ready for credit?
5. What is my next best action toward financial independence?

---

## Chase/JPMC product pathways represented

| User profile | FLEX recommendation |
|---|---|
| 16–17, high school earner, parent/guardian involved | Chase High School Checking℠ |
| 17–19, more independent checking need | Chase Secure Banking℠ |
| Any young earner with a goal | Chase Savings℠ + Autosave |
| 18–19, credit education stage | Chase Credit Journey® |
| 18–19, passes credit readiness checks | Chase Freedom Rise® |

Product copy and product assumptions should be validated by the official Chase product pages before production use.

Official references used for the prototype:

- Chase High School Checking: https://www.chase.com/personal/checking/high-school-checking
- Chase Secure Banking: https://personal.chase.com/personal/secure-banking
- Chase Autosave: https://www.chase.com/personal/financial-tools/plan/automate-savings
- Chase Credit Journey education: https://www.chase.com/personal/credit-cards/education/credit-score/why-use-chase-credit-journey
- Chase Freedom Rise: https://creditcards.chase.com/cash-back-credit-cards/freedom/rise

---

## Tech stack

- **React** for UI components.
- **Vite** for local development and build tooling.
- **Vanilla CSS** for a clean, interview-friendly design system.
- **Node built-in assertions** for recommendation-engine tests.
- **Rule-based agent logic** for transparent demo behavior.

---

## Repository structure

```text
flex-jpmc-agent/
  public/
    flex-mark.svg
  src/
    components/
      CreditReadiness.jsx
      FlexChat.jsx
      Header.jsx
      MoneyPlan.jsx
      OnboardingPanel.jsx
      ProductRecommendations.jsx
      SafetyBanner.jsx
      ScoreCard.jsx
    data/
      productCatalog.js
    lib/
      agentResponses.js
      budgetEngine.js
      recommendationEngine.js
    App.jsx
    main.jsx
    styles.css
  tests/
    recommendationEngine.test.mjs
  docs/
    ARCHITECTURE.md
    INTERVIEW_TALK_TRACK.md
    PRODUCT_BRIEF.md
  index.html
  package.json
  vite.config.js
```

---

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

Run logic tests:

```bash
npm test
```

---

## How the recommendation engine works

The logic is intentionally transparent for interview discussion.

### 1. Age banding

```text
16–17 → minor-earner
18–19 → young-adult-earner
```

### 2. Product rules

- Under 18: credit products are locked.
- Age 16–17: prioritize Chase High School Checking.
- Age 17–24: allow Chase Secure Banking pathway.
- Income or savings goal present: recommend Chase Savings + Autosave.
- Age 18+: unlock Credit Journey education.
- Age 18+ with readiness checks: show Chase Freedom Rise.

### 3. Readiness checks

FLEX requires the user to confirm:

- Steady income.
- Ability to pay full balance monthly.
- Understanding of APR, due dates, utilization, and late-payment risk.

Only then does the card recommendation become visible.

---

## Safety and compliance guardrails

FLEX avoids collecting:

- SSN.
- Account numbers.
- Card numbers.
- Login credentials.
- Sensitive account-level information.

FLEX also avoids:

- Personalized legal, tax, or investment advice.
- Credit-card recommendations to minors.
- Dark-pattern product pushing.
- Product eligibility guarantees.

---

## Interview demo flow

1. Show the default 17-year-old high-school earner profile.
2. Explain the Money Score and next best action.
3. Walk through the money map and weekly Autosave suggestion.
4. Show that the agent recommends teen-safe checking and savings.
5. Change age to 18 or 19.
6. Show Credit Journey unlock.
7. Complete the credit readiness checklist.
8. Show Chase Freedom Rise appear only after readiness is proven.
9. Open `docs/INTERVIEW_TALK_TRACK.md` and explain design tradeoffs.

---

## GitHub setup

After downloading this repository folder:

```bash
cd flex-jpmc-agent
git init
git add .
git commit -m "Initial FLEX youth financial enablement agent prototype"
```

Create an empty GitHub repository named `flex-jpmc-agent`, then run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flex-jpmc-agent.git
git push -u origin main
```

---

## Future roadmap

- Parent/guardian dashboard.
- Branch handoff and appointment flow.
- Product eligibility API integration.
- Multilingual student mode.
- Credit education micro-lessons.
- Savings streaks and milestone badges.
- Human escalation for regulated or complex cases.

---

## Disclaimer

This repository is an interview prototype and product-design demonstration. It is not affiliated with JPMorgan Chase & Co. Product names and public product details are used for conceptual demonstration only. Validate all product copy, eligibility, disclosures, fees, and legal requirements with official JPMC/Chase sources before production use.
