import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Rocket, CheckCircle2, TrendingUp, Users, Building2, ChevronRight, Award } from 'lucide-react';

import alphalogix from '../assets/startups/alphalogix.png';
import artilect from '../assets/startups/artilect.png';
import asiandevs from '../assets/startups/asiandevs.webp';
import cloudlem from '../assets/startups/cloudlem.jpg';
import dlight from '../assets/startups/DLIGHT.jpg';
import kohminds from '../assets/startups/kohminds.png';
import macam_services from '../assets/startups/Macam Services.jpg';
import marketix_international from '../assets/startups/marketix international.jpg';
import northnine from '../assets/startups/northnine.jpg';

type Startup = {
  id: string;
  name: string;
  logo: string;
  category: string;
  tagline: string;
  url?: string;
  founders: string;
  district: string;
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
      name: 'AlphaLogix',
      logo: alphalogix,
      category: 'AI & Enterprise Software',
      tagline: 'Delivering next-generation AI and custom software solutions for enterprise growth.',
      url: 'https://techalphalogix.com/',
      founders: 'USDP Tech Alumni Cohort',
      district: 'Gilgit',
      metrics: [
        { label: 'Enterprise Clients', value: '15+' },
        { label: 'Team Size', value: '12 Engineers' },
        { label: 'Growth Rate', value: '200% YOY' }
      ],
      overview: 'AlphaLogix is a premier software development studio founded by USDP graduates specializing in AI integration, cloud-native web applications, and enterprise digital transformation.',
      journey: 'Following intensive full-stack engineering and cloud architecture training at USDP, the founders teamed up to build AlphaLogix. From securing their first remote client to expanding into enterprise contracts, AlphaLogix now powers digital workflows for clients across Europe and North America.',
      services: ['Custom Web Application Development', 'AI Model Integration & APIs', 'Cloud Infrastructure & Microservices', 'UI/UX Product Architecture'],
      impact: 'Employs 12+ regional software engineers in Gilgit-Baltistan, generating foreign IT exports and anchoring high-value tech employment.'
    },
    {
      id: 'artilect',
      name: 'Artilect',
      logo: artilect,
      category: 'Digital Product Studio',
      tagline: 'Designing and building scalable digital products for modern web and mobile.',
      url: 'https://artilectsolutions.com/',
      founders: 'USDP Alumni Design & Dev Team',
      district: 'Hunza',
      metrics: [
        { label: 'Projects Delivered', value: '40+' },
        { label: 'Global Markets', value: '6 Countries' },
        { label: 'Client Retention', value: '95%' }
      ],
      overview: 'Artilect is a product agency focused on crafting intuitive user experiences, robust cloud applications, and end-to-end digital solutions for startups and scaleups.',
      journey: 'Born out of USDP’s UI/UX and web development bootcamps, Artilect bridged design craftsmanship with technical execution. By implementing production-level agency workflows learned during USDP mentorship, Artilect rapidly scaled to serve international clients.',
      services: ['Figma UI/UX Design Systems', 'Full-Stack React & Node Apps', 'SaaS Product Engineering', 'Performance Optimization'],
      impact: 'Provides sustainable remote careers for mountain youth and women designers, leading local digital product innovation.'
    },
    {
      id: 'asiandevs',
      name: 'AsianDevs',
      logo: asiandevs,
      category: 'Web3 & Software Agency',
      tagline: 'Empowering global businesses with high-performance software and Web3 development.',
      url: 'https://asiandevs.com/',
      founders: 'USDP Senior Developers',
      district: 'Skardu',
      metrics: [
        { label: 'Global Contracts', value: '50+' },
        { label: 'Engineers Hired', value: '18+' },
        { label: 'Foreign Revenue', value: '$500K+' }
      ],
      overview: 'AsianDevs is a high-growth tech agency delivering custom software, Web3 solutions, and full-stack web platforms to international tech clients.',
      journey: 'AsianDevs started as a freelance collaboration between top-performing USDP graduates. As international demand grew, they formalized into a software studio, leveraging market-aligned skills taught in USDP to compete on global marketplaces.',
      services: ['Full-Stack Web Development', 'Smart Contracts & Web3', 'Mobile App Development', 'Dedicated Tech Teams'],
      impact: 'Generates significant remote foreign revenue and mentors incoming USDP interns in real-world software project delivery.'
    },
    {
      id: 'cloudlem',
      name: 'Cloudlem',
      logo: cloudlem,
      category: 'Cloud DevOps & Infrastructure',
      tagline: 'Accelerating cloud transformation, Kubernetes, and DevOps automation.',
      url: 'https://www.cloudlem.com/',
      founders: 'USDP Cloud Engineering Lead',
      district: 'Ghizer',
      metrics: [
        { label: 'Cloud Migrations', value: '30+' },
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'AWS/Azure Certified', value: '8 Techs' }
      ],
      overview: 'Cloudlem specializes in Cloud Architecture, Kubernetes orchestration, CI/CD automation, and managed infrastructure services for global clients.',
      journey: 'Inspired by USDP’s inaugural Cloud Computing & Microsoft Azure tracks, Cloudlem’s founders recognized the soaring demand for specialized DevOps talent. They established a dedicated cloud consultancy serving tech startups worldwide.',
      services: ['AWS & Azure Cloud Migration', 'Kubernetes & Docker Orchestration', 'CI/CD Pipeline Automation', '24/7 Managed Infrastructure'],
      impact: 'Pioneers advanced DevOps and Cloud engineering talent in Gilgit-Baltistan, connecting mountain engineers to global cloud projects.'
    },
    {
      id: 'dlight',
      name: 'DLIGHT',
      logo: dlight,
      category: 'IoT & Smart Software Solutions',
      tagline: 'Pioneering intelligent software systems and renewable energy monitoring.',
      founders: 'USDP Electronics & Tech Graduates',
      district: 'Nager',
      metrics: [
        { label: 'Deployments', value: '25+' },
        { label: 'Regional Partners', value: '10+' },
        { label: 'Efficiency Gain', value: '35%' }
      ],
      overview: 'DLIGHT builds smart software interfaces and IoT telemetry tools tailored for sustainable energy, smart monitoring, and regional tech infrastructure.',
      journey: 'DLIGHT emerged from a USDP capstone project aimed at solving regional energy monitoring challenges. The team turned their practical prototype into a commercial venture serving regional institutions.',
      services: ['IoT Telemetry Software', 'Smart Energy Dashboards', 'Embedded Systems Apps', 'Custom Control Interfaces'],
      impact: 'Solves real regional environmental and energy monitoring challenges while building local software capabilities.'
    },
    {
      id: 'kohminds',
      name: 'Kohminds',
      logo: kohminds,
      category: 'Tech Consultancy & AI',
      tagline: 'Bridging technical vision with execution through smart AI and consulting.',
      url: 'https://kohminds.com/',
      founders: 'USDP AI & Business Analytics Alumni',
      district: 'Gilgit',
      metrics: [
        { label: 'Consulting Projects', value: '35+' },
        { label: 'AI Solutions', value: '15+' },
        { label: 'Client Satisfaction', value: '100%' }
      ],
      overview: 'Kohminds provides strategic IT consultancy, AI integration, Power BI data analytics, and custom software architecture for regional and global businesses.',
      journey: 'Trained under USDP’s Power BI and AI analytics tracks, Kohminds founders recognized that businesses needed help leveraging data. They established Kohminds to deliver actionable data dashboards and AI workflows.',
      services: ['Power BI Executive Dashboards', 'AI & Machine Learning Integration', 'Data Pipeline Engineering', 'IT Strategic Consulting'],
      impact: 'Enables regional businesses to make data-driven decisions while training youth in high-value data analytics careers.'
    },
    {
      id: 'macam_services',
      name: 'Macam Services',
      logo: macam_services,
      category: 'Managed IT & Digital Services',
      tagline: 'Delivering end-to-end IT support, managed software, and digital operations.',
      founders: 'USDP IT Support & Systems Team',
      district: 'Hunza',
      metrics: [
        { label: 'Managed Clients', value: '20+' },
        { label: 'Services Active', value: '24/7' },
        { label: 'Local Talent Hired', value: '10+' }
      ],
      overview: 'Macam Services offers comprehensive IT infrastructure support, web management, and digital operations for local and national enterprises.',
      journey: 'Formed by USDP technical support and system administration graduates, Macam Services fulfilled the local market need for reliable, enterprise-grade IT management.',
      services: ['Managed Network & IT Support', 'Website Hosting & Maintenance', 'System Administration', 'Digital Operations Management'],
      impact: 'Supports regional businesses with modern IT infrastructure while providing steady local employment.'
    },
    {
      id: 'marketix_international',
      name: 'Marketix International',
      logo: marketix_international,
      category: 'Digital Growth & Performance SEO',
      tagline: 'Driving global customer acquisition through technical SEO and growth marketing.',
      url: 'https://marketixinternational.com/',
      founders: 'USDP Growth Marketing Alumni',
      district: 'Skardu',
      metrics: [
        { label: 'Ad Revenue Managed', value: '$1M+' },
        { label: 'SEO Traffic Growth', value: '300%' },
        { label: 'Global Clients', value: '25+' }
      ],
      overview: 'Marketix International is a data-driven performance marketing agency specializing in technical SEO, conversion rate optimization, and paid acquisition.',
      journey: 'Graduating from USDP’s Digital Marketing & Performance SEO track, the founders established Marketix International to manage acquisition campaigns for international e-commerce brands.',
      services: ['Technical SEO Audits & Strategy', 'Google & Meta Paid Acquisition', 'GA4 Analytics & Funnel Optimization', 'Content Marketing Operations'],
      impact: 'Generated over $1M+ in client ad performance, creating remote marketing and analytics jobs for mountain youth.'
    },
    {
      id: 'northnine',
      name: 'Northnine',
      logo: northnine,
      category: 'Mobile Studio & Web Engineering',
      tagline: 'Crafting premium iOS, Android, and web applications for global brands.',
      url: 'https://www.linkedin.com/company/the-north-nine/?originalSubdomain=pk',
      founders: 'USDP Mobile Application Graduates',
      district: 'Ghizer',
      metrics: [
        { label: 'Apps Published', value: '20+' },
        { label: 'Store Downloads', value: '100K+' },
        { label: 'App Rating', value: '4.8 ★' }
      ],
      overview: 'Northnine is a mobile application studio building user-centric Flutter, React Native, and web platforms for international clients.',
      journey: 'Northnine was founded by USDP mobile application graduates who honed their skills on real client briefs during their training. Today, Northnine apps are used by thousands globally.',
      services: ['Flutter & React Native Cross-Platform', 'iOS & Android Native Engineering', 'Mobile UI/UX Design', 'API & Backend Integration'],
      impact: 'Elevates regional mobile engineering standards and proves mountain talent can launch top-rated App Store products.'
    }
  ];

  // Selected startup from route param
  const activeStartup = startupId ? startups.find((s) => s.id === startupId) : null;

  // -------------------------------------------------------------
  // FULL WINDOW CASE STUDY VIEW (When /startups/:startupId is active)
  // -------------------------------------------------------------
  if (activeStartup) {
    return (
      <main className="relative min-h-screen bg-gray-50 py-10 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden isolate z-0">
          <svg className="absolute w-full h-full opacity-35" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M 0,0 L 600,0 C 800,300 500,700 0,600 Z" fill="#E8DFF5" />
            <path d="M 1440,900 L 800,900 C 1000,500 1200,300 1440,400 Z" fill="#E8DFF5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 mb-8 flex-wrap">
            <Link to="/impact" className="hover:text-brand transition-colors">Impact</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/startups" className="hover:text-brand transition-colors">Startups</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand font-black">{activeStartup.name} Case Study</span>
          </div>

          {/* Full Page Case Study Card Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sm:p-10 mb-10">
            
            {/* Header Hero Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
              <div className="flex items-center gap-5">
                <div className="flex h-24 w-40 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-4 shrink-0 shadow-xs">
                  <img src={activeStartup.logo} alt={`${activeStartup.name} logo`} className="max-h-14 w-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="bg-[#E8DFF5] text-[#574687] border border-[#b7a8d6] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {activeStartup.category}
                    </span>
                    <span className="text-xs font-bold text-gray-400">• {activeStartup.district} District</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    {activeStartup.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-bold text-brand mt-1">
                    Founders: <span className="text-gray-700 font-semibold">{activeStartup.founders}</span>
                  </p>
                </div>
              </div>

              {/* Top CTA */}
              {activeStartup.url && (
                <a
                  href={activeStartup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-hover transition-colors shadow-sm shrink-0"
                >
                  Visit Official Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-brand/5 border border-brand/20 rounded-2xl p-5 mb-10">
              {activeStartup.metrics.map((metric, idx) => (
                <div key={idx} className="text-center py-2 border-r last:border-0 border-brand/10">
                  <div className="text-2xl sm:text-3xl font-black text-brand mb-0.5">{metric.value}</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Case Study Sections */}
            <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              
              {/* 1. Overview */}
              <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand" /> 1. Company Executive Summary
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {activeStartup.overview}
                </p>
              </div>

              {/* 2. Journey */}
              <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand" /> 2. The USDP Founding Journey
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {activeStartup.journey}
                </p>
              </div>

              {/* 3. Core Services */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" /> 3. Core Products & Services Delivered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStartup.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-2xs text-xs sm:text-sm font-bold text-gray-900">
                      <Award className="w-4 h-4 text-brand shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Impact */}
              <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand" /> 4. Regional & Economic Impact
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {activeStartup.impact}
                </p>
              </div>

            </div>

            {/* Bottom Action Row */}
            <div className="pt-8 mt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                to="/startups"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-brand transition-colors bg-gray-100 px-5 py-3 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Explore Other Startups
              </Link>
              
              {activeStartup.url && (
                <a
                  href={activeStartup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-hover transition-colors shadow-sm"
                >
                  Visit Official Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
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
            Explore the thriving tech ventures, software agencies, and digital consultancies launched by USDP alumni. Select any startup below to open its complete case study.
          </p>
        </div>

        {/* Startups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {startups.map((startup) => (
            <Link
              key={startup.id}
              to={`/startups/${startup.id}`}
              className="relative rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-brand/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#E8DFF5] text-[#574687] border border-[#b7a8d6] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {startup.category}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400">
                    {startup.district}
                  </span>
                </div>

                {/* Logo Box */}
                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 p-4 mb-5 group-hover:bg-brand/5 transition-colors">
                  <img src={startup.logo} alt={`${startup.name} logo`} className="max-h-12 w-full object-contain" />
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-brand transition-colors">
                  {startup.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-6 line-clamp-2">
                  {startup.tagline}
                </p>
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
