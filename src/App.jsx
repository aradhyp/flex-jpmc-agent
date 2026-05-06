import { useMemo, useState } from 'react';
import { Header } from './components/Header.jsx';
import { OnboardingPanel } from './components/OnboardingPanel.jsx';
import { ScoreCard } from './components/ScoreCard.jsx';
import { MoneyPlan } from './components/MoneyPlan.jsx';
import { ProductRecommendations } from './components/ProductRecommendations.jsx';
import { CreditReadiness } from './components/CreditReadiness.jsx';
import { FlexChat } from './components/FlexChat.jsx';
import { SafetyBanner } from './components/SafetyBanner.jsx';
import { buildMoneyPlan, calculateMoneyScore } from './lib/budgetEngine.js';
import { getNextBestAction, recommendProducts } from './lib/recommendationEngine.js';

const DEFAULT_PROFILE = {
  age: 17,
  stage: 'High school + part-time work',
  incomeAmount: 120,
  frequency: 'weekly',
  goal: 'College move-in',
  goalAmount: 1000,
  guardianMode: true,
  independenceLevel: 'medium',
  hasSteadyIncome: false,
  canPayInFull: false,
  knowsCreditBasics: false
};

function App() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  const moneyPlan = useMemo(() => buildMoneyPlan(profile), [profile]);
  const { recommendations, warnings, ageBand } = useMemo(
    () => recommendProducts({ ...profile, monthlyIncome: moneyPlan.monthlyIncome }),
    [profile, moneyPlan.monthlyIncome]
  );
  const moneyScore = useMemo(
    () => calculateMoneyScore(profile, recommendations),
    [profile, recommendations]
  );
  const nextBestAction = useMemo(
    () => getNextBestAction(profile, moneyPlan, recommendations),
    [profile, moneyPlan, recommendations]
  );

  return (
    <main className="app-shell">
      <Header />
      <section className="hero-grid">
        <div className="hero-copy card elevated">
          <p className="eyebrow">Youth financial enablement agent</p>
          <h1>FLEX turns first income into financial confidence.</h1>
          <p>
            A minimal JPMC/Chase digital-product assistant for 16–19 year-old earners who are
            preparing for college, work, and responsible independence.
          </p>
          <div className="hero-actions" aria-label="Prototype highlights">
            <span>Product match</span>
            <span>Paycheck plan</span>
            <span>Credit guardrails</span>
          </div>
        </div>
        <ScoreCard score={moneyScore} nextBestAction={nextBestAction} ageBand={ageBand} />
      </section>

      <SafetyBanner warnings={warnings} />

      <section className="layout-grid">
        <OnboardingPanel profile={profile} onChange={setProfile} />
        <MoneyPlan plan={moneyPlan} profile={profile} />
      </section>

      <section className="layout-grid wide-left">
        <ProductRecommendations recommendations={recommendations} />
        <CreditReadiness profile={profile} onChange={setProfile} />
      </section>

      <FlexChat profile={profile} moneyPlan={moneyPlan} recommendations={recommendations} />
    </main>
  );
}

export default App;
