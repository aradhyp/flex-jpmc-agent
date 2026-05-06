import { LockKeyhole, UnlockKeyhole } from 'lucide-react';

const checks = [
  {
    key: 'hasSteadyIncome',
    label: 'I have steady income I can verify or explain.'
  },
  {
    key: 'canPayInFull',
    label: 'I can pay the full balance every month.'
  },
  {
    key: 'knowsCreditBasics',
    label: 'I understand APR, due dates, utilization, and late payment risk.'
  }
];

export function CreditReadiness({ profile, onChange }) {
  const locked = profile.age < 18;
  const ready = !locked && checks.every((check) => Boolean(profile[check.key]));
  const update = (key, value) => onChange({ ...profile, [key]: value });

  return (
    <section className="card section-card compact-card">
      <p className="eyebrow">Step 4</p>
      <h2>Credit readiness</h2>
      <p className="section-copy">FLEX teaches credit before recommending credit. Under-18 users remain locked out of credit products.</p>

      <div className={locked ? 'readiness locked' : 'readiness'}>
        {locked ? <LockKeyhole size={30} /> : ready ? <UnlockKeyhole size={30} /> : <LockKeyhole size={30} />}
        <div>
          <strong>{locked ? 'Locked until 18' : ready ? 'Credit option unlocked' : 'Education mode only'}</strong>
          <span>
            {locked
              ? 'Focus on checking, savings, and guardian-supported habits.'
              : ready
                ? 'FLEX can surface Chase Freedom Rise as an option, with full-pay discipline.'
                : 'Complete all checks before FLEX shows card recommendations.'}
          </span>
        </div>
      </div>

      <div className="checklist">
        {checks.map((check) => (
          <label key={check.key} className={locked ? 'disabled-check' : ''}>
            <input
              type="checkbox"
              disabled={locked}
              checked={Boolean(profile[check.key])}
              onChange={(event) => update(check.key, event.target.checked)}
            />
            {check.label}
          </label>
        ))}
      </div>
    </section>
  );
}
