import { PiggyBank, WalletCards } from 'lucide-react';

export function MoneyPlan({ plan, profile }) {
  return (
    <section id="plan" className="card section-card">
      <p className="eyebrow">Step 2</p>
      <h2>Set my money map</h2>
      <p className="section-copy">FLEX converts first income into clear buckets: future, emergency, needs, and flexible spend.</p>

      <div className="income-summary">
        <div>
          <span>Estimated monthly income</span>
          <strong>${plan.monthlyIncome}</strong>
        </div>
        <div>
          <span>Goal</span>
          <strong>{profile.goal}</strong>
        </div>
      </div>

      <div className="bucket-list">
        {plan.buckets.map((bucket) => (
          <article className="bucket" key={bucket.key}>
            <div className="bucket-icon" aria-hidden="true">
              {bucket.key === 'future' || bucket.key === 'emergency' ? <PiggyBank size={18} /> : <WalletCards size={18} />}
            </div>
            <div>
              <div className="bucket-title">
                <strong>{bucket.label}</strong>
                <span>${bucket.amount}</span>
              </div>
              <p>{bucket.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="callout">
        <strong>{plan.coachingLine}</strong>
        {plan.monthsToGoal ? <span>Estimated goal timeline: {plan.monthsToGoal} month(s).</span> : null}
      </div>
    </section>
  );
}
