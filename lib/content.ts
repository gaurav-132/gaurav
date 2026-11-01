export const profile = {
  name: "Gaurav Gusain",
  role: "Full-stack developer",
  location: "Haridwar, Uttarakhand",
  email: "ggusain265@gmail.com",
  phoneDisplay: "+91 96345 83165",
  phoneHref: "tel:+919634583165",
  github: "https://github.com/gaurav-132",
  linkedin: "https://www.linkedin.com/in/heisgrv",
  x: "https://x.com/Gau_ravv__",
};

export const nav = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: "hrms" | "sports" | "customer-crm";
  index: string;
  name: string;
  summary: string;
  purpose: string;
  problem: string;
  role: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "hrms",
    index: "01",
    name: "ATS/HRMS & Recruitment CRM",
    summary: "Professional experience contributing to a team-built HRMS-related CRM application.",
    purpose: "Support recruitment and people operations with software shaped around the team's workflows.",
    problem: "Recruitment and HR work involves connected records and steps that need to stay organized.",
    role: "I contributed to parts of the application as a member of the product team; the broader system was team-built.",
    features: [],
    stack: ["Professional experience", "HRMS", "CRM workflows"],
    links: [],
  },
  {
    id: "sports",
    index: "02",
    name: "Sports CRM",
    summary: "Professional experience contributing to a CRM application built for a sports-related business domain.",
    purpose: "Help a product team support operational workflows through a domain-specific CRM.",
    problem: "Sports organizations have their own records and processes that general-purpose tools may not fit.",
    role: "I contributed within the product team. This card describes the domain at a high level and does not claim ownership of the full system.",
    features: [],
    stack: ["Professional experience", "Sports CRM", "Workflow software"],
    links: [],
  },
  {
    id: "customer-crm",
    index: "03",
    name: "Customer Interaction CRM",
    summary: "Professional experience building CRM software for customer interactions.",
    purpose: "Give teams an application to manage customer relationships and their day-to-day work.",
    problem: "Customer information and follow-up work need a clear place within business operations.",
    role: "I worked across the application using React, Node.js, and Laravel. The project has no public repository or demo.",
    features: [],
    stack: ["React", "Node.js", "Laravel"],
    links: [],
  },
];

export type Note = {
  name: string;
  text: string;
  meta: string;
  href?: string;
  linkLabel?: string;
};

export const notes: Note[] = [
  {
    name: "Chakra UI",
    text: "Merged fix so ChartTooltip uses its formatter prop. Released in @chakra-ui/charts after review on pull request 10071.",
    meta: "Open source · React, TypeScript",
    href: "https://github.com/chakra-ui/chakra-ui/pull/10071",
    linkLabel: "Pull request",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "AngularJS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Firebase"],
  },
];

export const services = [
  {
    index: "01",
    title: "Custom CRM & internal tools",
    text: "Bring customer, recruitment, or team workflows into one clear system, shaped around how your business already works.",
  },
  {
    index: "02",
    title: "Full-stack web applications",
    text: "From responsive interface to API and database, build a practical application with the pieces designed to work together.",
  },
  {
    index: "03",
    title: "Frontend & agency collaboration",
    text: "Add reliable React or Next.js capacity to an existing product team, including white-label delivery and focused feature work.",
  },
];

export const steps = [
  {
    index: "01",
    title: "Understand",
    text: "The requirement, the business problem, and what a useful result looks like for the people who will use it.",
  },
  {
    index: "02",
    title: "Plan",
    text: "The shape of the solution and a technical approach that fits the job.",
  },
  {
    index: "03",
    title: "Build",
    text: "Develop the application and connect the interface, API, and database.",
  },
  {
    index: "04",
    title: "Deliver",
    text: "Test the important paths, refine what does not hold up, and hand over work that runs.",
  },
];
