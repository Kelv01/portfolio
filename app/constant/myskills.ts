import {
  Code,
  Layout,
  Component,
  Palette,
  GitBranch,
  Database,
  Globe,
  Zap,
  Terminal,
  Wrench,
  Monitor,
  Server,
  GlobeLock,
} from "lucide-react";

export const mySkills = [
  {
    category: "Frontend",
    icon: Monitor,
    skills: [
      { name: "HTML & CSS", icon: Code },
      { name: "JavaScript / Typescript", icon: Zap },
      { name: "React & Next.Js", icon: Component },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "API Integration", icon: Globe },
      { name: "NodeJs $ Express", icon: GlobeLock },
      { name: "MongoDB (Learning)", icon: Database },
      { name: "Fullstack Development (In Progress)", icon: Code },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Layout },
      { name: "Linux", icon: Terminal },
      { name: "Developer Tooling", icon: Wrench },
    ],
  },
];

// { name: "Next.js (App Router)", icon: Globe },
//
// { name: "Responsive Design", icon: Layout },
// { name: "shadcn/ui", icon: Component },
// { name: "Frontend Architecture", icon: Layout },
