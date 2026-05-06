import { BadgeDollarSign } from 'lucide-react';

export function Header() {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <div className="brand-mark" aria-hidden="true">
          <BadgeDollarSign size={24} />
        </div>
        <div>
          <strong>FLEX</strong>
          <span>Financial Liberator & Enablement Xcaliber</span>
        </div>
      </div>
      <nav aria-label="Prototype sections">
        <a href="#profile">Profile</a>
        <a href="#plan">Plan</a>
        <a href="#products">Products</a>
        <a href="#ask-flex">Ask FLEX</a>
      </nav>
    </header>
  );
}
