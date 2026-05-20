import { Link } from 'react-router-dom';

const capabilities = [
  'Mobile app design',
  'SwiftUI / iOS development',
  'Android product development',
  'App Store and Play Store readiness',
  'Product websites',
  'Support and policy pages',
  'Lightweight backend/API integrations where needed',
  'Product iteration and maintenance'
];

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-panel">
          <p className="eyebrow">App Factory</p>
          <h1>Mobile products, built with focus.</h1>
          <p className="subtitle">
            App Factory is a product studio backed by Starter Studio, Inc. We design, build, and operate
            focused mobile apps for consumer use cases, internal ventures, and selected product partners.
          </p>
          <div className="cta-group">
            <Link className="btn btn-primary" to="/support">Contact</Link>
            <a className="btn btn-secondary" href="#company-information">View company info</a>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>We build practical software for mobile-first markets.</h2>
        <div className="card-grid card-grid-3">
          <article className="card">
            <h3>Consumer Apps</h3>
            <p>
              Focused iOS and Android products built around clear user needs, simple flows, and polished
              mobile experiences.
            </p>
          </article>
          <article className="card">
            <h3>Product Builds</h3>
            <p>
              End-to-end support for early product ideas, from interface design and app development to
              launch-ready implementation.
            </p>
          </article>
          <article className="card">
            <h3>App Operations</h3>
            <p>
              Ongoing support for publishing, product updates, metadata, store readiness, support flows,
              and iteration.
            </p>
          </article>
        </div>
      </section>

      <section id="company-information" className="container section panel">
        <h2>Backed by Starter Studio, Inc.</h2>
        <p>
          Starter Studio, Inc. is the legal company behind App Factory. The company builds and operates
          mobile applications, digital products, and related software systems.
        </p>
        <dl className="info-list">
          <div><dt>Legal name</dt><dd>Starter Studio, Inc.</dd></div>
          <div><dt>Public studio</dt><dd>App Factory</dd></div>
          <div><dt>Domain</dt><dd>starterstudio.us</dd></div>
          <div><dt>Focus</dt><dd>Mobile applications and digital products</dd></div>
        </dl>
      </section>

      <section className="container section">
        <h2>From idea to shipped product.</h2>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-item" key={capability}>
              <p>{capability}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section split-section">
        <article className="panel">
          <h2>Small, useful, and complete.</h2>
          <p>
            We prefer focused products over bloated platforms. Every app should have a clear job, a simple
            user experience, and a path to ongoing improvement after launch.
          </p>
        </article>
        <article className="panel">
          <h2>Built for responsible distribution.</h2>
          <p>
            Our standards include clear product pages, privacy-aware development, support access, platform
            compliance, truthful app descriptions, and maintainable software.
          </p>
        </article>
      </section>

      <section className="container section panel contact-panel">
        <h2>Work with App Factory</h2>
        <p>
          For product questions, business inquiries, privacy requests, or support related to Starter Studio
          or App Factory products, use the support form.
        </p>
        <Link className="btn btn-primary" to="/support">Contact us</Link>
      </section>
    </>
  );
}
