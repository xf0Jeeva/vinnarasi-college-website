import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Nursing & Allied Health Courses in Manapparai, Trichy',
  description:
    'Frequently asked questions about nursing and allied health diploma courses in Manapparai, Trichy. Find the best GDA, patient care, MLT, OT technology courses near you with 100% placement.',
  keywords: [
    'nursing college FAQ Manapparai',
    'best allied health college Trichy',
    'GDA course admission Trichy',
    'paramedical college near Manapparai',
    'nursing college fees Trichy',
    'healthcare diploma admission Tamil Nadu',
    'which is best nursing college Manapparai',
    'top vocational college Trichy district',
  ],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/faq' },
};

const faqs = [
  {
    q: 'Which is the best nursing and allied health college near Manapparai?',
    a: 'Vinnarasi Community College in Vaiyampatti, Manapparai is the most trusted women\'s vocational training centre in the Trichy district, with 19+ years of experience, govt-approved courses, and 100% placement support.',
  },
  {
    q: 'What allied health and paramedical courses are available near Manapparai, Trichy?',
    a: 'Vinnarasi Community College offers GDA (General Duty Assistant), Patient Care Assistant, Medical Laboratory Technology, Operation Theatre Technology, First Aid & Patient Care, and Village Health Worker diploma courses.',
  },
  {
    q: 'Which college offers GDA course with placement in Trichy?',
    a: 'Vinnarasi Community College, Vaiyampatti offers both 1-year and 2-year GDA diploma programs with direct hospital placement in Trichy and outstation hospitals.',
  },
  {
    q: 'Is there a women\'s vocational college near Manapparai with affordable fees?',
    a: 'Yes. Vinnarasi Community College is exclusively for women, with affordable fees, instalment payment options, and free books, uniform, and ID card for students joining by June 1st.',
  },
  {
    q: 'Which nursing college in Trichy district provides government scholarship?',
    a: 'Students at Vinnarasi Community College receive ₹1000/month under the Tamil Nadu Government\'s Innovative Women Scheme, plus a stipend of ₹6000–₹9000/month during outstation hospital training.',
  },
  {
    q: 'What is the admission process for allied health courses in Manapparai?',
    a: 'Admissions are open throughout the year. You need 10th pass/fail, age 16+, and a valid ID. Apply online through our website or visit our campus in Vaiyampatti, Manapparai.',
  },
  {
    q: 'Which college near Manapparai offers hospital training for healthcare courses?',
    a: 'Vinnarasi Community College provides direct practical training in local and outstation hospitals as part of all healthcare diploma programs.',
  },
  {
    q: 'What is the fee structure for vocational diploma courses in Trichy?',
    a: 'Vinnarasi Community College offers quality training at low cost with flexible instalment payment options. Contact us at +91 99421 85370 for current fee details.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="hero-inner">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about nursing and allied health courses in Manapparai, Trichy.</p>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 28px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: 10 }}>{faq.q}</h2>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '32px', background: '#2563eb', borderRadius: 16, textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 10 }}>Still have questions?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: '0.95rem' }}>Talk to our admissions team directly.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/admissions" style={{ background: '#fff', color: '#2563eb', padding: '12px 24px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>Apply Now</Link>
            <a href="tel:+919942185370" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', padding: '12px 24px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Call +91 99421 85370</a>
          </div>
        </div>
      </div>
    </>
  );
}
