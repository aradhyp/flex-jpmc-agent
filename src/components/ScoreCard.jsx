import { ArrowUpRight, Gauge } from 'lucide-react';

export function ScoreCard({ score, nextBestAction, ageBand }) {
  return (
    <aside className="score-card card elevated" aria-label="FLEX money score">
      <div className="score-topline">
        <div>
          <p className="eyebrow">Today’s Money Score</p>
          <h2>{score}/100</h2>
        </div>
        <Gauge size={34} />
      </div>
      <div className="score-meter" role="meter" aria-valuenow={score} aria-valuemin="0" aria-valuemax="100">
        <span style={{ width: `${score}%` }} />
      </div>
      <div className="next-action">
        <p>Next best action</p>
        <strong>{nextBestAction}</strong>
      </div>
      <div className="micro-card">
        <span>Segment</span>
        <strong>{ageBand.replaceAll('-', ' ')}</strong>
      </div>
      <button className="primary-button" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
        See product match <ArrowUpRight size={16} />
      </button>
    </aside>
  );
}
