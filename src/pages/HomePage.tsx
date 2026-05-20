import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Mobile Apps',
    body: 'Small, focused iOS and Android apps built around clear user needs.'
  },
  {
    title: 'App Factory Research',
    body: 'Search-demand and market research used to identify product opportunities.'
  },
  {
    title: 'Product Operations',
    body: 'Lightweight systems for app publishing, metadata, support, and iteration.'
  }
];

const steps = ['Research demand', 'Validate competition', 'Build MVP', 'Launch and improve'];

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">Starter Studio, Inc.</p>
        <h1>Starter Studio builds focused mobile products.</h1>
        <p className="subtitle">
          We create and operate mobile-first apps through App Factory, a fast product studio focused on
          search-driven ideas, useful tools, and simple consumer software.
        </p>
        <div className="cta-group">
          <a className="btn btn-primary" href="mailto:support@starterstudio.us">Contact Support</a>
          <Link className="btn btn-secondary" to="/privacy">View Policies</Link>
        </div>
      </section>

      <section className="container section">
        <h2>About Starter Studio</h2>
        <p>
          Starter Studio, Inc. is a software company focused on building mobile applications and digital
          products. App Factory is our internal product development model for researching, validating, and
          shipping focused mobile app experiences.
        </p>
      </section>

      <section className="container section">
        <h2>What we build</h2>
        <div className="card-grid">
          {cards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Process</h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step} style={{ animationDelay: `${index * 0.08}s` }}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section panel">
        <h2>Built with responsible product practices</h2>
        <p>
          Our workflow prioritizes privacy-aware development, clear support paths, truthful product pages,
          platform compliance, and responsible publishing practices.
        </p>
      </section>

      <section className="container section">
        <h2>Contact Starter Studio</h2>
        <p>
          For product, account, privacy, or general company questions, contact us at{' '}
          <a href="mailto:support@starterstudio.us">support@starterstudio.us</a>.
        </p>
      </section>
    </>
  );
}
