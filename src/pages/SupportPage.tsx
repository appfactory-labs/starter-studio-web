export default function SupportPage() {
  return (
    <section className="container section legal-page">
      <h1>Support</h1>
      <p>For questions about Starter Studio, App Factory, or our mobile products, contact us.</p>
      <p>
        Email: <a href="mailto:support@starterstudio.us">support@starterstudio.us</a>
      </p>
      <p>We try to respond as soon as reasonably possible.</p>

      <div className="card-grid support-grid">
        <article className="card"><h2>Product support</h2><p>Help with product behavior, updates, and usage questions.</p></article>
        <article className="card"><h2>Privacy requests</h2><p>Questions about privacy and data handling for website or apps.</p></article>
        <article className="card"><h2>Business inquiries</h2><p>General company and collaboration-related communication.</p></article>
        <article className="card"><h2>App Store / Play Store support</h2><p>Requests tied to app listings, downloads, and store-related support paths.</p></article>
      </div>
    </section>
  );
}
