import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageMetadata = {
  title: string;
  description: string;
  keywords: string;
};

const defaultMetadata: PageMetadata = {
  title: 'uConnect Skill Development Program | Digital Skills for Gilgit-Baltistan',
  description: 'uConnect Skill Development Program (USDP) connects young people in Gilgit-Baltistan with practical digital skills, mentors, and global career opportunities.',
  keywords: 'uConnect, USDP, skill development, digital skills, Gilgit-Baltistan, technology training, remote work, youth employment'
};

const metadataByPath: Record<string, PageMetadata> = {
  '/': defaultMetadata,
  '/impact': {
    title: 'Our Impact | uConnect Skill Development Program',
    description: 'Explore USDP outcomes: trained professionals, alumni ventures, Top Rated Upwork freelancers, global digital careers, and the communities reached across Gilgit-Baltistan.',
    keywords: 'USDP impact, uConnect alumni, Gilgit-Baltistan careers, digital employment, remote work, Upwork freelancers, Top Rated talent'
  },
  '/programs': {
    title: 'Digital Skills Programs & Courses | USDP',
    description: 'Discover practical USDP courses in web development, digital marketing, e-commerce, accounting, AI, cloud solutions, design, and freelancing.',
    keywords: 'digital skills courses, web development training, digital marketing, freelancing, AI courses, Gilgit-Baltistan training'
  },
  '/collaborations': {
    title: 'Collaborations & Partnerships | uConnect USDP',
    description: 'See how uConnect collaborates with community organizations, government partners, and industry to deliver inclusive technology and livelihood programs.',
    keywords: 'uConnect partnerships, USDP collaborations, technology villages, NAVTTC, AKRSP, digital livelihoods'
  },
  '/about': {
    title: 'About uConnect USDP | Our Mission, Framework & Founder',
    description: 'Learn about uConnect Skill Development Program, our community-led framework, sustainable impact model, and mission to connect regional talent with opportunity.',
    keywords: 'about uConnect, USDP mission, social development technology, sustainable impact, Ejaz Karim'
  },
  '/contact': {
    title: 'Contact uConnect | Skill Development & Partnership Enquiries',
    description: 'Contact uConnect about skill development, partnerships, hiring USDP talent, and opportunities to support digital careers in Gilgit-Baltistan.',
    keywords: 'contact uConnect, USDP contact, partner with uConnect, hire USDP talent, support digital skills'
  }
};

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function setProperty(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = metadataByPath[pathname] ?? defaultMetadata;
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    const imageUrl = `${siteUrl}/uc.skill.png`;

    document.title = metadata.title;
    setMeta('description', metadata.description);
    setMeta('keywords', metadata.keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'uConnect Skill Development Program');
    setMeta('theme-color', '#ffffff');
    setProperty('og:type', 'website');
    setProperty('og:site_name', 'uConnect Skill Development Program');
    setProperty('og:title', metadata.title);
    setProperty('og:description', metadata.description);
    setProperty('og:url', canonicalUrl);
    setProperty('og:image', imageUrl);
    setProperty('twitter:card', 'summary_large_image');
    setProperty('twitter:title', metadata.title);
    setProperty('twitter:description', metadata.description);
    setProperty('twitter:image', imageUrl);

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.seoSchema = 'true';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'uConnect Skill Development Program',
      alternateName: 'USDP',
      description: defaultMetadata.description,
      url: siteUrl,
      logo: imageUrl,
      sameAs: [
        'https://www.facebook.com/uConnectSDP/',
        'https://www.instagram.com/uconnectsdp/',
        'https://www.linkedin.com/company/uconnectsdp/posts/?feedView=all',
        'https://uconnect.pk/'
      ]
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
