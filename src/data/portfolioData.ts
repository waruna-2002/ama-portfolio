export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "email" | "linkedin" | "instagram" | "whatsapp" | "cv" | "globe";
  description?: string;
  primary?: boolean;
  color?: string;
}

export interface NavLink {
  label: string;
  href: string;
  id: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  category: string;
  desc: string;
  fullDetails: string;
  highlights: string[];
  icon: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
  phase: string;
}

export interface WorkflowStep {
  step: string;
  name: string;
  desc: string;
  details: string;
}

export interface TnaStep {
  day: string;
  task: string;
  status: "Completed" | "In Progress" | "Pending";
}

export interface Qualification {
  title: string;
  institution: string;
  year: string;
  status?: string;
}

export interface IndustryExposure {
  company: string;
  location: string;
  role: string;
}

export interface LeadershipRole {
  title: string;
  organization: string;
}

export interface Achievement {
  title: string;
  year: string;
  category: string;
}

export const personalInfo = {
  name: "Ama Sree Dananjana",
  title: "Fashion Merchandise Management Undergraduate",
  headline: "Undergraduate at SLTC Research University | Specializing in Fashion Merchandise Management & Apparel Operations",
  bioParagraph1: "I am Ama Sree Dananjana, a highly motivated undergraduate student at SLTC Research University pursuing a BSc in Fashion Merchandise Management (2024–2028). I possess a solid academic foundation in garment production, apparel merchandising, inventory management, and quality control processes.",
  bioParagraph2: "I am a proactive, quick learner with exceptional organizational skills, eager to contribute to and grow within a professional setting in the global garment and apparel industry.",
  university: "SLTC Research University",
  degree: "BSc in Fashion Merchandise Management",
  academicYears: "2024 – 2028",
  school: "Kottawa Dharmapala Maha Vidyalaya (G.C.E. A/L 2021–2024)",
  status: "Undergraduate (Present)",
  email: "amadananjana@gmail.com",
  phone: "+94 77 123 4567",
  whatsappUrl: "https://wa.me/94764758433",
  cvDownloadUrl: "/amaCV.pdf",
  profileImage: "/ama.jpg",
  aboutImage: "/ama.jpg",
  galleryPhotos: [
    "/ama.jpg",
    "/ama1.jpg",
    "/ama2.jpg",
    "/ama3.jpg",
    "/ama4.jpg",
  ],
  languages: ["Sinhala (Fluent)", "English (Fluent)"],
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ama-dananjana?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "linkedin",
    description: "Professional Network & Career Profile",
    primary: true,
    color: "#7BBDE8",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/ama.dananjana?utm_source=qr&igsi=MTdsMWw1N2Y0bHNhMg==",
    icon: "instagram",
    description: "Fashion Merchandising Insights",
    primary: true,
    color: "#E4405F",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/94764758433",
    icon: "whatsapp",
    description: "Direct Chat on WhatsApp",
    primary: true,
    color: "#25D366",
  },
];

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home", iconName: "Home" },
  { id: "about", label: "About", href: "#about", iconName: "User" },
  { id: "skills", label: "Skills", href: "#skills", iconName: "Cpu" },
  { id: "projects", label: "Projects", href: "#projects", iconName: "Sparkles" },
  { id: "exposure", label: "Exposure", href: "#exposure", iconName: "Building2" },
  { id: "costing-calculator", label: "Costing & TNA", href: "#costing-calculator", iconName: "Calculator" },
  { id: "contact", label: "Contact", href: "#contact", iconName: "Mail" },
];

export const qualifications: Qualification[] = [
  { title: "Diploma in IT", institution: "IMS Campus", year: "2024" },
  { title: "HRM Course", institution: "IMS Campus", year: "2024" },
  { title: "English Language Course (1st Level)", institution: "British Council", year: "2024" },
  { title: "Aquinas English (Level 4)", institution: "Aquinas College", year: "2024" },
];

export const industryExposures: IndustryExposure[] = [
  { company: "Teejay Lanka PLC", location: "Avissawella", role: "Industry Field Visit" },
  { company: "MAS Intimates - Unichela", location: "Panadura", role: "Industry Field Visit" },
];

