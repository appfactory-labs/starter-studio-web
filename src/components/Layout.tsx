import { ReactNode, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/support', label: 'Support' }
];

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const pageMap: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'App Factory | Mobile Product Studio',
        description:
          'App Factory is a mobile product studio operated by Starter Studio, Inc. We design, build, and operate focused apps for consumer markets, internal ventures, and selected product partners.'
      },
      '/privacy': {
        title: 'Privacy Policy | App Factory',
        description: 'Read the privacy policy for App Factory, operated by Starter Studio, Inc.'
      },
      '/terms': {
        title: 'Terms of Use | App Factory',
        description: 'Review the terms of use for App Factory, operated by Starter Studio, Inc.'
      },
      '/support': {
        title: 'Support | App Factory',
        description: 'Contact App Factory through the support form for product and company inquiries.'
      }
    };

    const current = pageMap[location.pathname] ?? pageMap['/'];
    document.title = current.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', current.description);
  }, [location.pathname]);

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand-wrap">
            <Link to="/" className="brand">App Factory</Link>
            <p className="legal-note">Operated by Starter Studio, Inc.</p>
          </div>
          <nav aria-label="Global">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="btn btn-secondary" to="/support">Contact</Link>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2>App Factory</h2>
            <p>Operated by Starter Studio, Inc.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <p className="copyright">© 2026 Starter Studio, Inc.</p>
      </footer>
    </div>
  );
}
