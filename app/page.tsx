import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Vinnarasi Community College | Top Nursing College in Vaiyampatty, Manapparai, Trichy',
  description:
    'Vinnarasi Community College & Vocational Training Centre in Vaiyampatti — Tamil Nadu\'s premier nursing and vocational college for women since 2006. Located in Manapparai Taluk, Trichy District. 100% placement, govt-approved GDA, Patient Care, MLT, OT courses.',
  keywords: [
    'nursing college in Vaiyampatty',
    'college in Vaiyampatty',
    'best nursing college Manapparai',
    'Vinnarasi Community College Vaiyampatti',
    'Vinnarasi Vocational Training Centre Trichy',
    'vocational training Manapparai taluk',
    'nursing diploma Vaiyampatty',
    'GDA course Trichy',
    'women nursing college Tamil Nadu',
  ],
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/' },
};

const galleryImages = [
  { src: '/event1.jpeg', alt: 'Community College Events Vaiyampatty' },
  { src: '/scenario.jpeg', alt: 'Training Scenario Trichy' },
  { src: '/event day.jpeg', alt: 'Community College Event Day Manapparai' },
  { src: '/first day.jpeg', alt: 'First Day at Community College' },
  { src: '/class1.jpeg', alt: 'Classes Vaiyampatty' },
];

const labItems = [
  { src: '/all equipents.jpeg', alt: 'Modern Equipment in Lab', caption: 'Comprehensive Equipment' },
  { src: '/dummy body.jpeg', alt: 'Training Equipment', caption: 'Advanced Training Equipment' },
  { src: '/instruments.jpeg', alt: 'Professional Tools', caption: 'Professional Tools' },
  { src: '/knife.jpeg', alt: 'Specialized Tools', caption: 'Specialized Tools' },
  { src: '/someothers.jpeg', alt: 'Additional Equipment', caption: 'Additional Equipment' },
  { src: '/something1.jpeg', alt: 'Facilities', caption: 'Modern Facilities' },
];

const tamilAdvantages = [
  'குறைந்த கட்டணத்தில் தரமான பயிற்சி',
  '100% வேலைக்கு உத்திரவாதம்',
  '19 வருடத்திற்கு மேல் கல்விப்பணியில் அனுபவமுள்ள மகளிருக்கான கல்லூரி',
  'உள்ளூர், வெளியூர் மருத்துவமனையில் நேரடி பயிற்சி',
  'சுகாதாரப் பயிற்சியுடன் கல்விக் கட்டணம் இல்லாமல் Skill Training, Spoken English, Computer, cursive writing பயிற்சிகள் வழங்கப்படும்',
  'இரண்டாம் வருடம் வெளியூர் மருத்துவமனைப் பயிற்சியில் உதவித்தொகை மாதம் ரூ.6000 முதல் ரூ.9000 வரை வழங்கப்படும்',
  'கல்வி பயிலும் மாணவிகளுக்கு தமிழ்நாடு அரசின் புதுமைப் பெண் திட்டத்தின்கீழ் மாதம் ரூ.1000 வழங்கப்படும்',
  'பயிற்சி முடித்த மாணவிகளுக்கு மையமே தனியார் மருத்துவமனையில் வேலைவாய்ப்பு பெற்றுத் தரும்',
  'தவணை முறையில் பயிற்சிக் கட்டணம் செலுத்தும் வசதி',
  'ஜூன் முதல் தேதிக்குள் பயிற்சியில் சேரும் மாணவிகளுக்கு விலையில்லாமல் புத்தகங்கள், சீருடைகள், காலேஜ் பேக், ID Card போன்றவைகள் வழங்கப்படும்',
];

const englishAdvantages = [
  'Quality training at low cost',
  '100% job guarantee',
  'College for women with more than 19 years of experience in education',
  'Direct training in local and foreign hospitals',
  'Skill Training, Spoken English, Computer, cursive writing training will be provided without tuition fees along with health training',
  'In the second year of out-patient hospital training, a monthly stipend of Rs. 6000 to Rs. 9000 will be provided',
  'Under the Innovative Women Scheme of the Tamil Nadu Government, female students will be provided with Rs. 1000 per month',
  'The center itself will provide employment in a private hospital to the students who have completed the training',
  'Facility to pay the training fee in installments',
  'Students who join the training by June 1st will be provided with books, uniforms, college bags, ID cards, etc. free of cost',
];

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">Est. 2006 · Vaiyampatti, Trichy</div>
          <h1>
            Vinnarasi Community College<br />
            <span>&amp; Vocational Training Centre</span>
          </h1>
          <p>Your leading choice for job-oriented diploma courses in Vaiyampatti, Manapparai. Empowering careers through skill development since 2006.</p>
          <div className="hero-actions">
            <Link href="/courses" className="cta-button">
              Explore Courses <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/admissions" className="cta-button-outline">
              Apply Now <i className="fas fa-graduation-cap"></i>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>19+</strong><span>Years of Excellence</span></div>
            <div className="hero-stat"><strong>1000+</strong><span>Graduates</span></div>
            <div className="hero-stat"><strong>100%</strong><span>Placement Support</span></div>
            <div className="hero-stat"><strong>7</strong><span>Courses Offered</span></div>
          </div>
        </div>
      </div>

      <FadeIn>
        <section>
          <h2>Welcome to Vinnarasi Community College, Manapparai</h2>
          <p>Vinnarasi Community College, located in Vaiyampatti near Manapparai, is a trusted name for vocational training in the Trichy district. We are dedicated to providing quality education and practical skills that lead to successful careers. As a leading vocational training centre, we offer a range of government-approved diploma courses with a strong focus on placement assistance.</p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="location-seo-section">
          <h2>Vinnarasi Community College: The Leading Nursing College in Vaiyampatty</h2>
          <p>
            Strategically located in <strong>Vaiyampatty</strong>, within the <strong>Manapparai Taluk</strong> of <strong>Trichy District</strong>, 
            Vinnarasi Community College (also known as Vinnarasi Vocational Training Centre) has been the beacon of education 
            for women in Tamil Nadu since 2006. Whether you are searching for a <em>nursing college in Vaiyampatty</em> or the 
            <em>best vocational training in Manapparai</em>, our institution offers unparalleled opportunities.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#2563eb', color: '#fff', padding: '11px 22px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              Explore Our Courses <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '2px solid #2563eb', color: '#2563eb', padding: '11px 22px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              Admission 2026-27
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <div className="why-section">
          <div className="why-section-header">
            <h2>Benefits for Joining Our College</h2>
          </div>
          <div className="why-cols">
            <div className="why-col why-col--tamil">
              <ul className="why-list">
                {tamilAdvantages.map((item, i) => (
                  <li key={i}>
                    <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-col why-col--english">
              <ul className="why-list">
                {englishAdvantages.map((item, i) => (
                  <li key={i}>
                    <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="image-gallery-section">
        <h2>Campus Life at Vinnarasi Community College</h2>
        <div className="image-gallery">
          {galleryImages.map((img) => (
            <Image key={img.src} src={img.src} alt={img.alt} width={400} height={250} style={{ objectFit: 'cover' }} />
          ))}
        </div>
      </div>

      <FadeIn>
        <div className="lab-section">
          <h2>State-of-the-Art Facilities</h2>
          <p>Our modern facilities are equipped with the latest equipment and technology to provide hands-on training for our students.</p>
          <div className="lab-gallery">
            {labItems.map((item) => (
              <div key={item.src} className="lab-item">
                <Image src={item.src} alt={item.alt} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '250px' }} />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
