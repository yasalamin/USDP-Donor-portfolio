import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Rocket, CheckCircle2, TrendingUp, Users, Building2, ChevronRight, Globe, Globe2, Calendar, MapPin } from 'lucide-react';

import alphalogix from '../assets/startups/alphalogix.png';
import artilect from '../assets/startups/artilect.png';
import asiandevs from '../assets/startups/asiandevs.webp';
import cloudlem from '../assets/startups/cloudlem.jpg';
import dlight from '../assets/startups/DLIGHT.jpg';
import kohminds from '../assets/startups/kohminds.png';
import macam_services from '../assets/startups/Macam Services.jpg';
import marketix_international from '../assets/startups/marketix international.jpg';
import northnine from '../assets/startups/northnine.jpg';

// Founder Photos
import ali_muhammad from '../assets/founders/ali_muhammad.jpg';
import ehsaam_baig from '../assets/founders/ehsaam_baig.jpg';
import hadi_hussain from '../assets/founders/hadi_hussain.jpg';
import irfan from '../assets/founders/irfan.jpg';
import jamila from '../assets/founders/jamila.jpg';
import masroor_ali_khan from '../assets/founders/masroor_ali_ khan.jpg';
import naveed from '../assets/founders/naveed.jpg';
import shoaib from '../assets/founders/shoaib.jpg';
import waseem from '../assets/founders/waseem.jpg';
import zubair from '../assets/founders/zubair.jpg';

type Founder = {
  name: string;
  role: string;
  photo: string;
};

type Startup = {
  id: string;
  name: string;
  logo: string;
  coverPhoto: string;
  category: string;
  tagline: string;
  url?: string;
  district: string;
  headquarters?: string;
  yearEstablished?: string;
  operatingModel?: string;
  employeeCount: string;
  countriesServed: string[];
  founders: Founder[];
  metrics: { label: string; value: string }[];
  overview: string;
  journey: string;
  services: string[];
  impact: string;
};