export const leadershipRoles: LeadershipRole[] = [
  { title: "Coordinator of Science Day", organization: "SLTC Research University" },
  { title: "Content Lead & Community Organizer ('Mathaka' Film)", organization: "SLTC Research University" },
  { title: "Head of Community - Freshers", organization: "SLTC Research University" },
  { title: "Netball Vice-Captain", organization: "SLTC Research University" },
  { title: "Senior Executive Prefect", organization: "Kottawa Dharmapala Maha Vidyalaya" },
];

export const memberships = [
  "Dancing Pack SLTC",
  "Gavel Club SLTC",
  "Sport Council SLTC",
  "Student Interactive Society Member (2025/2026)",
];

export const sportsAndAchievements: Achievement[] = [
  { title: "Sportmeet House Captain", year: "2023", category: "Leadership" },
  { title: "Championship in Swimming", year: "2023", category: "Sports" },
  { title: "Championship in Badminton", year: "2019", category: "Sports" },
];

export const volunteeringData = [
  { title: "Sahana Yathra", period: "2025/2026", role: "Volunteer" },
  { title: "Student Interactive Society", period: "2025/2026", role: "Member" },
  { title: "Sport Council SLTC", period: "2025/2026", role: "Member" },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Apparel & Merchandising",
    icon: "Scissors",
    description: "Garment manufacturing, pattern development & process control",
    skills: [
      "Process Improvement & Work Measurement",
      "Pattern Development & Grading",
      "Process of Merchandising",
      "Clothing Manufacturing Initiation",
    ],
  },
  {
    title: "Textile Science & QA",
    icon: "Cpu",
    description: "Fabric dyeing, finishing & quality assurance",
    skills: [
      "Textile Testing & Quality Assurance",
      "Fabric & Garment Dyeing",
      "Textile Finishing Processes",
      "Garment Accessories & Applications",
    ],
  },
  {
    title: "Supply Chain & Costing",
    icon: "BarChart",
    description: "Buying strategy, inventory & garment costing",
    skills: [
      "Supply Chain Management",
      "Buying & Garment Costing",
      "Merchandising Technology & Product Lines",
      "Inventory Management Processes",
    ],
  },
  {
    title: "Professional & Leadership",
    icon: "Code2",
    description: "Strategic execution, communication & digital skills",
    skills: [
      "Management Skills",
      "Digital Marketing",
      "Negotiation & Leadership",
      "Critical Thinking & Creativity",
    ],
  },
];

export const terraProjectData = {
  id: "terra-fashion-show-2026",
  title: "TERRA Fashion Show 2026",
  subtitle: "American Streetwear – Upcycled Denim Collection",
  department: "Fashion & Textile Department",
  institution: "Sri Lanka Technological Campus (SLTC)",
  category: "Runway Fashion & Upcycled Denim Collection",
  tag: "Latest Flagship Project 2026",
  videoUrl: "/Video%20Project%201.mp4",
  imageUrl: "/project1.jpg",
  projectImages: [
    "/project1.jpg",
    "/prooject1.1.jpg",
    "/peoject%201.2.jpg",
  ],
  highlights: [
    "Upcycled Waste Denim",
    "6-Look Runway Collection",
    "Patchwork & Reconstruction",
    "Industrial Accessories (Chains & Rivets)",
    "Sustainable Streetwear Innovation",
  ],
  paragraphs: [
    "TERRA Fashion Show 2026 was a fashion event organized by the Fashion & Textile Department at Sri Lanka Technological Campus (SLTC), providing a platform for student designers to showcase their creativity, garment development skills and individual design concepts.",
    "As student designers, we had the opportunity to transform our creative ideas into finished garments and present them on the runway. The experience allowed us to explore different design concepts, fabrics, construction techniques and styling while working towards a professional fashion-show presentation.",
    "As part of the fashion show, we developed a six-look American Streetwear collection using waste denim. The collection focused on giving discarded denim a new purpose by transforming it into contemporary and wearable streetwear garments.",
    "The designs explored patchwork, reconstruction, layering, contrasting denim panels, pockets and utility-inspired details. Different shades and pieces of waste denim were combined to create individual silhouettes and give each garment a distinctive character.",
    "To enhance the streetwear aesthetic, garments featured industrial accents such as chains, rivets, patches, and jewelry-inspired accessories. The design process integrated denim reconstruction and functional craftsmanship, demonstrating how waste denim can be sustainably transformed into contemporary fashion while gaining hands-on runway experience.",
  ],
};

