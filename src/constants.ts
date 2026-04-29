import { Service, Project, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web & App Development',
    description: 'Custom websites, SaaS platforms, and high-performance web applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    description: 'Smart AI tools and smooth workflow automation to save you time.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing (SEO & SEM)',
    description: 'Data-driven marketing, search engine optimization, and systems to generate more leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'content-creation',
    title: 'Video Editing & Creative Content',
    description: 'Professional video editing, graphics production, and high-impact visual storytelling.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'branding-design',
    title: 'Branding Strategy & UX',
    description: 'Defining your unique identity and building intuitive user experiences that convert.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Engineering',
    description: 'Scalable online stores with automated logistics and sales funnels.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'corporate',
    title: 'Enterprise Solutions',
    description: 'Custom internal dashboards and systems to optimize your business.',
    image: 'https://images.unsplash.com/photo-1454165833767-02a6ed8a587a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic content creation and community engagement across all platforms.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'design-planning',
    title: 'Design Planning & Events',
    description: 'Creating immersive experiences and visuals for corporate events.',
    image: 'https://images.unsplash.com/photo-1505373877741-e15124ca4830?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing & Lead Generation',
    description: 'Targeted email campaigns and strategic lead generation to fuel your sales pipeline.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'content-writing',
    title: 'Professional Content Writing',
    description: 'Engaging, SEO-optimized copy for blogs, websites, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Expert oversight to ensure your digital projects are delivered on time and within scope.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'Deep-dive data analysis and clear reporting to track your KPIs and ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'marketing-funnels',
    title: 'Marketing Funnels & Automation',
    description: 'Building high-converting sales funnels and automated marketing ecosystems.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO_VIDEOS: Project[] = [
  {
    id: 'v-1',
    title: 'Neural CRM Integration',
    description: 'A custom AI-driven customer relationship system for a global tech firm.',
    image: 'https://images.pexels.com/videos/3760799/free-video-3760799.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'AI & Automation',
    videoUrl: 'https://videos.pexels.com/video-files/3760799/3760799-hd_1920_1080_25fps.mp4'
  },
  {
    id: 'v-2',
    title: 'Luxe E-commerce Portal',
    description: 'A high-end fashion marketplace with automated inventory management.',
    image: 'https://images.pexels.com/videos/4152172/free-video-4152172.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'Development',
    videoUrl: 'https://videos.pexels.com/video-files/4152172/4152172-hd_1920_1080_30fps.mp4'
  },
  {
    id: 'v-3',
    title: 'Growth Analytics Dashboard',
    description: 'Real-time data visualization for a multi-national marketing agency.',
    image: 'https://images.pexels.com/videos/7682181/free-video-7682181.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'Corporate',
    videoUrl: 'https://videos.pexels.com/video-files/7682181/7682181-hd_1920_1080_25fps.mp4'
  },
  {
    id: 'v-4',
    title: 'Autonomous Ad Engine',
    description: 'Self-optimizing social media ad campaigns using machine learning.',
    image: 'https://images.pexels.com/videos/4482900/free-video-4482900.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'Marketing',
    videoUrl: 'https://videos.pexels.com/video-files/4482900/4482900-hd_1920_1080_25fps.mp4'
  },
  {
    id: 'v-5',
    title: 'Enterprise Ecosystem',
    description: 'Bespoke internal tools and management dashboards.',
    image: 'https://images.pexels.com/videos/8199580/free-video-8199580.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category: 'Development',
    videoUrl: 'https://videos.pexels.com/video-files/8199580/8199580-uhd_2560_1440_25fps.mp4'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p-1',
    title: 'Neural CRM Integration',
    description: 'A custom AI-driven customer relationship system for a global tech firm.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'AI & Automation',
    demoUrl: 'https://chat.vercel.ai/'
  },
  {
    id: 'p-2',
    title: 'Luxe E-commerce Portal',
    description: 'A high-end fashion marketplace with automated inventory management.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    category: 'Development',
    demoUrl: 'https://demo.vercel.store/'
  },
  {
    id: 'p-3',
    title: 'Growth Analytics Dashboard',
    description: 'Real-time data visualization for a multi-national marketing agency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Corporate',
    demoUrl: 'https://tremor-dashboard.vercel.app/'
  },
  {
    id: 'p-4',
    title: 'Autonomous Ad Engine',
    description: 'Self-optimizing social media ad campaigns using machine learning.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800',
    category: 'Marketing',
    demoUrl: 'https://oss.gallery/'
  },
  {
    id: 'p-5',
    title: 'Brand Identity: Zenith',
    description: 'Complete visual rebranding for a sustainable energy startup.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    category: 'Design',
    demoUrl: 'https://taxonomy.vercel.app/'
  },
  {
    id: 'p-6',
    title: 'SaaS Platform: Flow',
    description: 'A project management tool built for remote creative teams.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    category: 'Development',
    demoUrl: 'https://nextjs-saas-starter-demo.vercel.app/'
  },
  {
    id: 'p-7',
    title: 'AI Chatbot: Nexus',
    description: 'Multilingual customer support agent with natural language processing.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
    category: 'AI',
    demoUrl: 'https://sdk.vercel.ai/'
  },
  {
    id: 'p-8',
    title: 'Content Strategy: Origin',
    description: 'Viral video campaign and content ecosystem for a lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800',
    category: 'Marketing',
    demoUrl: 'https://nextjs-portfolio-page.vercel.app/'
  },
  {
    id: 'p-9',
    title: 'FinTech App: Vault',
    description: 'Secure mobile banking application with biometric authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    category: 'Development',
    demoUrl: 'https://acme-dashboard.vercel.app/'
  },
  {
    id: 'p-10',
    title: 'Eco-Store Automation',
    description: 'Fully automated dropshipping store with AI product selection.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    category: 'E-commerce',
    demoUrl: 'https://commerce.vercel.app/'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-a',
    name: 'Alexander Sterling',
    role: 'CEO, Sterling Global',
    content: "The level of sophistication NoorWeb Studio brings to digital growth is unparalleled. Their neural architectures transformed our scaling strategy.",
    rating: 5,
    image: 'https://images.pexels.com/videos/3760799/free-video-3760799.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    videoUrl: 'https://videos.pexels.com/video-files/3760799/3760799-hd_1920_1080_25fps.mp4'
  },
  {
    id: 'rev-b',
    name: 'Elena Vance',
    role: 'Founder, Vance Creative',
    content: "Elegant design meets powerful AI. They didn't just build a website; they built a growth engine that consistently delivers high-quality leads.",
    rating: 5,
    image: 'https://images.pexels.com/videos/4152172/free-video-4152172.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    videoUrl: 'https://videos.pexels.com/video-files/4152172/4152172-hd_1920_1080_30fps.mp4'
  },
  {
    id: 'rev-c',
    name: 'Julian Thorne',
    role: 'Marketing Director, Nexus',
    content: "Our conversion rates tripled within months of implementing their AI ad systems. The ROI was evident from the first week of deployment.",
    rating: 5,
    image: 'https://images.pexels.com/videos/7682181/free-video-7682181.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    videoUrl: 'https://videos.pexels.com/video-files/7682181/7682181-hd_1920_1080_25fps.mp4'
  },
  {
    id: 'rev-d',
    name: 'Sophia Chen',
    role: 'E-commerce Lead, Aura',
    content: "The automation they implemented for our logistics saved us thousands in operational costs. A truly seamless integration of AI into our workflow.",
    rating: 5,
    image: 'https://images.pexels.com/videos/4482900/free-video-4482900.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    videoUrl: 'https://videos.pexels.com/video-files/4482900/4482900-hd_1920_1080_25fps.mp4',
    hidden: true
  },
  {
    id: 'rev-e',
    name: 'Marcus Thorne',
    role: 'CTO, DataStream',
    content: "Technical excellence combined with a deep understanding of business workflows. Their bespoke enterprise ecosystem is a masterpiece.",
    rating: 5,
    image: 'https://images.pexels.com/videos/8199580/free-video-8199580.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    videoUrl: 'https://videos.pexels.com/video-files/8199580/8199580-uhd_2560_1440_25fps.mp4',
    hidden: true
  },
  {
    id: 'rev-f',
    name: 'Isabella Rossi',
    role: 'Creative Director, Mode',
    content: "The branding work was exquisite. They captured our essence perfectly and translated it into a digital experience that resonates with our elite clientele.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/90.jpg'
  },
  {
    id: 'rev-g',
    name: 'David Park',
    role: 'Founder, TechVentures',
    content: "Seamless integration and exceptional support throughout the entire process. Their growth analytics gave us insights we never had before.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 'rev-h',
    name: 'Amara Okafor',
    role: 'CEO, GreenRoots',
    content: "Their AI tools gave us insights we never thought possible. A game changer for our sustainable scaling efforts.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/29.jpg'
  },
  {
    id: 'rev-i',
    name: 'Lucas Meyer',
    role: 'Director, Meyer Logistics',
    content: "Efficiency at its finest. The custom dashboard is now the heart of our operations, providing real-time data for critical decision making.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    id: 'rev-j',
    name: 'Chloe Dubois',
    role: 'Marketing Manager, Luxe',
    content: "Brilliant execution and a very stylish approach to digital marketing. Our brand visibility has reached new heights globally.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 'rev-k',
    name: 'Nathaniel Cross',
    role: 'Founder, Cross Capital',
    content: "Professional, reliable, and forward-thinking. The best in the business for high-ticket digital growth systems.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/76.jpg'
  },
  {
    id: 'rev-l',
    name: 'Yasmine Al-Fayed',
    role: 'CEO, Oasis Digital',
    content: "A truly international standard of work. Highly recommended for any serious brand looking to dominate the digital space.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  }
];