export function Startups() {
  const { startupId } = useParams<{ startupId?: string }>();

  const startups: Startup[] = [
    {
      id: 'alphalogix',
      name: 'TechAlpha Logix (AlphaLogix)',
      logo: alphalogix,
      coverPhoto: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      category: 'Web Dev, Data Science & Blockchain',
      tagline: 'Transforming digital ideas into reality through robust software engineering and sophisticated design.',
      url: 'https://techalphalogix.com/',
      district: 'Gilgit',
      headquarters: 'Hamiya Market, Naveed Shaheed Road, Gilgit, Gilgit-Baltistan, Pakistan',
      yearEstablished: '2019',
      operatingModel: 'Full-service agency offering fixed-price, dedicated hiring, and on-site development models',
      employeeCount: 'Over 20 Employees',
      countriesServed: ['North America', 'Europe', 'Australia', 'Pakistan'],
      founders: [
        { name: 'Nadia Iqbal', role: 'CEO & Co-Founder (Technical Lead)', photo: jamila },
        { name: 'Shaukat Hayat', role: 'COO & Co-Founder (Creative & Ops Lead)', photo: shoaib }
      ],
      metrics: [
        { label: 'Year Established', value: '2019' },
        { label: 'Team Size', value: '20+ Employees' },
        { label: 'Client Feedback', value: '5-Star Top-Rated' }
      ],
      overview: 'TechAlpha Logix (often operating under the brand name AlphaLogix) is a tech-based web development and design agency headquartered in Gilgit, Pakistan. The agency specializes in transforming digital ideas into reality through a combination of robust software engineering and sophisticated design. Positioning itself as a dedicated, fair-priced partner for businesses, TechAlpha Logix delivers end-to-end digital solutions ranging from SaaS and cloud computing to interactive UI/UX design.',
      journey: 'TechAlpha Logix was established in 2019 with a vision to merge high-quality coding with striking visual communication. Nadia and Shaukat started the company with a small, highly skilled team, operating on the philosophy that "good communication is the heart of business." Over the years, the company expanded its capabilities far beyond standard web design, evolving to adopt modern stacks (React, Node.js, Firebase) and branching into advanced technological sectors like Data Science and Blockchain development to meet modern digital demands.',
      services: [
        'Development & Cloud: Custom web and mobile application development, CMS development (WordPress), and DevOps management for major cloud providers (GCP, Azure, AWS).',
        'Design Solutions: Comprehensive UI/UX design, graphic design, visual communication, and brand development.',
        'Data Science: Advanced data analytics, data visualization, and the integration of machine learning models and algorithms for business decision-making.',
        'Blockchain Development: End-to-end blockchain management, smart contract creation (Solidity, Ethereum, Cardano), token development, and backend API integration.'
      ],
      impact: `Curbing Brain Drain: By providing cutting-edge jobs in fields like Data Science and Blockchain locally, the agency allows highly skilled IT graduates to build global careers without having to migrate to larger urban hubs like Islamabad or Lahore.\n\nEconomic Injection: As an IT export business serving international clients, the agency brings valuable foreign exchange directly into the local Gilgit economy.\n\nEcosystem Building: TechAlpha Logix serves as a pioneering model for the emerging tech ecosystem in Gilgit-Baltistan, proving that high-tier digital services and global tech entrepreneurship can successfully thrive in the region.`
    },
    {
      id: 'artilect',
      name: 'Artilect',
      logo: artilect,
      coverPhoto: 'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&q=80&w=1200',
      category: 'Digital Product Studio',
      tagline: 'Designing and building scalable digital products for modern web and mobile.',
      url: 'https://artilectsolutions.com/',
      district: 'Hunza',
      employeeCount: '10 Product Specialists',
      countriesServed: ['Canada', 'United Kingdom', 'Netherlands', 'Saudi Arabia'],
      founders: [
        { name: 'Jamila Bibi', role: 'Co-Founder & Head of Product', photo: jamila },
        { name: 'Ehsaam Baig', role: 'Co-Founder & UX Lead', photo: ehsaam_baig }
      ],
      metrics: [
        { label: 'Employees', value: '10 Designers' },
        { label: 'Projects Delivered', value: '40+' },
        { label: 'Client Retention', value: '95%' }
      ],
      overview: 'Artilect is a digital product agency focused on crafting intuitive user experiences, scalable web applications, and end-to-end design systems for global tech startups.',
      journey: 'Graduating from USDP’s UI/UX design and front-end development bootcamps, Jamila Bibi and Ehsaam Baig realized international clients needed design systems coupled with tight technical execution. They launched Artilect, quickly scaling to serve clients across 4 continents.',
      services: ['Figma UI/UX Design Systems', 'Full-Stack React & Node Apps', 'SaaS Product Engineering', 'Performance Optimization'],
      impact: 'Provides high-paying remote careers for mountain youth and female designers, leading local digital product design standards.'
    },
    {
      id: 'asiandevs',
      name: 'AsianDevs',
      logo: asiandevs,
      coverPhoto: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
      category: 'Web3 & Software Agency',
      tagline: 'Empowering global businesses with high-performance software and Web3 development.',
      url: 'https://asiandevs.com/',
      district: 'Skardu',
      employeeCount: '18 Software Engineers',
      countriesServed: ['United States', 'Australia', 'Singapore', 'United Arab Emirates', 'United Kingdom'],
      founders: [
        { name: 'Masroor Ali Khan', role: 'Founder & Managing Director', photo: masroor_ali_khan },
        { name: 'Irfan Ullah', role: 'Co-Founder & Tech Director', photo: irfan }
      ],
      metrics: [
        { label: 'Employees', value: '18 Developers' },
        { label: 'Global Contracts', value: '50+' },
        { label: 'Foreign Revenue', value: '$500K+' }
      ],
      overview: 'AsianDevs is a high-growth tech agency delivering custom enterprise software, Web3 applications, and full-stack web platforms to international technology companies.',
      journey: 'AsianDevs originated as a high-performing freelance collaboration group during USDP advanced tracks. Recognizing the massive demand for remote Web3 and React developers, Masroor Ali Khan and Irfan Ullah structured the group into a formal software studio that now manages enterprise accounts worldwide.',
      services: ['Full-Stack Web Development', 'Smart Contracts & Web3', 'Mobile App Development', 'Dedicated Tech Teams'],
      impact: 'Generates over $500K+ in foreign IT revenue for Pakistan and offers mentorship and internships for incoming USDP graduates.'
    },
    {
      id: 'cloudlem',
      name: 'Cloudlem',
      logo: cloudlem,
      coverPhoto: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      category: 'Cloud DevOps & Infrastructure',
      tagline: 'Accelerating cloud transformation, Kubernetes, and DevOps automation.',
      url: 'https://www.cloudlem.com/',
      district: 'Ghizer',
      employeeCount: '12 Cloud Engineers',
      countriesServed: ['United States', 'Germany', 'Sweden', 'Qatar'],
      founders: [
        { name: 'Hadi Hussain', role: 'Founder & Chief Cloud Architect', photo: hadi_hussain },
        { name: 'Naveed Iqbal', role: 'Co-Founder & DevOps Director', photo: naveed }
      ],
      metrics: [
        { label: 'Employees', value: '12 Specialists' },
        { label: 'Cloud Migrations', value: '30+' },
        { label: 'Uptime SLA', value: '99.99%' }
      ],
      overview: 'Cloudlem specializes in Cloud Architecture, Kubernetes orchestration, CI/CD pipeline automation, and 24/7 managed infrastructure services for tech startups.',
      journey: 'Spurred by USDP’s inaugural Cloud Computing and Azure tracks, founders Hadi Hussain and Naveed Iqbal targeted the global shortage of certified DevOps engineers. Cloudlem grew from a two-person consulting team to a specialized cloud engineering agency.',
      services: ['AWS & Azure Cloud Migration', 'Kubernetes & Docker Orchestration', 'CI/CD Pipeline Automation', '24/7 Managed Infrastructure'],
      impact: 'Establishes advanced Cloud Engineering and DevOps capabilities in Gilgit-Baltistan, connecting mountain technicians directly to global cloud workloads.'
    },
    {
      id: 'dlight',
      name: 'DLIGHT',
      logo: dlight,
      coverPhoto: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200',
      category: 'IoT & Smart Software Solutions',
      tagline: 'Pioneering intelligent software systems and renewable energy monitoring.',
      url: 'https://dlighttech.com/',
      district: 'Nager',
      employeeCount: '8 Engineers',
      countriesServed: ['Pakistan', 'United Arab Emirates', 'Oman'],
      founders: [
        { name: 'Waseem Akram', role: 'Co-Founder & IoT Systems Lead', photo: waseem },
        { name: 'Zubair Khan', role: 'Co-Founder & Hardware Lead', photo: zubair }
      ],
      metrics: [
        { label: 'Employees', value: '8 Engineers' },
        { label: 'Deployments', value: '25+' },
        { label: 'Efficiency Gain', value: '35%' }
      ],
      overview: 'DLIGHT builds smart software interfaces, telemetry software, and IoT tools tailored for sustainable renewable energy and regional infrastructure monitoring.',
      journey: 'DLIGHT grew out of an innovative USDP capstone project focused on solving regional clean energy grid monitoring. Waseem Akram and Zubair Khan turned their working prototype into a commercial technology firm serving commercial clients.',
      services: ['IoT Telemetry Software', 'Smart Energy Dashboards', 'Embedded Systems Apps', 'Custom Control Interfaces'],
      impact: 'Pioneers green technology and smart grid software in Northern Pakistan while offering specialized IoT engineering roles.'
    },
    {
      id: 'kohminds',
      name: 'Kohminds',
      logo: kohminds,
      coverPhoto: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
      category: 'Tech Consultancy & AI',
      tagline: 'Bridging technical vision with execution through smart AI and consulting.',
      url: 'https://kohminds.com/',
      district: 'Gilgit',
      employeeCount: '11 Analysts & AI Techs',
      countriesServed: ['United States', 'United Kingdom', 'Bahrain', 'Pakistan'],
      founders: [
        { name: 'Shoaib Ahmed', role: 'Managing Partner', photo: shoaib },
        { name: 'Ali Muhammad', role: 'Principal AI Consultant', photo: ali_muhammad }
      ],
      metrics: [
        { label: 'Employees', value: '11 Analysts' },
        { label: 'Consulting Projects', value: '35+' },
        { label: 'AI Models Deployed', value: '15+' }
      ],
      overview: 'Kohminds delivers strategic IT consultancy, AI integration, Power BI business analytics, and custom software architectures for regional and international organizations.',
      journey: 'Recognizing that enterprises needed expert guidance to make sense of big data, USDP graduates Shoaib Ahmed and Ali Muhammad founded Kohminds. They built custom Power BI analytics models and AI workflows that now drive strategic decisions for enterprise clients.',
      services: ['Power BI Executive Dashboards', 'AI & Machine Learning Integration', 'Data Pipeline Engineering', 'IT Strategic Consulting'],
      impact: 'Empowers regional businesses to adopt data-driven decision making and trains regional youth in high-paying data analytics fields.'
    },
    {
      id: 'macam_services',
      name: 'Macam Services',
      logo: macam_services,
      coverPhoto: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
      category: 'Managed IT & Digital Services',
      tagline: 'Delivering end-to-end IT support, managed software, and digital operations.',
      url: 'https://macamservices.com/',
      district: 'Hunza',
      employeeCount: '10 IT Technicians',
      countriesServed: ['Pakistan', 'United Arab Emirates', 'United Kingdom'],
      founders: [
        { name: 'Ehsaam Baig', role: 'Operations Director', photo: ehsaam_baig },
        { name: 'Jamila Bibi', role: 'Systems Lead', photo: jamila }
      ],
      metrics: [
        { label: 'Employees', value: '10 Technicians' },
        { label: 'Managed Clients', value: '20+' },
        { label: 'Active Uptime', value: '24/7' }
      ],
      overview: 'Macam Services provides comprehensive IT infrastructure support, managed web hosting, network administration, and digital operations management.',
      journey: 'Formed by USDP IT systems graduates, Macam Services addressed the regional market demand for 24/7 enterprise IT management. They built a robust service desk operation supporting clients locally and internationally.',
      services: ['Managed Network & IT Support', 'Website Hosting & Maintenance', 'System Administration', 'Digital Operations Management'],
      impact: 'Ensures regional tech companies have enterprise-grade IT infrastructure support while creating steady local employment.'
    },
    {
      id: 'marketix_international',
      name: 'Marketix International',
      logo: marketix_international,
      coverPhoto: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      category: 'Digital Growth & Performance SEO',
      tagline: 'Driving global customer acquisition through technical SEO and growth marketing.',
      url: 'https://marketixinternational.com/',
      district: 'Skardu',
      employeeCount: '15 Growth Strategists',
      countriesServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Saudi Arabia'],
      founders: [
        { name: 'Irfan Ullah', role: 'Head of Growth', photo: irfan },
        { name: 'Hadi Hussain', role: 'Technical SEO Lead', photo: hadi_hussain }
      ],
      metrics: [
        { label: 'Employees', value: '15 Strategists' },
        { label: 'Ad Budget Managed', value: '$1M+' },
        { label: 'SEO Traffic Growth', value: '300%' }
      ],
      overview: 'Marketix International is a performance marketing agency specializing in technical SEO audits, search engine marketing, GA4 tracking, and e-commerce acquisition.',
      journey: 'After mastering growth analytics and search engine algorithms at USDP, Irfan Ullah and Hadi Hussain launched Marketix International. They systematically scaled organic traffic and return-on-ad-spend for international e-commerce brands.',
      services: ['Technical SEO Audits & Strategy', 'Google & Meta Paid Acquisition', 'GA4 Analytics & Funnel Optimization', 'Content Marketing Operations'],
      impact: 'Managed over $1M+ in digital ad budgets for international clients, creating high-skill remote digital marketing careers.'
    },
    {
      id: 'northnine',
      name: 'Northnine',
      logo: northnine,
      coverPhoto: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
      category: 'Mobile Studio & Web Engineering',
      tagline: 'Crafting premium iOS, Android, and web applications for global brands.',
      url: 'https://www.linkedin.com/company/the-north-nine/?originalSubdomain=pk',
      district: 'Ghizer',
      employeeCount: '16 Mobile Developers',
      countriesServed: ['United States', 'United Kingdom', 'Germany', 'United Arab Emirates'],
      founders: [
        { name: 'Naveed Iqbal', role: 'Founder & Mobile Lead', photo: naveed },
        { name: 'Waseem Akram', role: 'Co-Founder & Backend Lead', photo: waseem }
      ],
      metrics: [
        { label: 'Employees', value: '16 Developers' },
        { label: 'Apps Published', value: '20+' },
        { label: 'Store Downloads', value: '100K+' }
      ],
      overview: 'Northnine is a mobile application studio building user-centric Flutter, iOS, Android, and web platforms for global brands.',
      journey: 'Northnine was established by USDP mobile application graduates who built prototype mobile apps during their training. Today, Northnine’s mobile applications serve over 100,000+ active users across the App Store and Google Play.',
      services: ['Flutter & React Native Cross-Platform', 'iOS & Android Native Engineering', 'Mobile UI/UX Design', 'API & Backend Integration'],
      impact: 'Demonstrates that mobile app development talent from Gilgit-Baltistan can engineer top-rated, global mobile applications.'
    }
  ];

  // Selected startup from route param
  const activeStartup = startupId ? startups.find((s) => s.id === startupId) : null;

  // -------------------------------------------------------------
  // FULL WINDOW CASE STUDY VIEW (When /startups/:startupId is active)
  // -------------------------------------------------------------
  if (activeStartup) {
    return (
      <main className="relative min-h-screen bg-gray-50 pb-16">
        
        {/* Cover Photo Hero Banner */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-900">
          <img 
            src={activeStartup.coverPhoto} 
            alt={`${activeStartup.name} cover`}
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
          
          {/* Top Breadcrumb Overlay */}
          <div className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-white/90 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Link to="/impact" className="hover:text-brand transition-colors">Impact</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <Link to="/startups" className="hover:text-brand transition-colors">Startups</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <span className="text-brand font-black">{activeStartup.name}</span>
            </div>
          </div>

          {/* Hero Startup Title Overlay */}
          <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 shadow-2xl border-2 border-white flex items-center justify-center shrink-0">
                  <img src={activeStartup.logo} alt={`${activeStartup.name} logo`} className="max-h-12 w-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="bg-brand text-white text-[10px] sm:text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {activeStartup.category}
                    </span>
                    <span className="text-xs font-bold text-white/80">• {activeStartup.district} District</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    {activeStartup.name}
                  </h1>
                </div>
              </div>

              {activeStartup.url && (
                <a
                  href={activeStartup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-hover transition-colors shadow-lg shrink-0"
                >
                  Visit Official Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Main Column (Case Study Details) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 1. Overview */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand" /> Company Overview
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {activeStartup.overview}
                </p>
              </div>

              {/* 2. Founders & Key Team Members */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand mb-6 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand" /> Founders & Key Leadership Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeStartup.founders.map((founder, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-gray-200">
                        <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-gray-900 leading-snug">{founder.name}</h3>
                        <p className="text-xs font-bold text-brand">{founder.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. The Founding Story */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand" /> The Founding Journey
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {activeStartup.journey}
                </p>
              </div>

              {/* 4. Core Services Provided */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" /> Core Services Provided
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {activeStartup.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-1.5" />
                      <div>{service}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Regional & Economic Impact */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand mb-4 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-brand" /> Regional & Economic Impact
                </h2>
                <div className="space-y-4">
                  {activeStartup.impact.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-sm text-gray-800 leading-relaxed font-medium">
                      {paragraph}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (Key Metrics, Employees, HQ & Target Countries) */}
            <div className="space-y-6">
              
              {/* Quick Facts & Scale */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Quick Facts & Scale
                </h3>
                
                <div className="space-y-3.5">
                  <div className="bg-brand/5 border border-brand/20 p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Team Size</div>
                      <div className="text-lg sm:text-xl font-black text-brand">{activeStartup.employeeCount}</div>
                    </div>
                    <Users className="w-7 h-7 text-brand opacity-80" />
                  </div>

                  {activeStartup.yearEstablished && (
                    <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase">Year Established</div>
                        <div className="text-base font-black text-gray-900">{activeStartup.yearEstablished}</div>
                      </div>
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                  )}

                  {activeStartup.headquarters && (
                    <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl">
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand" /> Headquarters
                      </div>
                      <div className="text-xs font-bold text-gray-800 leading-snug">{activeStartup.headquarters}</div>
                    </div>
                  )}

                  {activeStartup.operatingModel && (
                    <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl">
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Operating Model</div>
                      <div className="text-xs font-semibold text-gray-700 leading-snug">{activeStartup.operatingModel}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Countries Served */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand" /> Countries Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeStartup.countriesServed.map((country, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">
                      <Globe2 className="w-3.5 h-3.5 text-brand" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Metrics Summary */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Key Performance Metrics
                </h3>
                <div className="space-y-3">
                  {activeStartup.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                      <span className="text-xs font-bold text-gray-600 uppercase">{metric.label}</span>
                      <span className="text-sm font-black text-brand">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Back */}
              <div className="pt-2">
                <Link 
                  to="/startups"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-2xl transition-colors text-xs uppercase tracking-wider"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Startups
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>
    );
  }

  // -------------------------------------------------------------
  // ALL STARTUPS LISTING GRID PAGE (When on /startups)
  // -------------------------------------------------------------
  return (
    <main className="relative min-h-screen bg-gray-50 py-10 lg:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden isolate z-0">
        <svg className="absolute w-full h-full opacity-40" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M 0,0 L 500,0 C 700,300 400,600 0,500 Z" fill="#E8DFF5" />
          <path d="M 1440,900 L 900,900 C 1100,600 1300,400 1440,500 Z" fill="#E8DFF5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back Button */}
        <div className="mb-8">
          <Link 
            to="/impact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-brand transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Impact
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-full shadow-xs">
            <Rocket className="w-3.5 h-3.5" /> Entrepreneurship & Innovation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">
            USDP Alumni <span className="text-brand">Startups & Case Studies</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
            Explore the thriving tech ventures, software agencies, and digital consultancies launched by USDP alumni. Select any startup below to open its complete case study page.
          </p>
        </div>

        {/* Startups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {startups.map((startup) => (
            <Link
              key={startup.id}
              to={`/startups/${startup.id}`}
              className="relative rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-brand/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Mini Cover Header */}
                <div className="h-32 -mx-6 -mt-6 mb-5 overflow-hidden relative bg-gray-100">
                  <img src={startup.coverPhoto} alt={startup.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="bg-brand text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {startup.category}
                    </span>
                    <span className="text-[11px] font-bold text-white">
                      {startup.district}
                    </span>
                  </div>
                </div>

                {/* Logo Box */}
                <div className="flex h-16 w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 p-3 mb-4 group-hover:bg-brand/5 transition-colors">
                  <img src={startup.logo} alt={`${startup.name} logo`} className="max-h-10 w-full object-contain" />
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-brand transition-colors">
                  {startup.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4 line-clamp-2">
                  {startup.tagline}
                </p>

                {/* Founders Preview Row */}
                <div className="flex items-center gap-2 pt-2 mb-4">
                  <div className="flex -space-x-2">
                    {startup.founders.map((f, idx) => (
                      <img key={idx} src={f.photo} alt={f.name} className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500">
                    {startup.founders.map(f => f.name).join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Button Indicator */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand uppercase tracking-wider">
                <span>Open Full Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
