import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <section className="container legal-page section">
      <h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> May 20, 2026</p>
      <p>These terms apply to your use of the App Factory website and related company information.</p>
      <p>App Factory is operated by Starter Studio, Inc.</p>
      <p>Website content is provided for informational purposes and may change over time.</p>
      <p>Users must not misuse, disrupt, or attempt unauthorized access to this website.</p>
      <p>All intellectual property belongs to Starter Studio, Inc. unless otherwise stated.</p>
      <p>This website is provided without warranties of any kind.</p>
      <p>To the maximum extent allowed by law, Starter Studio, Inc. is not liable for damages arising from use of this website.</p>
      <p><strong>Legal company name:</strong> Starter Studio, Inc.</p>
      <p>You can contact Starter Studio through the <Link to="/support">Support page</Link>.</p>
    </section>
  );
}
