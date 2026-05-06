import { GOALS, FREQUENCIES } from '../data/productCatalog.js';

const stages = ['High school + part-time work', 'High school + freelancing', 'Gap year + earning', 'College-bound', 'First-year college'];
const independenceLevels = [
  { label: 'Parent-led', value: 'low' },
  { label: 'Shared decisions', value: 'medium' },
  { label: 'Mostly independent', value: 'high' }
];

export function OnboardingPanel({ profile, onChange }) {
  const update = (patch) => onChange({ ...profile, ...patch });

  return (
    <section id="profile" className="card section-card">
      <p className="eyebrow">Step 1</p>
      <h2>Know me</h2>
      <p className="section-copy">Five inputs let FLEX personalize the first-money pathway without collecting sensitive data.</p>

      <div className="form-grid">
        <label>
          Age
          <input
            type="number"
            min="16"
            max="19"
            value={profile.age}
            onChange={(event) => update({ age: Number(event.target.value) })}
          />
        </label>

        <label>
          Current stage
          <select value={profile.stage} onChange={(event) => update({ stage: event.target.value })}>
            {stages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </label>

        <label>
          Income amount
          <input
            type="number"
            min="0"
            value={profile.incomeAmount}
            onChange={(event) => update({ incomeAmount: Number(event.target.value) })}
          />
        </label>

        <label>
          Pay frequency
          <select value={profile.frequency} onChange={(event) => update({ frequency: event.target.value })}>
            {FREQUENCIES.map((frequency) => (
              <option key={frequency.value} value={frequency.value}>{frequency.label}</option>
            ))}
          </select>
        </label>

        <label>
          Primary goal
          <select value={profile.goal} onChange={(event) => update({ goal: event.target.value })}>
            {GOALS.map((goal) => (
              <option key={goal}>{goal}</option>
            ))}
          </select>
        </label>

        <label>
          Goal amount
          <input
            type="number"
            min="0"
            value={profile.goalAmount}
            onChange={(event) => update({ goalAmount: Number(event.target.value) })}
          />
        </label>
      </div>

      <div className="choice-row" role="group" aria-label="Independence level">
        {independenceLevels.map((item) => (
          <button
            key={item.value}
            className={profile.independenceLevel === item.value ? 'choice selected' : 'choice'}
            onClick={() => update({ independenceLevel: item.value })}
          >
            {item.label}
          </button>
        ))}
      </div>

      <label className="toggle-line">
        <input
          type="checkbox"
          checked={profile.guardianMode}
          onChange={(event) => update({ guardianMode: event.target.checked })}
        />
        Parent/guardian mode enabled for minor-safe guidance
      </label>
    </section>
  );
}
