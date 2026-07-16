export const projects = [
  {
    title: "Ahmed Paint Traders",
    category: "Business Website",
    img: "/asset/project/ahmedpaint.png",
    description:
      "A fully responsive React website for a local paint shop with product showcase and WhatsApp inquiry integration. Built with React and Tailwind CSS, deployed on Hostinger.",
    tech: ["React", "Tailwind CSS", "WhatsApp API"],
    link: "https://ahmedpainttraders.in/",
    featured: true,
  },
  {
    title: "Natarajan & Co",
    category: "Business Website",
    img: "/asset/project/natarajan_and_co.png",
    description:
      "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design. Deployed on Hostinger.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://natarajanandco.com/",
    featured: true,
  },
  {
    title: "MSK Solution",
    category: "Business Website",
    img: "/asset/project/msk_solution.png",
    description:
      "A modern business website featuring responsive design, service highlights, company information, and an intuitive user experience optimized for all devices.",
    tech: ["React", "Tailwind CSS"],
    link: "https://msksolution.in/",
    featured: false,
  },
  {
    title: "Aqeel Traders",
    category: "Business Website",
    img: "/asset/project/aqeel_traders.png",
    description:
      "A professional business website for a building materials supplier, showcasing products, company details, contact information, and a fully responsive modern interface.",
    tech: ["React", "Tailwind CSS"],
    link: "https://aqeeltraders.com/",
    featured: false,
  },
  {
    title: "Smart Resume Screening & Interview Scheduling",
    category: "Web App",
    img: "/asset/project/hr_desk.png",
    description:
      "An automated web app for screening resumes and scheduling interviews, built with React.js and Node.js, with process automation powered by UiPath.",
    tech: ["React", "Node.js", "UiPath"],
    link: "https://hrdesktop.netlify.app/",
    featured: true,
  },
  {
    title: "Melody Photography — Karaikudi",
    category: "Portfolio",
    img: "/asset/project/melody.png",
    description:
      "A visually elegant portfolio site for a local photography studio, showcasing services, photo galleries, and client contact options. Deployed on Netlify.",
    tech: ["React", "Tailwind CSS"],
    link: "https://melodyphotographyps.netlify.app/",
    featured: false,
  },
  {
    title: "VS Traders — Karaikudi",
    category: "Business Website",
    img: "/asset/project/vs_traders.png",
    description:
      "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design.",
    tech: ["React", "Tailwind CSS"],
    link: "https://vstraders.netlify.app/",
    featured: false,
  },
  {
    title: "Dark Mode Portfolio",
    category: "Portfolio",
    img: "/asset/landpage-2.png",
    description:
      "An earlier personal portfolio built using React and Tailwind CSS with a dark mode toggle and modern UI components.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/vgssanjayboss/portfolio-darkmode",
    featured: false,
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
