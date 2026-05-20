import { Link } from 'react-router-dom';

const serviceItems = [
  {
    title: 'Mobile App Design',
    description: 'Clean, native-feeling interfaces for focused mobile products.'
  },
  {
    title: 'Product Development',
    description: 'iOS, Android, web, and supporting systems for launch-ready products.'
  },
  {
    title: 'Launch Support',
    description: 'App Store and Play Store preparation, product pages, policies, and release readiness.'
  },
  {
    title: 'Product Operations',
    description: 'Ongoing updates, support flows, product websites, and iteration after launch.'
  }
];

const partnerList = [
  'Consumer apps',
  'Internal product ventures',
  'Partner product builds',
  'Product websites',
  'Support and policy infrastructure'
];

export default function HomePage() {
  return (
    <>
      <section className="hero container reveal">
        <p className="eyebrow">APP FACTORY</p>
        <h1>Mobile products, built with focus.</h1>
        <p className="subtitle">
          App Factory is a mobile product studio operated by Starter Studio, Inc. We design, build,
          and operate focused apps for consumer markets, internal ventures, and selected product partners.
        </p>
        <div className="cta-group">
          <Link className="btn btn-primary" to="/support">Contact</Link>
          <a className="btn btn-secondary" href="#what-we-build">What we build</a>
        </div>
      </section>

      <section id="what-we-build" className="section section-divider reveal">
        <div className="container centered-intro">
          <h2>We build practical software for mobile-first markets.</h2>
          <p>
            From early product direction to launch-ready mobile experiences, App Factory helps turn
            focused ideas into useful software people can actually use.
          </p>
        </div>
        <div className="container service-list">
          {serviceItems.map((item) => (
            <article key={item.title} className="service-row">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-divider reveal">
        <div className="container split-large">
          <div>
            <h2>For internal ventures and selected partners.</h2>
            <p>
              App Factory works on focused consumer software, internal product ideas, and selected
              partner builds where a clear mobile product can create value. The studio keeps products
              simple, useful, and ready for real distribution.
            </p>
          </div>
          <ul className="focus-list" aria-label="App Factory focus areas">
            {partnerList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-divider reveal">
        <div className="container centered-intro narrow">
          <h2>Built for real product delivery.</h2>
          <p>
            Good software needs more than an idea. App Factory brings together product thinking,
            mobile engineering, launch preparation, and operational support so products can move from
            concept to public release.
          </p>
        </div>
        <div className="container visual-showcase" aria-hidden="true">
          <div className="device-frame frame-main">
            <div className="bar" />
            <div className="line long" />
            <div className="line" />
            <div className="line short" />
          </div>
          <div className="device-frame frame-side">
            <div className="bar" />
            <div className="line" />
            <div className="line short" />
          </div>
          <div className="panel-frame">
            <div className="line long" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </section>

      <section className="section section-divider reveal">
        <div className="container legal-operator">
          <h2>Operated by Starter Studio, Inc.</h2>
          <p>
            App Factory is operated by Starter Studio, Inc., a software company focused on mobile
            applications, digital products, and related software systems.
          </p>
          <dl>
            <div><dt>Legal company</dt><dd>Starter Studio, Inc.</dd></div>
            <div><dt>Studio</dt><dd>App Factory</dd></div>
            <div><dt>Focus</dt><dd>Mobile applications and digital products</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section-divider reveal">
        <div className="container contact-section">
          <h2>Start a conversation.</h2>
          <p>
            For product support, business inquiries, privacy requests, or questions about App Factory,
            use the support form.
          </p>
          <Link className="btn btn-primary" to="/support">Contact App Factory</Link>
        </div>
      </section>
    </>
  );
}
