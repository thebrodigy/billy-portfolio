//Metadata
export const META = {
  name: 'Billy Labay',
  alias: 'thebrodigy',
  role: 'Fullstack Engineer',
  tagline: "Hi! I'm <strong>Billy Labay</strong>. Fullstack engineer with a backend soul. I design the APIs, build the microservices, and yes — I'll fix your Angular component too. Clean code, solid architecture, both ends of the wire. ",
  location: 'Laguna, PH',
  phone: '+63 961 023 5867',
  email: 'labaybillyjames@gmail.com',
  linkedin: 'https://linkedin.com/in/billy-labay',
  github: 'https://github.com/thebrodigy',
  photo: '/photo.jpeg',
}

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: '8+',       label: 'Years shipping code' },
  { value: '40+',      label: 'Microservices built & maintained' },
  { value: '500K', label: 'Annual cloud savings' },
  { value: '99.9%',    label: 'Uptime maintained' },
]

// ── Services ────────────────────────────────────────────────
export const SERVICES = [
  {
    name: 'Web Development',
    description: 'Clean, scalable websites and web applications built with modern technologies. Fast, maintainable, and ready to grow with your business.',
    emoji: '🖥️',
  },
  {
    name: 'API Development & Integration',
    description: 'Custom APIs and third-party integrations that connect your systems and streamline your workflows — built to be reliable and well-documented.',
    emoji: '🔗',
  },
  {
    name: 'Performance Optimization',
    description: 'I audit your codebase, identify bottlenecks, and implement targeted improvements to speed, Core Web Vitals, and overall efficiency.',
    emoji: '⚡',
  },
  {
    name: 'Consulting & Technical Advisory',
    description: 'Clear, honest guidance on architecture, stack selection, and development roadmaps — so you move forward with confidence and avoid costly mistakes.',
    emoji: '🧠',
  },
  {
    name: 'Maintenance & Support',
    description: 'Ongoing support to keep your applications running smoothly — from regular updates and security patches to troubleshooting and feature enhancements.',
    emoji: '🛠️',
  }
]

// ── Experience ────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    role: 'Backend Engineer',
    company: 'ING Hubs Philippines',
    period: 'Jun 2025 – Present',
    location: 'Makati, PH',
    current: true,
    emoji: '🏦',
    highlights: [
      'Maintained and enhanced 5+ Java Spring Boot microservices for enterprise card management, hitting 99.9% uptime',
      'Tightened Azure DevOps CI/CD pipelines — faster deploys, fewer grey hairs',
      'Monthly security audits and dependency lifecycle management (LCM)',
    ],
    // tags: ['Java', 'Spring Boot', 'Azure DevOps', 'CI/CD', 'Microservices', 'Azure'],
    tags: [
      { label: 'Java', icon: 'devicon-java-plain' },
      { label: 'Spring Boot', icon: 'devicon-spring-plain' },
      { label: 'Azure', icon: 'devicon-azure-plain' },
    ],
  },
  {
    role: 'Senior Fullstack Engineer',
    company: 'Manulife IT Delivery Center Asia',
    period: 'Feb 2020 – Jun 2025',
    location: 'Makati, PH',
    current: false,
    emoji: '🌏',
    highlights: [
      'Designed and maintained 40+ Java Spring Boot microservices across 4 markets (APAC)',
      'Led cloud cost optimization initiative — saved the company CAD 500,000+ per year',
      'Architected Blue-Green deployment in Jenkins CI/CD — zero-downtime releases, adopted across multiple projects',
      'Mentored junior engineers, led code reviews, and interviewed candidates',
      'Pitched in on Angular whenever the frontend needed a backend friend',
    ],    
    tags: [
      { label: 'Java', icon: 'devicon-java-plain' },
      { label: 'Spring Boot', icon: 'devicon-spring-original' },
      { label: 'Angular', icon: 'devicon-angular-plain' },
      { label: 'Azure', icon: 'devicon-azure-plain' },
    ],
  },
  {
    role: 'Fullstack Engineer',
    company: 'OOCL Philippines',
    period: 'Jun 2017 – Jan 2020',
    location: 'Pasay, PH',
    current: false,
    emoji: '🚢',
    highlights: [
      'Built and maintained Java Spring Boot enterprise applications for shipping operations',
      'Developed Ext JS front-end modules wired tightly to backend services',
      'Ran technical training sessions for 50+ developers across teams',
    ],    
    tags: [
      { label: 'Java', icon: 'devicon-java-plain' },
      { label: 'Spring', icon: 'devicon-spring-plain' },
    ],
  },
]

