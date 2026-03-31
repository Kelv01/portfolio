export type Navlink = {
  id: string;
  name: string;
  href: string;
};

export const navLinks: Navlink[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "about", name: "About", href: "/about" },
  { id: "skills", name: "Skills", href: "/skills" },
  { id: "projects", name: "Projects", href: "/projects" },
  { id: "contact", name: "Contact", href: "/contact" },
];
