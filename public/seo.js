// SEO Optimization for Vinnarasi // SEO Optimization for Vinnarasi Community College
const seoData = {
    // Main keywords and phrases
    keywords: [
        "Vinnarasi Community College",
        "Community College in Vaiyampatty",
        "Community College Trichy",
        "Healthcare Training Vaiyampatty",
        "Skill Development Courses Trichy",
        "Women's Community College",
        "Healthcare Assistant Training",
        "Patient Care Training",
        "Medical Training Institute",
        "Healthcare Education Tamil Nadu",
        "Community College Admissions",
        "Healthcare Courses Trichy",
        "Medical Assistant Training",
        "Healthcare Skill Development",
        "Community College Placement",
        "Healthcare Training Institute",
        "Medical Training Center",
        "Healthcare Education Center",
        "Community College Courses",
        "Healthcare Training Programs"
    ],

    // Meta descriptions for different pages
    metaDescriptions: {
        home: "Vinnarasi Community College - Leading healthcare training institute in Vaiyampatty, Trichy. Offering quality education and skill development programs with 100% placement assistance. Join our community of healthcare professionals.",
        about: "Learn about Vinnarasi Community College's 17+ years of excellence in healthcare education. Discover our mission, vision, and commitment to empowering students through quality training and skill development.",
        courses: "Explore healthcare training courses at Vinnarasi Community College. From patient care to medical assistance, our programs are designed to prepare you for a successful career in healthcare.",
        admissions: "Apply to Vinnarasi Community College's healthcare training programs. Learn about our admission process, eligibility criteria, and scholarship opportunities. Start your journey to a rewarding healthcare career.",
        contact: "Contact Vinnarasi Community College in Vaiyampatty, Trichy. Get information about courses, admissions, and visit our campus. We're here to help you start your healthcare career journey."
    },

    // Structured data for rich snippets
    structuredData: {
        organization: {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Vinnarasi Community College",
            "url": "https://vinnarasicollege.com",
            "logo": "https://vinnarasicollege.com/logo.png",
            "description": "Leading healthcare training institute in Vaiyampatty, Trichy, offering quality education and skill development programs.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vaiyampatty",
                "addressLocality": "Manapparai",
                "addressRegion": "Trichy",
                "postalCode": "621306",
                "addressCountry": "IN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9942185370",
                "contactType": "admissions"
            }
        },
        course: {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Healthcare Assistant Training Program",
            "description": "Comprehensive healthcare training program covering patient care, medical assistance, and healthcare support skills.",
            "provider": {
                "@type": "Organization",
                "name": "Vinnarasi Community College",
                "sameAs": "https://vinnarasicollege.com"
            }
        }
    },

    // FAQ Schema
    faqSchema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What courses are offered at Vinnarasi Community College?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vinnarasi Community College offers various healthcare training programs including Patient Care Assistant, General Duty Assistant, and other healthcare support courses. All programs include practical training and placement assistance."
                }
            },
            {
                "@type": "Question",
                "name": "How can I apply for admission to Vinnarasi Community College?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can apply for admission through our website, by visiting the campus, or contacting our admission office. The process includes filling out an application form, submitting required documents, and attending a counseling session."
                }
            },
            {
                "@type": "Question",
                "name": "Does Vinnarasi Community College provide placement assistance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide 100% placement assistance to our students. Our placement cell works with various healthcare facilities to ensure job opportunities for our graduates."
                }
            },
            {
                "@type": "Question",
                "name": "What are the eligibility criteria for admission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates should have completed 10th standard or equivalent. Basic knowledge of English and Tamil is required. Age limit is 18-35 years."
                }
            },
            {
                "@type": "Question",
                "name": "Are there any scholarship opportunities available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer various scholarship opportunities including the Tamil Nadu Government's Innovative Women Scheme. We also provide financial assistance and installment payment options."
                }
            }
        ]
    },

    // Social media meta tags
    socialMeta: {
        facebook: {
            "og:title": "Vinnarasi Community College - Healthcare Training Institute",
            "og:description": "Join Vinnarasi Community College for quality healthcare training and skill development. 100% placement assistance and comprehensive practical training.",
            "og:image": "https://vinnarasicollege.com/images/college-view.jpg",
            "og:url": "https://vinnarasicollege.com"
        },
        twitter: {
            "twitter:card": "summary_large_image",
            "twitter:title": "Vinnarasi Community College - Healthcare Training",
            "twitter:description": "Quality healthcare training and skill development programs with placement assistance. Join our community of healthcare professionals.",
            "twitter:image": "https://vinnarasicollege.com/images/college-view.jpg"
        }
    },

    // Local business schema
    localBusiness: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Vinnarasi Community College",
        "image": "https://vinnarasicollege.com/images/college-view.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vaiyampatty",
            "addressLocality": "Manapparai",
            "addressRegion": "Trichy",
            "postalCode": "621306",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "10.XXXXX",
            "longitude": "78.XXXXX"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://facebook.com/vinnarasicollege",
            "https://twitter.com/vinnarasicollege",
            "https://instagram.com/vinnarasicollege"
        ]
    }
};

// Function to generate meta tags
function generateMetaTags() {
    const metaTags = {
        title: "Vinnarasi Community College - Healthcare Training Institute in Vaiyampatty, Trichy",
        description: seoData.metaDescriptions.home,
        keywords: seoData.keywords.join(", "),
        author: "Vinnarasi Community College",
        robots: "index, follow",
        "og:title": seoData.socialMeta.facebook["og:title"],
        "og:description": seoData.socialMeta.facebook["og:description"],
        "og:image": seoData.socialMeta.facebook["og:image"],
        "og:url": seoData.socialMeta.facebook["og:url"],
        "twitter:card": seoData.socialMeta.twitter["twitter:card"],
        "twitter:title": seoData.socialMeta.twitter["twitter:title"],
        "twitter:description": seoData.socialMeta.twitter["twitter:description"],
        "twitter:image": seoData.socialMeta.twitter["twitter:image"]
    };
    return metaTags;
}

// Function to inject structured data
function injectStructuredData() {
    const structuredData = {
        ...seoData.structuredData,
        ...seoData.faqSchema,
        ...seoData.localBusiness
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Initialize SEO
document.addEventListener('DOMContentLoaded', () => {
    // Inject meta tags
    const metaTags = generateMetaTags();
    Object.entries(metaTags).forEach(([name, content]) => {
        const meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
            meta.setAttribute('property', name);
        } else {
            meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
    });

    // Inject structured data
    injectStructuredData();
});

// Export for use in other files
export { seoData, generateMetaTags, injectStructuredData };
