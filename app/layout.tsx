import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://vinnarasicommunitycollege.in'),
  title: {
    default: 'Vinnarasi Community College | Top Nursing College in Vaiyampatty, Manapparai, Trichy',
    template: '%s | Vinnarasi Community College & Vocational Centre',
  },
  description:
    'Vinnarasi Community College & Vocational Training Centre in Vaiyampatti, Manapparai, Trichy. The leading nursing and vocational college for women since 2006. 100% placement, govt-approved diploma courses (GDA, MLT, OT), and hospital training in Tamil Nadu.',
  keywords: [
    // Brand keywords
    'Vinnarasi Community College',
    'Vinnarasi Vocational Training Centre',
    'Vinnarasi College Vaiyampatti',
    'Vinarasi Vocational Centre',
    // Location + category (High priority for ranking first)
    'nursing college in Vaiyampatty',
    'nursing college vaiyampatty',
    'vaiyampatty nursing college',
    'manapparai nursing college',
    'college in Vaiyampatty',
    'nursing college Manapparai taluk',
    'best college in Vaiyamppatty',
    'vocational centre Vaiyampatty',
    'nursing college near Manapparai',
    'allied health college Trichy district',
    'GDA college Trichy',
    'GDA course Manapparai',
    'community college Vaiyampatti',
    'vocational training Manapparai',
    'diploma courses Trichy',
    'healthcare college near Manapparai',
    'best nursing college Trichy district',
    'women college Manapparai',
    'women vocational college Trichy',
    // Course-specific searches
    'general duty assistant course Trichy',
    'patient care assistant course Tamil Nadu',
    'medical lab technology diploma Trichy',
    'operation theatre technology course Manapparai',
    'village health worker course Tamil Nadu',
    'first aid patient care diploma',
    // Intent keywords
    'job oriented courses Trichy',
    'placement guarantee college Trichy',
    'hospital training college Trichy',
    'affordable diploma courses Tamil Nadu',
    'govt approved vocational courses Trichy',
    '100 percent placement college Manapparai',
    'healthcare training Vaiyampatti',
    'college near Manapparai for women',
    'skill development courses Trichy district',
    'paramedical courses Trichy',
    'paramedical college Manapparai',
    'best vocational training in Tamil Nadu',
  ],
  authors: [{ name: 'Vinnarasi Community College' }],
  creator: 'Vinnarasi Community College',
  publisher: 'Vinnarasi Community College',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Vinnarasi Community College | Best Vocational Training in Manapparai, Trichy',
    description:
      'Leading women\'s vocational training centre in Vaiyampatti, Manapparai. Govt-approved diploma courses with 100% placement support since 2006.',
    type: 'website',
    url: 'https://vinnarasicommunitycollege.in/',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Vinnarasi Community College Logo' }],
    siteName: 'Vinnarasi Community College',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinnarasi Community College | Vocational Training Manapparai',
    description: 'Best vocational training centre in Vaiyampatti, Manapparai, Trichy. 100% placement, hospital training, affordable fees.',
    images: ['/logo.png'],
  },
  alternates: { canonical: 'https://vinnarasicommunitycollege.in/' },
  verification: {
    google: '38425df52243cc2b',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Vinnarasi Community College',
  alternateName: ['Vinnarasi Vocational Training Centre', 'விண்ணரசி சமுதாயக் கல்லூரி'],
  url: 'https://vinnarasicommunitycollege.in',
  logo: 'https://vinnarasicommunitycollege.in/logo.png',
  image: 'https://vinnarasicommunitycollege.in/college%20view.jpeg',
  description: 'Vinnarasi Community College is a premier women\'s vocational training institution in Vaiyampatti, Manapparai, Trichy, offering govt-approved diploma courses with 100% placement support since 2006.',
  foundingDate: '2006',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vaiyampatti',
    addressLocality: 'Manapparai',
    addressRegion: 'Trichy',
    postalCode: '621315',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '10.5532375', longitude: '78.3116719' },
  telephone: '+91-9942185370',
  email: 'vinnarasicommunitycollege@gmail.com',
  openingHours: 'Mo-Sa 09:00-17:00',
  sameAs: [
    'https://www.facebook.com/vinnarasicommunitycollege',
    'https://www.instagram.com/vinnarasicommunitycollege',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vocational Diploma Courses',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Advanced Vocational Diploma in General Duty Assistant', description: 'Two-year GDA program with hospital training and placement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Diploma in Patient Care Assistant', description: 'Two-year patient care training with practical hospital exposure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Diploma in Medical Laboratory Technology', description: 'Two-year MLT course with diagnostic lab training' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Diploma in Operation Theatre Technology', description: 'Two-year OT technology course with surgical training' } },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '200' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <Header />
        <ScrollProgress />
        <main style={{ width: '100%', overflow: 'hidden' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
