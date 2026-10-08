export const siteData = {
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'GST Acts', path: '/gst-acts' },
    { label: 'GST Rates', path: '/gst-rates' },
    { label: 'About GST', path: '/about-gst' },
    { label: 'SVLDRS', path: '/sabka-vishwas' },
    { label: 'ACES', path: '/advisories-aces' },
    { label: 'Archives', path: '/sitemap' },
    { label: 'HSNS CESS', path: '/advisories-hsns' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Help', path: '/help' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Related Links', path: '/related-links' }
  ],

  notices: [
    { title: 'Advisory No.10/2026 — CE INT-01/02 filing procedure', category: 'ACES', text: 'Current filing guidance for Central Excise declaration workflows.' },
    { title: 'Advisory No.09/2026 — HSNS INT-01/02', category: 'HSNS', text: 'HSNS-related filing and sealing/de-sealing notices.' },
    { title: 'CBIC Mitra Helpdesk number updated to 1800 425 0232', category: 'Support', text: 'Public support contact updated from August 2025 onwards.' },
    { title: 'Two-Factor Authentication for eligible taxpayer workflows', category: 'Security', text: 'Public guidance for secured access to taxpayer and application entry flows.' },
    { title: 'SVLDRS legacy dispute resolution content remains public for reference', category: 'Legacy', text: 'Archived material is retained for informational use only.' }
  ],

  quickLinks: [
    { title: 'GST Acts', path: '/gst-acts', description: 'CGST, IGST, UTGST and other core acts.', icon: '📘' },
    { title: 'GST Rates', path: '/gst-rates', description: 'Goods and services rates with public guidance.', icon: '📊' },
    { title: 'FAQs', path: '/gst-rates-faq', description: 'Common taxpayer rates and applicability questions.', icon: '❓' },
    { title: 'SVLDRS', path: '/sabka-vishwas', description: 'Legacy dispute resolution and scheme documents.', icon: '🧾' },
    { title: 'Advisories', path: '/advisories-aces', description: 'ACES and HSNS advisories for filing updates.', icon: '📣' },
    { title: 'Helpdesk', path: '/help', description: 'Public support and contact routing information.', icon: '☎️' }
  ],

  advisories: [
    { id: 'ADV-0001', title: 'Advisory No.10/2026', date: '09.06.2026', domain: 'ACES', subject: 'CE INT-01/02 Filing Procedure' },
    { id: 'ADV-0002', title: 'Advisory No.08/2026', date: '24.04.2026', domain: 'ACES', subject: 'CE Amendment Declaration Filing' },
    { id: 'ADV-0003', title: 'Advisory No.05/2026', date: '10.02.2026', domain: 'ACES', subject: 'CE PMT-01 Filing Procedure' },
    { id: 'ADV-0004', title: 'Advisory No.03/2026', date: '05.02.2026', domain: 'ACES', subject: 'CE Declaration Filing Procedure' },
    { id: 'ADV-0005', title: 'Advisory No.09/2026', date: '05.06.2026', domain: 'HSNS', subject: 'HSNS INT-01/02' },
    { id: 'ADV-0006', title: 'Advisory No.07/2026', date: '17.04.2026', domain: 'HSNS', subject: 'HSNS Amendment Declaration' },
    { id: 'ADV-0007', title: 'Advisory No.06/2026', date: '12.03.2026', domain: 'HSNS', subject: 'HSNS Return Filing' },
    { id: 'ADV-0008', title: 'Advisory No.04/2026', date: '09.02.2026', domain: 'HSNS', subject: 'HSNS Declaration' }
  ],

  faqs: [
    { question: 'Which rate applies to lac/shellac bangles?', answer: 'Heading 7117 — 3%' },
    { question: 'What is the GST rate on kulfi?', answer: 'Heading 2105 — 18%' },
    { question: 'What is the GST rate on solar panel mounting structures?', answer: '7308 / 7610 — 18%' },
    { question: 'What is the GST rate on idli/dosa batter?', answer: 'Heading 2106 — 18%' },
    { question: 'What is the GST rate on maize seed?', answer: 'Heading 1005 — Nil GST' },
    { question: 'What is the GST rate on sarees/dhoties by constituent fibre?', answer: 'Silk 5007 — 5%; Cotton 5208/5209 — 5%; Manmade filaments 5407/5408 — 5%' },
    { question: 'What is the GST rate on filters/water purifiers?', answer: '8421 — 18%; certain organic surface agents 3401/3402 show 18%/28% variants.' },
    { question: 'What is the GST rate on rakhi/kalava?', answer: 'Kalava — Nil; other rakhi according to constituent classification.' }
  ],

  acts: [
    { name: 'CGST Act', status: 'Public target currently shown as a broken link in the portal sitemap; retained for traceability.' },
    { name: 'IGST Act', status: 'Public target currently shown as a broken link in the portal sitemap; retained for traceability.' },
    { name: 'UTGST Act', status: 'Public target currently shown as a broken link in the portal sitemap; retained for traceability.' },
    { name: 'GST (Compensation to States) Act', status: 'Public target currently shown as a broken link in the portal sitemap; retained for traceability.' },
    { name: '101st Constitution Amendment Act, 2016', status: 'Public target currently shown as a broken link in the portal sitemap; retained for traceability.' }
  ],

  svldrs: [
    'Instruction No.01/2021-CX',
    'Removal of Difficulties Order 13.11.2020',
    'Notification No.01/2020 CE (NT) dated 14.05.2020',
    'FAQs and presentation material',
    'Chapter V of Finance (No.2) Act 2019',
    'SVLDRS Rules 2019',
    'Taxpayer and tax officer user manuals',
    'SVLDRS login and legacy reference material'
  ],

  helpdesk: [
    { name: 'CBIC Mitra', value: '1800 425 0232', audience: 'Taxpayers and officers' },
    { name: 'CBIC Mitra Email', value: 'cbicmitra.helpdesk@icegate.gov.in', audience: 'Taxpayers and officers' },
    { name: 'Saksham Seva', value: 'saksham.seva@icegate.gov.in', audience: 'Departmental officers and internal support' },
    { name: 'ICEGATE', value: '1800-3010-1000', audience: 'Importers and exporters' },
    { name: 'ICEGATE Email', value: 'icegatehelpdesk@icegate.gov.in', audience: 'Importers and exporters' },
    { name: 'GSTN', value: '1800 103 4786', audience: 'GST users' }
  ],

  relatedLinks: [
    { label: 'GST Council', url: 'https://www.gstcouncil.gov.in/' },
    { label: 'CBIC', url: 'https://www.cbic.gov.in/' },
    { label: 'GST Common Portal', url: 'https://www.gst.gov.in/' },
    { label: 'National Portal', url: 'https://www.india.gov.in/' },
    { label: 'Department of Revenue', url: 'https://www.dor.gov.in/' },
    { label: 'Ministry of Finance', url: 'https://finmin.nic.in/' },
    { label: 'MyGov', url: 'https://www.mygov.in/' },
    { label: 'Advance Rulings on GST', url: 'https://www.gstcouncil.gov.in/advance-rulings' }
  ],

  terms: [
    'The portal is maintained by the Central Board of Indirect Taxes & Customs, Department of Revenue, Ministry of Finance, Government of India.',
    'Portal content is intended for public information and should not be treated as a statement of law or formal legal advice.',
    'Users should cross-check with official notices, circulars, and the latest legal texts before acting on any information.',
    'Indian law governs the use of the portal and disputes are subject to the jurisdiction of courts in India.'
  ],

  privacy: [
    'The portal does not seek to collect personal or sensitive personal information except where a user voluntarily submits feedback or contact information.',
    'Limited details such as name, mobile number, and email may be used for support or helpdesk follow-up.',
    'Feedback and support details may be shared with authorized internal or vendor teams subject to confidentiality obligations.',
    'Aggregated, non-identifying analytical information may be used to improve security, traffic, and service quality.'
  ],

  disclaimer: [
    'The portal provides general information for public facilitation and does not replace legal, financial, or tax advice.',
    'Information may not immediately reflect the latest amendments, notifications, or procedural changes.',
    'Users must conduct independent due diligence and verify critical information through official sources.',
    'CBIC makes no guarantee of completeness, accuracy, reliability, suitability, or availability of information on the portal.'
  ],

  gallery: [
    { title: 'GST Day' },
    { title: 'Celebration 01' },
    { title: 'Celebration 02' },
    { title: 'Celebration 03' },
    { title: 'Celebration 04' },
    { title: 'Celebration 05' },
    { title: 'Celebration 06' }
  ]
};
