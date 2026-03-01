//Metadata
export const META = {
  name: 'Billy Labay',
  role: 'Fullstack Engineer',
  tagline: "I write boring, reliable code — intentionally, because in the world of software, boring is beautiful. ",
  location: 'Laguna, PH',
  phone: '+63 961 023 5867',
  email: 'labaybillyjames@gmail.com',
  linkedin: 'https://linkedin.com/in/billy-labay',
  github: 'https://github.com/thebrodigy',
  photo: './public/photo.jpeg',
}

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: '8+',       label: 'Years shipping code' },
  { value: '40+',      label: 'Microservices built & maintained' },
  { value: 'CAD 500K+', label: 'Annual cloud savings' },
  { value: '99.9%',    label: 'Uptime maintained' },
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
    github: 'https://github.com/thebrodigy/zho.rt-web',
    tags: ['Frontend', 'React', 'NextJS', 'Tailwind'],
    emoji: '🔗',
    color: '#f97316',
  },
  {
    name: 'Rain Check',
    tagline: 'Weather App',
    description:
      "Check the weather before you regret it. Real-time forecasts served with a side of personality. Because nobody likes surprise rain.",
    url: 'https://raincheckweb.vercel.app',
    github: 'https://github.com/thebrodigy/rain-check-web',
    tags: ['Fullstack', 'React', 'NextJS', 'Tailwind', 'Java','Spring Boot', 'OpenWeather API'],
    emoji: '🌧️',
    color: '#38bdf8',
  },
]

//Skills
export const SKILLS = [
  {
    category: 'Languages & Frameworks',
    emoji: '☕',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security'],
  },
  {
    category: 'APIs & Architecture',
    emoji: '🏗️',
    items: ['REST APIs', 'Microservices', 'Clean Architecture', 'SOLID Principles', 'Design Patterns'],
  },
  {
    category: 'Databases & Caching',
    emoji: '🗄️',
    items: ['SQL Server', 'Oracle DB', 'MongoDB', 'Redis'],
  },
  {
    category: 'Messaging & Queues',
    emoji: '📨',
    items: ['RabbitMQ', 'Azure Service Bus'],
  },
  {
    category: 'Cloud & DevOps',
    emoji: '☁️',
    items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'Jenkins', 'CI/CD', 'Git', 'Maven'],
  },
  {
    category: 'Security & Testing',
    emoji: '🔐',
    items: ['JWT', 'OAuth2', 'JUnit', 'Mockito'],
  },
  {
    category: 'Frontend',
    emoji: '🖥️',
    items: ['Angular', 'Ext JS'],
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
