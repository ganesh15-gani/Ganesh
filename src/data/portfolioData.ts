import type {
  PersonalInfo,
  SkillCategory,
  ProjectItem,
  EducationData,
  StrengthItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Golla Ganesh",
  title: "Frontend Developer | React Developer | Python Developer",
  roles: [
    "Frontend Developer",
    "React.js Developer",
    "Python Developer",
    "Software Developer"
  ],
  // Editable contact fields - easily update your email and phone here
  email: "gollaganesh.dev@gmail.com",
  phone: "+91 98765 43210 (Available upon request)",
  location: "India (Open to Relocation & Remote)",
  github: "https://github.com/ganesh15-gani",
  linkedin: "https://www.linkedin.com/in/golla-ganesh/",
  bio: "Hi, I'm Golla Ganesh. I am a recent Bachelor's degree graduate passionate about frontend development, Python programming, and modern web technologies. I enjoy transforming ideas into functional digital experiences. My interests include building responsive user interfaces, developing web applications, writing Python programs, and exploring new development technologies. I believe in continuous learning, clean coding practices, and building solutions that solve real-world problems.",
  careerObjective: "To build a successful career as a Software Developer in a professional technology company, contribute to innovative projects, and continuously grow my technical expertise.",
  highlights: [
    {
      title: "Passionate Developer",
      icon: "Code2",
      desc: "Driven to write clean, modular, and maintainable code for production-grade applications."
    },
    {
      title: "Problem Solver",
      icon: "Sparkles",
      desc: "Analytical approach to debugging, optimizing performance, and crafting elegant solutions."
    },
    {
      title: "Quick Learner",
      icon: "Zap",
      desc: "Rapidly assimilating new frameworks, libraries, APIs, and modern development standards."
    },
    {
      title: "Technology Enthusiast",
      icon: "Compass",
      desc: "Constantly exploring cutting-edge web technologies, 3D graphics, and Python automation."
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    badge: "Core Expertise",
    iconName: "Layout",
    description: "Crafting performant, accessible, and responsive user interfaces with contemporary frontend ecosystems.",
    skills: [
      { name: "HTML5", iconName: "FileCode2", category: "Frontend", highlight: true },
      { name: "CSS3", iconName: "Palette", category: "Frontend" },
      { name: "JavaScript ES6+", iconName: "Braces", category: "Frontend", highlight: true },
      { name: "React.js", iconName: "Atom", category: "Frontend", highlight: true },
      { name: "TypeScript", iconName: "FileJson", category: "Frontend", highlight: true },
      { name: "Responsive Web Design", iconName: "Smartphone", category: "Frontend" },
      { name: "Tailwind CSS", iconName: "Wind", category: "Frontend", highlight: true },
    ]
  },
  {
    title: "Python Development",
    badge: "Programming & Logic",
    iconName: "Terminal",
    description: "Building structured programs, algorithmic logic, API workflows, and robust data scripts.",
    skills: [
      { name: "Python", iconName: "Code", category: "Python", highlight: true },
      { name: "Object-Oriented Programming", iconName: "Boxes", category: "Python", highlight: true },
      { name: "Functions & Modules", iconName: "Workflow", category: "Python" },
      { name: "File Handling", iconName: "FolderGit2", category: "Python" },
      { name: "Exception Handling", iconName: "ShieldAlert", category: "Python" },
      { name: "Python Libraries", iconName: "Package", category: "Python" },
      { name: "REST API Fundamentals", iconName: "Send", category: "Python", highlight: true },
    ]
  },
  {
    title: "Backend & Database",
    badge: "Architecture & Data",
    iconName: "Database",
    description: "Understanding full-stack lifecycle, server-side fundamentals, relational tables, and document stores.",
    skills: [
      { name: "Node.js", iconName: "Server", category: "Backend & Database" },
      { name: "Express.js", iconName: "Cpu", category: "Backend & Database" },
      { name: "MongoDB", iconName: "Database", category: "Backend & Database" },
      { name: "MySQL", iconName: "TableProperties", category: "Backend & Database", highlight: true },
      { name: "SQL", iconName: "FileSpreadsheet", category: "Backend & Database" },
      { name: "REST APIs", iconName: "Globe", category: "Backend & Database", highlight: true },
    ]
  },
  {
    title: "Developer Tools",
    badge: "Workflow & Ecosystem",
    iconName: "Wrench",
    description: "Version control, developer environments, API inspection, and modern collaborative tooling.",
    skills: [
      { name: "Git", iconName: "GitBranch", category: "Tools", highlight: true },
      { name: "GitHub", iconName: "Github", category: "Tools", highlight: true },
      { name: "VS Code", iconName: "Laptop", category: "Tools" },
      { name: "Postman", iconName: "SendHorizontal", category: "Tools", highlight: true },
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "stayzen",
    number: "01",
    title: "StayZen",
    category: "Web Application Development",
    filterCategory: "Web Application",
    status: "Featured",
    statusBadgeColor: "emerald",
    tagline: "Accommodation & PG Discovery Platform",
    description: "StayZen is an accommodation and PG discovery platform designed to simplify the process of finding suitable accommodation through a modern and user-friendly interface.",
    features: [
      "Accommodation discovery engine with dynamic filtering",
      "Interactive property browsing and room previews",
      "Fully responsive and mobile-first layout",
      "Clean UI design with visual booking indicators",
      "User-friendly navigation and verified amenities display"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Vite"],
    githubUrl: "https://github.com/ganesh15-gani",
    demoType: "stayzen",
    hasInteractiveDemo: true,
    imageUrl: "/images/project-stayzen.jpg",
    siteUrl: "https://stayzen-discover.app"
  },
  {
    id: "ecommerce",
    number: "02",
    title: "Modern E-Commerce Website",
    category: "Frontend Development",
    filterCategory: "Frontend",
    status: "Demo",
    statusBadgeColor: "cyan",
    tagline: "Interactive Showcase & Product Storefront",
    description: "A modern e-commerce frontend demonstration built with React.js showcasing a responsive catalog, dynamic shopping cart drawer, instant price tallying, and modern checkout interface.",
    features: [
      "Premium product catalog with category filtering",
      "Dynamic product detail preview modals",
      "Reactive shopping cart drawer with quantity toggles",
      "Search bar with live client-side filtering",
      "Modern checkout flow mockup with payment selector",
      "Seamless mobile-first navigation"
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    githubUrl: "https://github.com/ganesh15-gani",
    demoType: "ecommerce",
    hasInteractiveDemo: true,
    imageUrl: "/images/project-ecommerce.jpg",
    siteUrl: "https://volta-audio-store.app"
  },
  {
    id: "food-delivery",
    number: "03",
    title: "Online Food Delivery Platform",
    category: "Web Application Development",
    filterCategory: "Web Application",
    status: "Demo",
    statusBadgeColor: "cyan",
    tagline: "Interactive Restaurant Menus & Real-Time Ordering",
    description: "An intuitive online food delivery platform built with modern web technologies, featuring restaurant discovery, multi-category cuisine filtering, dynamic cart management with dietary tags, and live delivery status tracking.",
    features: [
      "Curated restaurant directory with culinary category filters",
      "Interactive dish menu with Veg / Non-Veg dietary badges",
      "Dynamic shopping cart drawer with instant quantity controls",
      "Tax, delivery fee, and discount threshold calculations",
      "Live order confirmation and rider dispatch tracking simulator",
      "Fully responsive and mobile-optimized ordering experience"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "REST APIs", "State Management"],
    githubUrl: "https://github.com/ganesh15-gani",
    demoType: "food",
    hasInteractiveDemo: true,
    imageUrl: "/images/project-tomato-food.jpg",
    siteUrl: "https://tomato-food-delivery.app"
  },
  {
    id: "movie-ticket",
    number: "04",
    title: "Online Movie Ticket Booking",
    category: "Frontend Development",
    filterCategory: "Frontend",
    status: "Demo",
    statusBadgeColor: "cyan",
    tagline: "Theatrical Showcase & Interactive Seat Reservation",
    description: "A sleek cinema ticketing web application offering blockbuster film browsing, auditorium showtime schedules, interactive real-time seat reservation layout (Available, Selected, Reserved), and instant digital ticket generation.",
    features: [
      "Now Showing and Upcoming movie showcase with genre tags & ratings",
      "Cinema hall selection and dynamic showtime slot scheduling",
      "Interactive 2D auditorium seat grid with instant state changes",
      "Dynamic price computation based on Standard & VIP seating tiers",
      "Digital ticket pass preview modal with QR verification mockup",
      "Modern dark cyberpunk aesthetic with fluid touch interactions"
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/ganesh15-gani",
    demoType: "movie",
    hasInteractiveDemo: true,
    imageUrl: "/images/project-quickshow-movies.jpg",
    siteUrl: "https://quickshow-cinema.app"
  }
];

// Editable Education Information
export const educationData: EducationData = {
  degree: "Bachelor's Degree",
  status: "Recent Graduate",
  collegeName: "Affiliated Engineering & Technology Institution", // [EDITABLE: Update with exact College Name]
  universityName: "Recognized State University",                 // [EDITABLE: Update with exact University Name]
  graduationYear: "2024 / 2025",                                  // [EDITABLE: Update with graduation year]
  cgpa: "First Class with Distinction",                          // [EDITABLE: Update with CGPA / Percentage]
  highlights: [
    "Core coursework in Data Structures, Object-Oriented Programming, and Web Technologies",
    "Specialized focus on Modern Frontend Frameworks and Python Software Development",
    "Completed practical laboratory modules in Relational Databases (SQL) and Software Engineering",
    "Active participant in technical coding clubs and university software initiatives"
  ],
  note: "Exact college, university, graduation year, and CGPA are easily customizable in `src/data/portfolioData.ts` upon confirmation."
};

export const professionalStrengths: StrengthItem[] = [
  {
    id: "problem-solving",
    title: "Problem Solving",
    iconName: "BrainCircuit",
    description: "Deconstructing complex engineering problems into clean, modular, and testable programming solutions.",
    impactTag: "Algorithmic Approach"
  },
  {
    id: "logical-thinking",
    title: "Logical Thinking",
    iconName: "Network",
    description: "Evaluating edge cases, optimizing computational complexity, and structuring clear application data flows.",
    impactTag: "Structured Logic"
  },
  {
    id: "quick-learning",
    title: "Quick Learning",
    iconName: "Zap",
    description: "Rapidly mastering new frameworks, modern architectural patterns, and production tooling.",
    impactTag: "High Adaptability"
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    iconName: "Users",
    description: "Communicating transparently, conducting peer code reviews, and working efficiently with Git workflows.",
    impactTag: "MNC Culture Ready"
  },
  {
    id: "adaptability",
    title: "Adaptability",
    iconName: "Workflow",
    description: "Embracing fast-evolving project scopes, agile sprints, and multifaceted frontend & Python tasks.",
    impactTag: "Cross-Functional"
  },
  {
    id: "continuous-improvement",
    title: "Continuous Improvement",
    iconName: "TrendingUp",
    description: "Proactively refactoring code, staying abreast of web standards, and sharpening technical depth.",
    impactTag: "Lifelong Growth"
  }
];
