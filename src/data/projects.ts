export type Project = {
  title: string;
  description: string;
  technologiesUsed: string;
  githubLink: string;
  demoLink: string;
};

export const projects: Project[] = [
  {
    title: "Smart Inventory Management System",
    description:
      "Developed and deployed RESTful APIs with Spring Boot and microservices architecture, improving transaction efficiency by 40% and ensuring secure financial data handling.",
    technologiesUsed: "Java, Spring Boot, MySQL",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Expense Tracker Mobile App",
    description:
      "Designed an Android app with SQLite database integration for managing and visualizing expenses, improving budgeting accuracy.",
    technologiesUsed: "Java (Android), SQLite",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Criminal Facial Recognition System",
    description:
      "Built a system to identify suspects using facial data, achieving 85%+ accuracy in test cases with OpenCV.",
    technologiesUsed: "Python, Java, OpenCV, MySQL",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Spring Boot and Thymeleaf.",
    technologiesUsed: "Java, Spring Boot, Thymeleaf, HTML, CSS",
    githubLink: "https://github.com/enochkumanyenu/portfolio-website",
    demoLink: "#",
  },
  {
    title: "AI-Powered Weight Loss Journey Planner",
    description:
      "This intelligent assistant helps you achieve your weight loss goals through AI-generated personalized daily nutrition, exercise, and habit plans, progress tracking, explainable AI, and adaptive guidance.",
    technologiesUsed: "Python, Streamlit, LangGraph, OpenAI GPT-4o",
    githubLink: "#",
    demoLink: "#",
  },
];

