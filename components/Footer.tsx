import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#fff', padding: '48px 80px 24px', marginTop: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, maxWidth: 1200, margin: '0 auto', paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>Vinnarasi Community College</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.7 }}>
            Also known as <strong>Vinnarasi Vocational Training Centre</strong>. 
            The premier women&apos;s nursing and vocational college in Vaiyampatti, Manapparai Taluk, Trichy District since 2006.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/courses', 'Courses'], ['/admissions', 'Admissions'], ['/contact', 'Contact'], ['/faq', 'FAQ']].map(([href, label]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>Our Courses</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['GDA Diploma (1 & 2 Year)', 'Patient Care Assistant', 'Medical Lab Technology', 'Operation Theatre Technology', 'First Aid & Patient Care', 'Village Health Worker'].map(c => (
              <li key={c}><Link href="/courses" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.82rem' }}>{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>Contact</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.8 }}>
            Vaiyampatti, Manapparai<br />
            Trichy, Tamil Nadu — 621315<br />
            <a href="tel:+919942185370" style={{ color: '#60a5fa', textDecoration: 'none' }}>+91 99421 85370</a><br />
            <a href="mailto:vinnarasicommunitycollege@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.78rem' }}>vinnarasicommunitycollege@gmail.com</a>
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', margin: 0 }}>
          &copy; 2006–{new Date().getFullYear()} Vinnarasi Community College. All rights reserved.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', margin: 0 }}>
          Best vocational training college in Manapparai, Trichy, Tamil Nadu
        </p>
      </div>
    </footer>
  );
}
