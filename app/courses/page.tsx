import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Vocational Diploma Courses in Trichy | GDA, Patient Care, MLT, OT Technology',
  description:
    'Explore govt-approved vocational diploma courses at Vinnarasi Community College, Vaiyampatti — GDA (1 & 2 year), Patient Care Assistant, Medical Lab Technology, Operation Theatre Technology, Village Health Worker. 100% placement in Trichy hospitals.',
  keywords: [
    'GDA course Manapparai',
    'general duty assistant diploma Trichy',
    'patient care assistant course Tamil Nadu',
    'medical laboratory technology diploma Trichy',
    'operation theatre technology course Manapparai',
    'village health worker course',
    'vocational diploma courses Trichy',
    'allied health courses Vaiyampatti',
    'hospital training courses Tamil Nadu',
  ],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/courses' },
};

const courses = [
  {
    icon: 'fas fa-user-nurse',
    title: 'Advanced Vocational Diploma in General Duty Assistant',
    duration: '2 Years',
    tag: 'Most Popular',
    highlights: ['Patient care & hygiene', 'Basic medical procedures', 'Communication skills', 'Hospital internship'],
    desc: 'Equip yourself with essential knowledge and practical skills to support healthcare professionals. Covers patient care, hygiene, basic medical procedures, and communication skills.',
  },
  {
    icon: 'fas fa-stethoscope',
    title: 'Vocational Diploma in General Duty Assistant',
    duration: '1 Year',
    tag: 'Fast Track',
    highlights: ['Basic patient care', 'Clinical support tasks', 'Hospital hygiene', 'Quick placement'],
    desc: 'A one-year fast-track program to assist healthcare staff with basic patient care, hygiene maintenance, and clinical support in hospitals and healthcare facilities.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Diploma in Patient Care Assistant',
    duration: '2 Years',
    tag: '',
    highlights: ['Vital signs monitoring', 'Mobility assistance', 'Patient well-being', 'Supervised care'],
    desc: 'Develop essential patient care skills including monitoring vital signs, assisting with mobility, maintaining hygiene, and supporting patient well-being under professional supervision.',
  },
  {
    icon: 'fas fa-first-aid',
    title: 'Diploma in First Aid and Patient Care',
    duration: '2 Years',
    tag: '',
    highlights: ['Emergency first aid', 'Clinical support', 'Patient handling', 'Crisis response'],
    desc: 'Combines first aid techniques with patient care skills. Learn to handle emergency situations and provide basic support in clinical environments.',
  },
  {
    icon: 'fas fa-microscope',
    title: 'Diploma in Medical Laboratory Technology',
    duration: '2 Years',
    tag: '',
    highlights: ['Diagnostic techniques', 'Sample collection', 'Lab equipment', 'Medical testing'],
    desc: 'Training in diagnostic techniques, sample collection, and lab equipment operation. Perfect for those interested in the technical aspects of healthcare and medical testing.',
  },
  {
    icon: 'fas fa-procedures',
    title: 'Diploma in Operation Theatre Technology',
    duration: '2 Years',
    tag: '',
    highlights: ['Sterilization protocols', 'Surgical instruments', 'Pre/post-op care', 'OT procedures'],
    desc: 'Focused on operation theatre procedures including sterilization protocols, surgical instrument handling, and pre/post-operative patient care.',
  },
  {
    icon: 'fas fa-house-medical',
    title: 'Village Health Worker',
    duration: '1 Year',
    tag: 'Community',
    highlights: ['Primary healthcare', 'Rural health support', 'Community outreach', 'Basic medical care'],
    desc: 'Trains individuals to deliver basic health services and provide primary medical care in rural areas. Perfect for community healthcare and rural health support.',
  },
];

const perks = [
  { icon: 'fas fa-briefcase', label: '100% Placement' },
  { icon: 'fas fa-hospital', label: 'Hospital Training' },
  { icon: 'fas fa-rupee-sign', label: 'Affordable Fees' },
  { icon: 'fas fa-certificate', label: 'Govt. Approved' },
];

export default function CoursesPage() {
  return (
    <>
      <div className="hero-inner">
        <h1>Our Courses</h1>
        <p>Government-approved vocational diploma programs designed for real-world healthcare careers — with guaranteed placement support.</p>
      </div>

      {/* Perks bar */}
      <div className="courses-perks-bar">
        {perks.map((p) => (
          <div key={p.label} className="courses-perk">
            <i className={p.icon}></i>
            <span>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Course cards */}
      <div className="courses-page-grid">
        {courses.map((course) => (
          <FadeIn key={course.title}>
            <div className="cp-card">
              {course.tag && <span className="cp-tag">{course.tag}</span>}
              <div className="cp-icon"><i className={course.icon}></i></div>
              <div className="cp-duration"><i className="fas fa-clock"></i> {course.duration}</div>
              <h3>{course.title}</h3>
              <p className="cp-desc">{course.desc}</p>
              <ul className="cp-highlights">
                {course.highlights.map((h) => (
                  <li key={h}><i className="fas fa-check"></i> {h}</li>
                ))}
              </ul>
              <Link href={`/admissions?course=${encodeURIComponent(course.title)}`} className="cp-apply-btn">
                Apply Now <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA strip */}
      <FadeIn>
        <div className="courses-cta-strip">
          <div className="courses-cta-text">
            <h3>Not sure which course to pick?</h3>
            <p>Talk to our counsellor — we&apos;ll help you choose the right path.</p>
          </div>
          <div className="courses-cta-actions">
            <a href="tel:+919942185370" className="cp-apply-btn">
              <i className="fas fa-phone-alt"></i> Call Us
            </a>
            <a href="https://wa.me/919942185370" target="_blank" rel="noreferrer" className="cp-wa-btn">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
