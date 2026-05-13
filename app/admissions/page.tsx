import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import AdmissionsForm from './AdmissionsForm';

export const metadata: Metadata = {
  title: 'Admissions 2025 | Apply for Vocational Diploma Courses | Vinnarasi Community College',
  description:
    'Apply now for 2025 admissions at Vinnarasi Community College, Vaiyampatti, Manapparai. Govt-approved GDA, Patient Care, MLT, OT Technology courses. Free books & uniform for June joiners. ₹1000/month TN Govt scholarship for women.',
  keywords: ['admission 2025 Vinnarasi Community College', 'vocational course admission Manapparai', 'GDA admission Trichy', 'nursing college admission Tamil Nadu', 'diploma admission Vaiyampatti', 'nursing college in vaiyampatty', 'manapparai nursing college admission', 'vaiyampatty nursing college admission'],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/admissions' },
};

const steps = [
  { icon: 'fas fa-file-alt', title: 'Fill the Form', desc: 'Complete the application form with your personal and academic details.' },
  { icon: 'fab fa-whatsapp', title: 'WhatsApp Submission', desc: 'Your application is sent directly to our admissions team via WhatsApp.' },
  { icon: 'fas fa-phone-alt', title: 'Counsellor Call', desc: 'Our counsellor will call you to confirm details and guide next steps.' },
  { icon: 'fas fa-check-circle', title: 'Enrolment', desc: 'Complete your fee payment and get enrolled in your chosen course.' },
];

const highlights = [
  { icon: 'fas fa-rupee-sign', text: 'Affordable fees with instalment options' },
  { icon: 'fas fa-briefcase', text: '100% placement assistance' },
  { icon: 'fas fa-gift', text: 'Free books, uniform & ID card (join by June 1st)' },
  { icon: 'fas fa-female', text: '₹1000/month under TN Govt Innovative Women Scheme' },
  { icon: 'fas fa-hospital', text: 'Direct hospital training — local & outstation' },
  { icon: 'fas fa-award', text: '19+ years of excellence in education' },
];

export default function AdmissionsPage() {
  return (
    <main>
      <FadeIn>
        <header className="hero-inner">
          <h1>Admissions Open 2025</h1>
          <p>Join Vinnarasi Community College — Vaiyampatti&apos;s most trusted nursing and vocational training centre for women since 2006.</p>
        </header>
      </FadeIn>

      {/* ── MAIN LAYOUT ── */}
      <div className="adm-page">

        {/* LEFT PANEL */}
        <aside className="adm-sidebar">
          <div className="adm-sidebar-card">
            <h3><i className="fas fa-star"></i> Why Apply Here?</h3>
            <ul className="adm-highlights">
              {highlights.map((h) => (
                <li key={h.text}>
                  <i className={h.icon}></i>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="adm-sidebar-card adm-contact-card">
            <h3><i className="fas fa-headset"></i> Need Help?</h3>
            <p>Talk to our admissions counsellor directly.</p>
            <a href="tel:+919942185370" className="adm-call-btn">
              <i className="fas fa-phone-alt"></i> +91 99421 85370
            </a>
            <a href="https://wa.me/919942185370" target="_blank" rel="noreferrer" className="adm-wa-btn">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </aside>

        {/* RIGHT — FORM */}
        <section className="adm-form-panel" aria-labelledby="form-heading">
          <div className="adm-form-header">
            <h2 id="form-heading">Application Form</h2>
            <p>Fill in your details below and submit — we&apos;ll get back to you within 24 hours.</p>
          </div>
          <Suspense fallback={<p style={{ padding: '20px' }}>Loading form…</p>}>
            <AdmissionsForm />
          </Suspense>
        </section>
      </div>

      {/* ── HOW IT WORKS ── */}
      <FadeIn>
        <section className="adm-steps-section">
          <h2>How the Admission Process Works</h2>
          <div className="adm-steps">
            {steps.map((s, i) => (
              <div key={s.title} className="adm-step">
                <div className="adm-step-num">{i + 1}</div>
                <div className="adm-step-icon"><i className={s.icon}></i></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── REQUIREMENTS + DATES ── */}
      <FadeIn>
        <section className="adm-info-grid" aria-labelledby="info-heading">
          <h2 id="info-heading" className="sr-only">Admission Information</h2>
          <article className="adm-info-card">
            <div className="adm-info-icon"><i className="fas fa-clipboard-list"></i></div>
            <h3>Admission Requirements</h3>
            <ul>
              <li>10th standard pass or fail</li>
              <li>Age 16 years and above</li>
              <li>Valid government ID proof</li>
              <li>Passport-size photographs</li>
            </ul>
          </article>
          <article className="adm-info-card">
            <div className="adm-info-icon"><i className="fas fa-calendar-alt"></i></div>
            <h3>Important Dates</h3>
            <ul>
              <li>Admissions open throughout the year</li>
              <li>Join by June 1st for free kit (books, uniform, bag, ID)</li>
              <li>New batches start every month</li>
              <li>Contact us for next batch schedule</li>
            </ul>
          </article>
          <article className="adm-info-card">
            <div className="adm-info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <h3>Visit Us</h3>
            <ul>
              <li>Vinnarasi Community College</li>
              <li>Vaiyampatti, Manapparai</li>
              <li>Trichy, Tamil Nadu — 621315</li>
              <li>Mon – Sat: 9:00 AM – 5:00 PM</li>
            </ul>
          </article>
        </section>
      </FadeIn>
    </main>
  );
}