//Projects
export const PROJECTS = [
  {
    name: 'ZHO.RT',
    tagline: 'URL Shortener',
    description:
      "Long URLs are a crime. ZHO.RT is the verdict. Paste your URL, get something short and shareable. Fast, clean, no nonsense.",
    url: 'https://zhort.vercel.app',
    github: [
      { label: 'Frontend', url: 'https://github.com/thebrodigy/zho.rt-web' },
    ],
    tags: ['Frontend', 'React', 'NextJS', 'Tailwind', 'Vercel'],
    emoji: '🔗',
    color: '#f97316',
    thumbnail: '/thumbnails/zhort.png',
  },
  {
    name: 'Rain Check',
    tagline: 'Weather App',
    description:
      "Check the weather before you regret it. Real-time forecasts served with a side of personality. Because nobody likes surprise rain.",
    url: 'https://raincheckweb.vercel.app',
    github: [
      { label: 'Frontend', url: 'https://github.com/thebrodigy/rain-check-web' },
      { label: 'Backend', url: 'https://github.com/thebrodigy/rain-check'},
    ],
    tags: ['Fullstack', 'React', 'NextJS', 'Tailwind', 'Java','Spring Boot', 'OpenWeather API','Vercel', 'Render'],
    emoji: '🌧️',
    color: '#38bdf8',
    thumbnail: '/thumbnails/raincheck.png',
  },
]

//Skills
export const SKILLS = [
  {
    category: 'Backend',
    emoji: '☕',
    items: ['Java', 'Spring', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security'],
  },
  {
    category: 'Frontend',
    emoji: '🖥️',
    items: ['Angular', 'Ext JS', 'React', 'NextJS', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Caching',
    emoji: '🗄️',
    items: ['SQL Server', 'Oracle DB', 'MongoDB', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    emoji: '☁️',
    items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'OpenShift', 'Azure DevOps', 'Jenkins', 'CI/CD', 'Git', 'Maven', 'Vercel', 'Netlify', 'Render'],
  },
  {
    category: 'Messaging & Queues',
    emoji: '📨',
    items: ['RabbitMQ', 'Azure Service Bus'],
  },
  {
    category: 'APIs & Architecture',
    emoji: '🏗️',
    items: ['REST APIs', 'Microservices', 'Clean Architecture', 'SOLID Principles', 'Design Patterns'],
  },
  {
    category: 'Security & Testing',
    emoji: '🔐',
    items: ['JWT', 'OAuth2', 'JUnit', 'Mockito'],
  },
]

//Certifications
export const CERTIFICATIONS = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    certId: '8EB5978513C7B708',
    certNumber: 'D38546-82EH95',
    emoji: '☁️',
    url: 'https://learn.microsoft.com/en-us/users/billylabay-2912/credentials/8eb5978513c7b708',
  },
]

//Education
export const EDUCATION = [
  {
    degree: 'BS Information Technology',
    school: 'Mapua Malayan Colleges of Laguna',
    period: '2014 – 2017',
  },
  {
    degree: 'BS Computer Engineering (Foundational)',
    school: 'Mapua Malayan Colleges of Laguna',
    period: '2012 – 2014',
  },
]
