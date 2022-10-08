interface SanityBody {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IHero extends SanityBody {
  jobTitle: string[];
  name: string;
}

export interface IAbout extends SanityBody {
  description: string;
  image: Image;
  intro: string;
  name: string;
  phonetics: string;
  skillsIntro: string;
  skillsList: string[];
}

export interface Technology extends SanityBody {
  image: Image;
  proficiency: string;
  title: string;
}

export interface ISkills extends SanityBody {
  description: string;
  technologies: Technology[];
  title: string;
}

interface Company extends SanityBody {
  company: string;
  endDate: number;
  isCurrentlyWorkingHere: boolean;
  jobId: number;
  jobTitle: string;
  points: string[];
  startDate: number;
}

export interface IExperience extends SanityBody {
  companyList: Company[];
  description: string;
  title: string;
}

interface Course extends SanityBody {
  institution: string;
  startDate: number;
  endDate: number;
  title: string;
}

export interface IEducation extends SanityBody {
  courseList: Course[];
  description: string;
  title: string;
}

interface Project extends SanityBody {
  demoLink: url;
  githubLink: url;
  image: Image;
  skills: string[];
  techStack: Image[];
  description: string;
  title: string;
}

export interface IPortfolio extends SanityBody {
  projectList: Project[];
  description: string;
  title: string;
}

interface Testimonial extends SanityBody {
  company: string;
  description: string;
  name: string;
}

export interface ITestimonials extends SanityBody {
  description: string;
  testimonialList: Testimonial[];
  title: string;
}

export interface IContact extends SanityBody {
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  title: string;
}