export const caseStudiesData: CaseStudy[] = [
  {
    id: "diabetic-socks",
    title: "Design & Development of Antibacterial Diabetic Socks",
    tag: "Medical Apparel",
    category: "Academic Innovation Project",
    desc: "Engineered antibacterial diabetic socks aimed at reducing foot problems such as infections, pressure points, and discomfort for diabetic patients.",
    fullDetails: "Utilizes soft, breathable, and antibacterial materials to improve foot hygiene, protect sensitive skin, support blood circulation, and ensure daily wearer safety.",
    highlights: ["Antibacterial Materials", "Pressure Reduction", "Moisture Wicking", "Circulation Support"],
    icon: "Cpu",
  },
  {
    id: "apparel-costing-study",
    title: "Garment Costing & Merchandising Optimization",
    tag: "Garment Costing",
    category: "Merchandising Strategy",
    desc: "Applied work measurement, pattern grading, and BOM analysis to optimize fabric utilization and line efficiency.",
    fullDetails: "Incorporated FOB pricing models, trim sourcing analytics, and AQL standard compliance for export manufacturing.",
    highlights: ["SMV Calculation", "BOM Management", "Line Balancing", "AQL Quality Check"],
    icon: "BarChart3",
  },
  {
    id: "textile-testing-qa",
    title: "Textile Quality Assurance & Dyeing Analysis",
    tag: "Textile Science",
    category: "QA & Material Testing",
    desc: "Comprehensive testing on fabric composition, color fastness during dyeing, and physical durability under industrial finishing conditions.",
    fullDetails: "Evaluates fiber strength, color fastness to washing/light, and chemical finishing effects on garment performance.",
    highlights: ["Textile QA", "Garment Dyeing", "Fiber Strength", "Industrial Finishing"],
    icon: "Recycle",
  },
];

export const milestonesData: Milestone[] = [
  {
    year: "2021-2024",
    title: "G.C.E. Advanced Level",
    desc: "Kottawa Dharmapala Maha Vidyalaya & Senior Executive Prefect leadership role.",
    phase: "MILESTONE 01",
  },
  {
    year: "2024",
    title: "Professional Certifications",
    desc: "Diploma in IT, HRM Course (IMS Campus), English Studies (British Council & Aquinas).",
    phase: "MILESTONE 02",
  },
  {
    year: "2024-2028",
    title: "BSc in Fashion Merchandise Management",
    desc: "SLTC Research University undergraduate studies, R&D on Antibacterial Diabetic Socks.",
    phase: "MILESTONE 03",
  },
  {
    year: "2026-Future",
    title: "Industry Exposure & Leadership",
    desc: "Field visits to Teejay Lanka PLC & MAS Intimates-Unichela; Student Council & Sports leadership.",
    phase: "MILESTONE 04",
  },
];

export const workflowStepsData: WorkflowStep[] = [
  { step: "01", name: "Process Initiation", desc: "Clothing manufacturing setup & design brief.", details: "Initiating manufacturing schedules and technical specs." },
  { step: "02", name: "Pattern & Tech Pack", desc: "Pattern development & grading specifications.", details: "Drafting 2D/3D patterns and setting grading parameters." },
  { step: "03", name: "Textile Testing & Dyeing", desc: "Quality assurance & shade matching.", details: "Testing fabric performance, garment dyeing, and finishing." },
  { step: "04", name: "Costing & Sourcing", desc: "Garment costing & supply chain management.", details: "Determining FOB costs, trim sourcing, and accessories." },
  { step: "05", name: "Quality Assurance", desc: "AQL inspection & work measurement.", details: "Enforcing quality standards and line output efficiency." },
  { step: "06", name: "Delivery & Execution", desc: "Fulfillment & commercial merchandising.", details: "Managing inventory dispatch and order fulfillment." },
];

export const tnaStepsData: TnaStep[] = [
  { day: "Day 01", task: "Tech Pack & Pattern Grading Handover", status: "Completed" },
  { day: "Day 10", task: "Fabric Dyeing & Trims Sourcing", status: "Completed" },
  { day: "Day 20", task: "Antibacterial Prototype Sample Approval", status: "In Progress" },
  { day: "Day 35", task: "Bulk Sewing & AQL Textile Testing", status: "Pending" },
  { day: "Day 45", task: "Ex-Factory Order Dispatch", status: "Pending" },
];
