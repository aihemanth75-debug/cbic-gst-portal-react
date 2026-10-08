import { useMemo } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { siteData } from './data/siteData';

const Header = () => {
  const navItems = siteData.navigation;

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="utility-links">
            <span>हिन्दी</span>
            <span>Sitemap</span>
            <span>Help</span>
            <span>A-</span>
            <span>A</span>
            <span>A+</span>
          </div>
          <div className="utility-meta">
            <span>CBIC Mitra Helpdesk: 1800 425 0232</span>
          </div>
        </div>
      </div>

      <div className="brandbar">
        <div className="container brandbar-inner">
          <div className="brand-wrap">
            <div className="brand-mark">🇮🇳</div>
            <div>
              <div className="brand-title">CBIC GST Portal</div>
              <div className="brand-subtitle">Central Board of Indirect Taxes and Customs</div>
            </div>
          </div>
          <div className="brand-actions">
            <button className="ghost-btn">Report Tax Fraud</button>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-inner">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="section-header">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

const HomePage = () => {
  const notices = siteData.notices;

  return (
    <>
      <div className="notice-strip">
        <div className="container notice-inner">
          <div className="flash-label">Attention</div>
          <div className="ticker">
            {notices.map((item) => (
              <span key={item.title}>{item.title}</span>
            ))}
          </div>
        </div>
      </div>

      <main className="page-shell home-page">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Public Information Portal</span>
              <h1>Goods and Services Tax</h1>
              <p>
                A public-facing information and service-navigation gateway for GST laws, rates,
                notices, legacy archives, user guidance, and taxpayer support.
              </p>
              <div className="hero-actions">
                <NavLink to="/gst-rates" className="primary-btn">GST Rates</NavLink>
                <NavLink to="/help" className="secondary-btn">Helpdesk</NavLink>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-badge">Current advisories</div>
              <ul>
                {siteData.advisories.slice(0, 4).map((advisory) => (
                  <li key={advisory.id}>{advisory.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container section-block">
          <SectionTitle
            eyebrow="Portal overview"
            title="CBIC GST ecosystem"
            description="Publicly accessible information flows covering taxpayer guidance, notices, legal references, support routes, and access boundaries."
          />

          <div className="feature-grid">
            {siteData.quickLinks.map((item) => (
              <NavLink key={item.title} to={item.path} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </NavLink>
            ))}
          </div>
        </section>

        <section className="container section-block alternate-block">
          <SectionTitle
            eyebrow="What's New"
            title="Current notices and advisory surfaces"
            description="Public notices and advisory content currently surfaced by the portal."
          />

          <div className="notice-grid">
            {notices.map((notice) => (
              <div key={notice.title} className="notice-card">
                <span>{notice.category}</span>
                <h3>{notice.title}</h3>
                <p>{notice.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section-block">
          <SectionTitle
            eyebrow="Support"
            title="Helpdesk & public support"
            description="Routing information for CBIC Mitra, ICEGATE, GSTN, and departmental support channels."
          />

          <div className="support-grid">
            {siteData.helpdesk.map((item) => (
              <div key={item.name} className="support-card">
                <h3>{item.name}</h3>
                <p>{item.value}</p>
                <small>{item.audience}</small>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const ContentPage = ({ title, intro, children, breadcrumbs = ['Home'] }) => (
  <main className="page-shell content-page">
    <div className="container">
      <div className="breadcrumbs">{breadcrumbs.join(' / ')}</div>
      <div className="page-header-block">
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
      {children}
    </div>
  </main>
);

const AboutPage = () => (
  <ContentPage title="Know About GST" intro="Understanding the GST concept, input tax credit, and tax incidence across states." breadcrumbs={['Home', 'About GST']}>
    <div className="content-grid two-col">
      <article className="info-panel">
        <h3>What is GST?</h3>
        <p>
          GST is a destination-based consumption tax designed to replace multiple indirect taxes with a unified system.
          It is collected at the point of consumption while allowing input tax credit to reduce cascading impact.
        </p>
      </article>
      <article className="info-panel">
        <h3>Key concept</h3>
        <p>
          Producers and suppliers pay tax on value addition, and the final consumer bears the tax burden through the supply chain.
          This enables a more transparent and integrated tax regime.
        </p>
      </article>
    </div>
  </ContentPage>
);

const ActsPage = () => (
  <ContentPage title="GST Acts" intro="Core central and state GST legislation reference page." breadcrumbs={['Home', 'GST Acts']}>
    <div className="data-list">
      {siteData.acts.map((act) => (
        <div key={act.name} className="data-row">
          <strong>{act.name}</strong>
          <span>{act.status}</span>
        </div>
      ))}
    </div>
  </ContentPage>
);

const RatesPage = () => (
  <ContentPage title="GST Goods and Services Rates" intro="Public guidance on GST rates across common goods and services categories." breadcrumbs={['Home', 'Services', 'GST Rates']}>
    <div className="faq-list">
      {siteData.faqs.map((faq) => (
        <div key={faq.question} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  </ContentPage>
);

const FaqPage = () => (
  <ContentPage title="GST Rates FAQs" intro="Common taxpayer queries on GST rate applicability and classification." breadcrumbs={['Home', 'Services', 'GST Rates FAQ']}>
    <div className="faq-list">
      {siteData.faqs.map((faq) => (
        <div key={faq.question} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  </ContentPage>
);

const SVLDRSPage = () => (
  <ContentPage title="Sabka Vishwas (Legacy Dispute Resolution) Scheme, 2019" intro="Legacy dispute resolution information and public scheme documents." breadcrumbs={['Home', 'SVLDRS']}>
    <div className="data-list">
      {siteData.svldrs.map((item) => (
        <div key={item} className="data-row">
          <strong>{item}</strong>
          <span>Public document</span>
        </div>
      ))}
    </div>
  </ContentPage>
);

const AdvisoryAcesPage = () => (
  <ContentPage title="Advisories for ACES Tax Payers" intro="ACES and Central Excise advisory list for filing procedures and declaration updates." breadcrumbs={['Home', 'ACES']}>
    <div className="card-list">
      {siteData.advisories.filter((item) => item.domain === 'ACES').map((advisory) => (
        <div key={advisory.id} className="card-item">
          <span className="badge">{advisory.id}</span>
          <h3>{advisory.title}</h3>
          <p>{advisory.subject}</p>
          <small>{advisory.date}</small>
        </div>
      ))}
    </div>
  </ContentPage>
);

const AdvisoryHsnsPage = () => (
  <ContentPage title="Advisories for HSNS Taxpayers" intro="HSNS-specific filing and declaration advisory notices." breadcrumbs={['Home', 'HSNS CESS']}>
    <div className="card-list">
      {siteData.advisories.filter((item) => item.domain === 'HSNS').map((advisory) => (
        <div key={advisory.id} className="card-item">
          <span className="badge">{advisory.id}</span>
          <h3>{advisory.title}</h3>
          <p>{advisory.subject}</p>
          <small>{advisory.date}</small>
        </div>
      ))}
    </div>
  </ContentPage>
);

const HelpPage = () => (
  <ContentPage title="Help" intro="Public guidance for CBIC Mitra helpdesk, support routing, and enquiry channels." breadcrumbs={['Home', 'Help']}>
    <div className="help-stack">
      {siteData.helpdesk.map((item) => (
        <div key={item.name} className="help-item">
          <h3>{item.name}</h3>
          <p>{item.value}</p>
          <small>{item.audience}</small>
        </div>
      ))}
    </div>
  </ContentPage>
);

const ContactPage = () => (
  <ContentPage title="Contact Us" intro="Support and routing information for taxpayer, portal, and departmental issues." breadcrumbs={['Home', 'Contact Us']}>
    <div className="data-list">
      {siteData.helpdesk.map((item) => (
        <div key={item.name} className="data-row">
          <strong>{item.name}</strong>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  </ContentPage>
);

const RelatedLinksPage = () => (
  <ContentPage title="Related Links" intro="Public government and ecosystem links relevant to GST administration and policy." breadcrumbs={['Home', 'Related Links']}>
    <div className="list-card-block">
      {siteData.relatedLinks.map((link) => (
        <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="external-link-row">
          <span>{link.label}</span>
          <span>{link.url}</span>
        </a>
      ))}
    </div>
  </ContentPage>
);

const PolicyPage = ({ title, intro, content }) => (
  <ContentPage title={title} intro={intro} breadcrumbs={['Home', title]}>
    <div className="policy-box">
      {content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </ContentPage>
);

const GalleryPage = () => (
  <ContentPage title="Image Gallery" intro="Public gallery of event and portal visuals." breadcrumbs={['Home', 'Gallery']}>
    <div className="gallery-grid">
      {siteData.gallery.map((image) => (
        <div key={image.title} className="gallery-card">
          <div className="gallery-thumb">{image.title}</div>
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  </ContentPage>
);

const PortalLoginPage = () => (
  <ContentPage title="ACES / CE & ST Public Entry" intro="Protected service entry point, shown as a public access boundary in the audited portal." breadcrumbs={['Home', 'Portal Entry']}>
    <div className="login-box">
      <label>
        User ID
        <input type="text" placeholder="Enter user ID" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Enter password" />
      </label>
      <label>
        CAPTCHA
        <input type="text" placeholder="Enter verification code" />
      </label>
      <button className="primary-btn full-width">Login</button>
    </div>
  </ContentPage>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <h3>CBIC GST Portal</h3>
        <p>Public information and support gateway for GST taxpayers, rules, advisories, and legacy references.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><NavLink to="/about-gst">GST Awareness</NavLink></li>
          <li><NavLink to="/sitemap">Sitemap</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
        </ul>
      </div>
      <div>
        <h4>Policies</h4>
        <ul>
          <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
          <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
          <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
        </ul>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>CBIC Mitra: 1800 425 0232</li>
          <li>GSTN: 1800 103 4786</li>
          <li>ICEGATE: 1800-3010-1000</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      © 2026 CBIC GST Portal • Public information portal
    </div>
  </footer>
);

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-gst" element={<AboutPage />} />
      <Route path="/gst-acts" element={<ActsPage />} />
      <Route path="/gst-rates" element={<RatesPage />} />
      <Route path="/gst-rates-faq" element={<FaqPage />} />
      <Route path="/sabka-vishwas" element={<SVLDRSPage />} />
      <Route path="/advisories-aces" element={<AdvisoryAcesPage />} />
      <Route path="/advisories-hsns" element={<AdvisoryHsnsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/related-links" element={<RelatedLinksPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/cbec-portal-ui" element={<PortalLoginPage />} />
      <Route path="/terms" element={<PolicyPage title="Terms & Conditions" intro="Portal usage and legal conditions." content={siteData.terms} />} />
      <Route path="/privacy" element={<PolicyPage title="Privacy Policy" intro="Public privacy notices and handling of user information." content={siteData.privacy} />} />
      <Route path="/disclaimer" element={<PolicyPage title="Disclaimer" intro="General information only — not legal advice or official interpretation." content={siteData.disclaimer} />} />
      <Route path="/sitemap" element={<ContentPage title="Sitemap" intro="Navigation map across key public content surfaces." breadcrumbs={['Home', 'Sitemap']}><div className='sitemap-grid'>{siteData.navigation.map((item) => <NavLink key={item.label} to={item.path} className='sitemap-item'>{item.label}</NavLink>)}</div></ContentPage>} />
    </Routes>
    <Footer />
  </>
);

export default App;
