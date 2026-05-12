import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Vinnarasi Community College Vaiyampatti, Manapparai, Trichy',
  description:
    'Contact Vinnarasi Community College in Vaiyampatti, Manapparai, Trichy — 621315. Call +91 99421 85370 for admissions, course info, and campus visits. Mon–Sat 9AM–5PM.',
  keywords: ['contact Vinnarasi Community College', 'Vaiyampatti college phone number', 'Manapparai vocational college address', 'Trichy community college contact'],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/contact' },
};

const faqs = [
  { q: 'What are the admission requirements?', a: 'For most courses, you need to have completed 10th or 12th standard. Please visit our admissions page or contact us for specific course requirements.' },
  { q: 'How can I apply for admission?', a: 'You can apply through our website, visit our campus, or call our admissions helpline. Our counselors will guide you through the process.' },
  { q: 'What are the course timings?', a: 'Regular classes are conducted from 9:00 AM to 5:00 PM, Monday through Saturday. Some courses may have different timings.' },
  { q: 'Do you provide placement assistance?', a: 'Yes, we provide placement assistance to all our students. We have tie-ups with various healthcare facilities and organizations.' },
];

const contactCards = [
  { icon: 'fas fa-map-marker-alt', title: 'Visit Us', lines: ['Vinnarasi Community College', 'Vaiyampatti, Manapparai', 'Trichy, Tamil Nadu — 621315'] },
  { icon: 'fas fa-phone-alt', title: 'Call Us', lines: ['+91 99421 85370'], link: 'tel:+919942185370' },
  { icon: 'fas fa-envelope', title: 'Email Us', lines: ['vinnarasicommunitycollege@gmail.com'], link: 'mailto:vinnarasicommunitycollege@gmail.com' },
  { icon: 'fas fa-clock', title: 'Office Hours', lines: ['Monday – Saturday', '9:00 AM – 5:00 PM'] },
];

export default function ContactPage() {
  return (
    <>
      <div className="hero-inner">
        <h1>Get in Touch</h1>
        <p>Have a question about admissions or courses? We&apos;re here to help — reach out and we&apos;ll respond within 24 hours.</p>
      </div>

      {/* Contact cards */}
      <FadeIn>
        <div className="contact-cards-row">
          {contactCards.map((c) => (
            <div key={c.title} className="contact-info-card">
              <div className="contact-info-icon"><i className={c.icon}></i></div>
              <h4>{c.title}</h4>
              {c.lines.map((line, i) =>
                c.link && i === 0
                  ? <a key={i} href={c.link}>{line}</a>
                  : <p key={i}>{line}</p>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Form + Map */}
      <FadeIn>
        <div className="contact-main">
          <div className="contact-form-panel">
            <div className="adm-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in the form and we&apos;ll connect with you on WhatsApp instantly.</p>
            </div>
            <ContactForm />
          </div>
          <div className="contact-map-panel">
            <div className="contact-map-header">
              <h3>Find Us</h3>
              <p>Vaiyampatti, Manapparai, Trichy</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.0!2d78.3116719!3d10.5532375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa72c3e0a5a2cf%3A0xff21fe341ccdc7c2!2sVinnarasi%20Community%20College!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinnarasi Community College Location"
            ></iframe>
            <div className="contact-map-actions">
              <a href="tel:+919942185370" className="cp-apply-btn"><i className="fas fa-phone-alt"></i> Call Now</a>
              <a href="https://wa.me/919942185370" target="_blank" rel="noreferrer" className="cp-wa-btn"><i className="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FAQ */}
      <FadeIn>
        <div className="contact-faq">
          <div className="about-section-header">
            <div className="about-label">FAQ</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="contact-faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="contact-faq-item">
                <div className="contact-faq-icon"><i className="fas fa-question-circle"></i></div>
                <div>
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
