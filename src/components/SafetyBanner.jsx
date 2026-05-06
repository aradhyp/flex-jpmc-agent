import { Info } from 'lucide-react';

export function SafetyBanner({ warnings }) {
  if (!warnings.length) return null;

  return (
    <section className="safety-banner" aria-label="Safety and compliance notes">
      <Info size={18} />
      <div>
        <strong>Safety guardrails active</strong>
        <p>{warnings[0]}</p>
      </div>
    </section>
  );
}
