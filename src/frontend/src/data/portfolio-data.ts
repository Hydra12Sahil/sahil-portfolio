import type {
  Certification,
  Education,
  Experience,
  Project,
  Skill,
} from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Collaborative Analytics Platform",
    description:
      "Multi-user data collaboration site built with React — real-time shared workspaces, interactive charts, and team annotations for analysts.",
    tags: ["React", "JavaScript", "Data Visualization"],
    liveUrl: "https://sahil-mukul-shivam.netlify.app/",
    githubUrl: "https://github.com/sahil",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Sales Dashboard",
    description:
      "End-to-end Power BI dashboard tracking revenue, product performance, regional sales trends, and customer segmentation across 12 months of data.",
    tags: ["Power BI", "SQL", "Excel", "DAX"],
    githubUrl: "https://github.com/sahil",
    featured: true,
  },
  {
    id: 3,
    title: "HR Analytics Dashboard",
    description:
      "Interactive HR intelligence report with attrition analysis, headcount forecasting, performance distribution, and department KPIs using Power BI.",
    tags: ["Power BI", "Python", "DAX", "SQL"],
    githubUrl: "https://github.com/sahil",
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: "Power BI", level: 92, category: "data" },
  { name: "SQL", level: 88, category: "data" },
  { name: "Excel", level: 90, category: "data" },
  { name: "Python", level: 80, category: "programming" },
  { name: "Data Analysis", level: 88, category: "data" },
  { name: "DAX / M Query", level: 82, category: "data" },
  { name: "GitHub", level: 75, category: "tools" },
  { name: "HTML / CSS / JS", level: 65, category: "web" },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University",
    year: "2024",
  },
  {
    degree: "Diploma in Computer Applications (DCA)",
    institution: "Institute of Computer Science",
    year: "2022",
  },
  {
    degree: "Advanced Diploma in Computer Applications (ADCA)",
    institution: "Institute of Computer Science",
    year: "2023",
  },
];

export const experience: Experience[] = [
  {
    role: "Data Analyst & Recording Line Executive",
    company: "MD Associate",
    duration: "2024 – Present · 1 Year",
    description:
      "Analysed operational data from recording lines to surface process improvements. Built Power BI reports to track production KPIs, reduced reporting time by 40%, and maintained data pipelines using SQL and Excel.",
  },
];

export const certifications: Certification[] = [
  {
    title: "ChatGPT & Generative AI Fundamentals",
    issuer: "OpenAI / Coursera",
    year: "2024",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    year: "2024",
  },
];
