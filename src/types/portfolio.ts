export interface SkillItem {
  name: string;
  iconName: string;
  highlight?: boolean;
  category: 'Frontend' | 'Python' | 'Backend & Database' | 'Tools';
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'All' | 'Web Application' | 'Frontend' | 'Python';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: 'Web Application' | 'Frontend' | 'Python';
  status: 'Featured' | 'Demo' | 'In Progress';
  statusBadgeColor: 'emerald' | 'amber' | 'cyan';
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  demoType: 'stayzen' | 'ecommerce' | 'food' | 'movie';
  hasInteractiveDemo: boolean;
  imageUrl: string;
  siteUrl?: string;
}

export interface EducationData {
  degree: string;
  status: string;
  collegeName: string;
  universityName: string;
  graduationYear: string;
  cgpa: string;
  highlights: string[];
  note: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  impactTag: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  careerObjective: string;
  highlights: Array<{
    title: string;
    icon: string;
    desc: string;
  }>;
}
