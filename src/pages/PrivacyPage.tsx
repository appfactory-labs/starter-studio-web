import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <section className="container legal-page section">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> May 20, 2026</p>
      <p>
        App Factory is operated by Starter Studio, Inc. This website may collect basic information you
        voluntarily provide when submitting messages through our Support page.
      </p>
      <p>
        Our hosting providers may collect standard technical logs, such as IP address, browser type, device
        details, and pages visited, to operate and secure the website.
      </p>
      <p>We do not sell personal information.</p>
      <p>
        For individual apps, app-specific privacy details may be provided in that app or its App Store / Play
        Store listing.
      </p>
      <p><strong>Legal company name:</strong> Starter Studio, Inc.</p>
      <p>You can contact Starter Studio through the <Link to="/support">Support page</Link>.</p>
    </section>
  );
}
