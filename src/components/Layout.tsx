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
        title: 'Starter Studio | Focused Mobile Products',
        description:
          'Starter Studio, Inc. builds and operates focused mobile apps through App Factory.'
      },
      '/privacy': {
        title: 'Privacy Policy | Starter Studio',
        description:
          'Read the privacy policy for Starter Studio, Inc. and how we handle website and product-related data.'
      },
      '/terms': {
        title: 'Terms of Use | Starter Studio',
        description:
          'Review the terms of use for the Starter Studio website and related content.'
      },
      '/support': {
        title: 'Support | Starter Studio',
        description:
          'Contact Starter Studio support for product, privacy, and business inquiries.'
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
          <Link to="/" className="brand">Starter Studio</Link>
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
          <a className="btn btn-primary" href="mailto:support@starterstudio.us">Contact Support</a>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2>Starter Studio, Inc.</h2>
            <p>App Factory</p>
            <p>starterstudio.us</p>
            <a href="mailto:support@starterstudio.us">support@starterstudio.us</a>
          </div>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <p className="copyright">© 2026 Starter Studio, Inc.</p>
      </footer>
    </div>
  );
}
