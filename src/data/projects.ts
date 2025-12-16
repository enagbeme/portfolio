export type Project = {
  title: string;
  description: string;
  technologiesUsed: string;
  githubLink: string;
  demoLink: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Inventory Management System",
    description:
      "Developed and deployed RESTful APIs with Spring Boot and microservices architecture, improving transaction efficiency by 40% and ensuring secure financial data handling.",
    technologiesUsed: "Java, Spring Boot, MySQL",
    githubLink: "https://github.com/enagbeme/qm_inventory.git",
    demoLink: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This repository contains my personal portfolio website, showcasing my skills, education, work experience, and projects. The website is built using Next.js with TypeScript, providing a modern and performant user experience.",
    technologiesUsed: "Next.js, TypeScript, React, CSS",
    githubLink: "https://github.com/enochkumanyenu/portfolio-website",
    demoLink: "#",
  },
  {
    title: "AI-Powered Weight Loss Journey Planner",
    description:
      "This intelligent assistant helps you achieve your weight loss goals through AI-generated personalized daily nutrition, exercise, and habit plans, progress tracking, explainable AI, and adaptive guidance.",
    technologiesUsed: "Python, Streamlit, LangGraph, OpenAI GPT-4o",
    githubLink: "https://github.com/enagbeme/weight_loss_journey.git",
    demoLink: "#",
  },
  {
    title: "Modern Java Swing Ludo Game",
    description:
      "A modern Java Swing implementation of the classic Ludo board game with complete 4-player support, interactive dice rolling, and turn management system.",
    technologiesUsed: "Java, Swing, OOP",
    githubLink: "https://github.com/enagbeme/java_ludo_game.git",
    demoLink: "#",
  },
  {
    title: "Round Robin CPU Scheduling Visualizer",
    description:
      "A Java Swing application that visually demonstrates the Round Robin CPU scheduling algorithm with interactive GUI and performance metrics.",
    technologiesUsed: "Java, Swing, Algorithms",
    githubLink: "https://github.com/enagbeme/round_robin_algorithm.git",
    demoLink: "#",
  },
  {
    title: "Stack ADT Implementation with GUI",
    description:
      "Comprehensive Java implementation of Stack Abstract Data Type with both console-based and graphical user interface visualizations.",
    technologiesUsed: "Java, Swing, Data Structures",
    githubLink: "https://github.com/enagbeme/stackADT.git",
    demoLink: "#",
  },
  {
    title: "Expense Tracker Mobile App",
    description:
      "Designed an Android app with SQLite database integration for managing and visualizing expenses, improving budgeting accuracy.",
    technologiesUsed: "Java (Android), SQLite",
    githubLink: "https://github.com/enagbeme/expense_tracker.git",
    demoLink: "#",
  },
  {
    title: "Criminal Facial Recognition System",
    description:
      "Built a system to identify suspects using facial data, achieving 85%+ accuracy in test cases with OpenCV.",
    technologiesUsed: "Python, Java, OpenCV, MySQL",
    githubLink: "#",
    demoLink: "#",
  }
];

