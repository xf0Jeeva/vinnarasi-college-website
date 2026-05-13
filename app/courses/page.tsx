import type { Metadata } from 'next';
import Link from 'next/link';

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
    tagColor: '#2563eb',
    highlights: ['Patient care & hygiene', 'Basic medical procedures', 'Communication skills', 'Hospital internship'],
    desc: 'Equip yourself with essential knowledge and practical skills to support healthcare professionals. Covers patient care, hygiene, basic medical procedures, and communication skills.',
  },
  {
    icon: 'fas fa-stethoscope',
    title: 'Vocational Diploma in General Duty Assistant',
    duration: '1 Year',
    tag: 'Fast Track',
    tagColor: '#059669',
    highlights: ['Basic patient care', 'Clinical support tasks', 'Hospital hygiene', 'Quick placement'],
    desc: 'A one-year fast-track program to assist healthcare staff with basic patient care, hygiene maintenance, and clinical support in hospitals and healthcare facilities.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Diploma in Patient Care Assistant',
    duration: '2 Years',
    tag: '',
    tagColor: '',
    highlights: ['Vital signs monitoring', 'Mobility assistance', 'Patient well-being', 'Supervised care'],
    desc: 'Develop essential patient care skills including monitoring vital signs, assisting with mobility, maintaining hygiene, and supporting patient well-being under professional supervision.',
  },
  {
    icon: 'fas fa-first-aid',
    title: 'Diploma in First Aid and Patient Care',
    duration: '2 Years',
    tag: '',
    tagColor: '',
    highlights: ['Emergency first aid', 'Clinical support', 'Patient handling', 'Crisis response'],
    desc: 'Combines first aid techniques with patient care skills. Learn to handle emergency situations and provide basic support in clinical environments.',
  },
  {
    icon: 'fas fa-microscope',
    title: 'Diploma in Medical Laboratory Technology',
    duration: '2 Years',
    tag: '',
    tagColor: '',
    highlights: ['Diagnostic techniques', 'Sample collection', 'Lab equipment', 'Medical testing'],
    desc: 'Training in diagnostic techniques, sample collection, and lab equipment operation. Perfect for those interested in the technical aspects of healthcare and medical testing.',
  },
  {
    icon: 'fas fa-procedures',
    title: 'Diploma in Operation Theatre Technology',
    duration: '2 Years',
    tag: '',
    tagColor: '',
    highlights: ['Sterilization protocols', 'Surgical instruments', 'Pre/post-op care', 'OT procedures'],
    desc: 'Focused on operation theatre procedures including sterilization protocols, surgical instrument handling, and pre/post-operative patient care.',
  },
  {
    icon: 'fas fa-house-medical',
    title: 'Village Health Worker',
    duration: '1 Year',
    tag: 'Community',
    tagColor: '#7c3aed',
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
    <div className="courses-root">
      {/* Hero */}
      <div className="hero-inner">
        <h1>Our Courses</h1>
        <p>Government-approved vocational diploma programs designed for real-world healthcare careers — with guaranteed placement support.</p>
      </div>

      {/* Perks strip */}
      <div className="crs-perks">
        {perks.map((p) => (
          <div key={p.label} className="crs-perk">
            <i className={p.icon}></i>
            <span>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Course list */}
      <div className="crs-list">
        {courses.map((course, idx) => (
          <div key={course.title} className="crs-card">
            <div className="crs-card-left">
              <div className="crs-icon-wrap">
                <i className={course.icon}></i>
              </div>
            </div>
            <div className="crs-card-body">
              <div className="crs-card-top">
                <div className="crs-meta">
                  <span className="crs-num">0{idx + 1}</span>
                  <span className="crs-dur"><i className="fas fa-clock"></i> {course.duration}</span>
                  {course.tag && (
                    <span className="crs-tag" style={{ background: course.tagColor + '18', color: course.tagColor, border: `1px solid ${course.tagColor}40` }}>
                      {course.tag}
                    </span>
                  )}
                </div>
                <h3 className="crs-title">{course.title}</h3>
                <p className="crs-desc">{course.desc}</p>
              </div>
              <div className="crs-chips">
                {course.highlights.map((h) => (
                  <span key={h} className="crs-chip">
                    <i className="fas fa-check"></i> {h}
                  </span>
                ))}
              </div>
              <Link
                href={`/admissions?course=${encodeURIComponent(course.title)}`}
                className="crs-apply"
              >
                Apply Now <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="crs-cta">
        <div className="crs-cta-inner">
          <div className="crs-cta-text">
            <h3>Not sure which course to pick?</h3>
            <p>Talk to our counsellor — we&apos;ll help you choose the right path for your career.</p>
          </div>
          <div className="crs-cta-btns">
            <a href="tel:+919942185370" className="crs-cta-call">
              <i className="fas fa-phone-alt"></i> Call Us
            </a>
            <a href="https://wa.me/919942185370" target="_blank" rel="noreferrer" className="crs-cta-wa">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
