import { ExternalLink, ShieldCheck } from 'lucide-react';

export function ProductRecommendations({ recommendations }) {
  return (
    <section id="products" className="card section-card">
      <p className="eyebrow">Step 3</p>
      <h2>Suggest my Chase path</h2>
      <p className="section-copy">Age, income, and readiness drive the recommendation. Credit products remain gated by safety logic.</p>

      <div className="product-stack">
        {recommendations.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-header">
              <div>
                <span className="tag">{product.priority}</span>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
              </div>
              <ShieldCheck size={26} />
            </div>
            <div className="why-box">
              <strong>Why FLEX chose this</strong>
              <p>{product.reason}</p>
            </div>
            <ul>
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <details>
              <summary>Guardrails</summary>
              <ul>
                {product.guardrails.map((guardrail) => (
                  <li key={guardrail}>{guardrail}</li>
                ))}
              </ul>
            </details>
            <a href={product.officialUrl} target="_blank" rel="noreferrer" className="text-link">
              Official product page <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
