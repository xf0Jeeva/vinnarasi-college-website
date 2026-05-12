import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About Us | Vinnarasi Community College Vaiyampatti, Manapparai',
  description:
    'Vinnarasi Community College — 19+ years of excellence in women\'s vocational education in Vaiyampatti, Manapparai, Trichy. Learn about our mission, facilities, achievements and 1000+ placed graduates.',
  keywords: ['about Vinnarasi Community College', 'women vocational college Manapparai', 'healthcare training centre Trichy', 'community college history Vaiyampatti'],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/about' },
};

const stats = [
  { number: '19+', label: 'Years of Excellence' },
  { number: '1000+', label: 'Graduates Placed' },
  { number: '100%', label: 'Placement Support' },
  { number: '7', label: 'Courses Offered' },
];

const values = [
  { icon: 'fas fa-graduation-cap', title: 'Quality Education', desc: 'Curriculum designed by industry experts with equal focus on theory and hands-on practice.' },
  { icon: 'fas fa-chalkboard-teacher', title: 'Expert Faculty', desc: 'Experienced educators and healthcare professionals with deep industry knowledge.' },
  { icon: 'fas fa-laptop', title: 'Modern Facilities', desc: 'Well-equipped classrooms, labs, and training facilities for an immersive learning experience.' },
  { icon: 'fas fa-handshake', title: 'Placement Support', desc: 'Dedicated placement cell with strong hospital network to secure jobs for every graduate.' },
  { icon: 'fas fa-users', title: 'Student Support', desc: 'Counselling, career guidance, and academic assistance throughout your journey.' },
  { icon: 'fas fa-certificate', title: 'Certification', desc: 'Recognized certifications affiliated with reputed educational institutions.' },
];

const facilities = [
  { icon: 'fas fa-book', title: 'Modern Classrooms', desc: 'Spacious, well-ventilated classrooms with modern teaching aids' },
  { icon: 'fas fa-flask', title: 'Laboratories', desc: 'Well-equipped labs for practical training and skill development' },
  { icon: 'fas fa-laptop-medical', title: 'Computer Lab', desc: 'Modern computer lab with high-speed internet access' },
  { icon: 'fas fa-book-reader', title: 'Library', desc: 'Extensive collection of books, journals, and digital resources' },
];

const testimonials = [
  { quote: 'The practical training and guidance I received at Vinnarasi Community College helped me secure a job immediately after graduation. The faculty is very supportive.', name: 'Student Name', role: 'General Duty Assistant, 2023 Batch', initial: 'S' },
  { quote: 'The college provides excellent opportunities for skill development. The placement cell helped me find the right job in a reputed healthcare facility.', name: 'Student Name', role: 'Patient Care Assistant, 2023 Batch', initial: 'S' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-inner">
        <h1>About Us</h1>
        <p>Empowering women through quality vocational education since 2006 — Vaiyampatti&apos;s most trusted training centre.</p>
      </div>

      {/* Stats bar */}
      <div className="about-stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="about-stat">
            <strong>{s.number}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Story */}
      <FadeIn>
        <div className="about-story">
          <div className="about-story-text">
            <div className="about-label">Our Story</div>
            <h2>Empowering the Community Since 2006</h2>
            <p>Vinnarasi Community College, also known as Vinnarasi Vocational Training Centre, was founded in 2006 in Vaiyampatti to provide accessible, high-quality vocational education to students in Manapparai, Trichy, and surrounding areas.</p>
            <p>Our mission is to empower individuals — especially women — with the practical skills and knowledge needed to secure meaningful employment and build successful careers.</p>
            <p>As a government-recognized institution, our commitment to hands-on training and 100% placement support makes us the leading choice for job-oriented diploma courses in the Trichy district.</p>
            <div className="about-story-actions">
              <Link href="/courses" className="cp-apply-btn">View Courses <i className="fas fa-arrow-right"></i></Link>
              <Link href="/admissions" className="cp-wa-btn" style={{ background: 'transparent', border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}>Apply Now</Link>
            </div>
          </div>
          <div className="about-story-img">
            <Image src="/college view.jpeg" alt="Vinnarasi Community College Campus" width={600} height={420} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </FadeIn>

      {/* Mission & Vision */}
      <FadeIn>
        <div className="about-mv">
          <div className="about-mv-card">
            <div className="about-mv-icon"><i className="fas fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>To provide accessible, high-quality education that empowers students to achieve their career goals through practical training and skill development.</p>
          </div>
          <div className="about-mv-card about-mv-card--vision">
            <div className="about-mv-icon"><i className="fas fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>To be the leading community college in Tamil Nadu, recognized for excellence in healthcare education and producing skilled professionals who contribute positively to society.</p>
          </div>
        </div>
      </FadeIn>

      {/* Values */}
      <FadeIn>
        <div className="about-section">
          <div className="about-section-header">
            <div className="about-label">What Sets Us Apart</div>
            <h2>Why Choose Vinnarasi?</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-icon"><i className={v.icon}></i></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Facilities */}
      <FadeIn>
        <div className="about-section about-section--alt">
          <div className="about-section-header">
            <div className="about-label">Infrastructure</div>
            <h2>Our Facilities</h2>
          </div>
          <div className="about-facilities-grid">
            {facilities.map((f) => (
              <div key={f.title} className="about-facility-card">
                <i className={f.icon}></i>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn>
        <div className="about-section">
          <div className="about-section-header">
            <div className="about-label">Student Stories</div>
            <h2>What Our Students Say</h2>
          </div>
          <div className="about-testimonials">
            {testimonials.map((t, i) => (
              <div key={i} className="about-testimonial">
                <div className="about-testimonial-quote"><i className="fas fa-quote-left"></i></div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="about-testimonial-author">
                  <div className="about-testimonial-avatar">{t.initial}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <div className="about-cta">
          <h2>Ready to Start Your Healthcare Career?</h2>
          <p>Join hundreds of graduates who built their careers with Vinnarasi Community College.</p>
          <div className="about-cta-actions">
            <Link href="/admissions" className="cp-apply-btn">Apply Now <i className="fas fa-arrow-right"></i></Link>
            <Link href="/contact" className="cp-wa-btn" style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
