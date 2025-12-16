export type Project = {
  title: string;
  description: string;
  technologiesUsed: string;
  githubLink: string;
  demoLink: string;
  image?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "Smart Inventory Management System",
    description:
      "Developed and deployed RESTful APIs with Spring Boot and microservices architecture, improving transaction efficiency by 40% and ensuring secure financial data handling.",
    technologiesUsed: "Java, Spring Boot, MySQL",
    githubLink: "https://github.com/enagbeme/qm_inventory.git",
    demoLink: "#",
    image: "/projects/qm_dashboard.png",
    images: [
      "/projects/qm_dashboard.png",
      "/projects/qm_products.png",
      "/projects/categories.png",
      "/projects/orders.png",
      "/projects/order_details.png",
      "/projects/login.png",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This repository contains my personal portfolio website, showcasing my skills, education, work experience, and projects. The website is built using Next.js with TypeScript, providing a modern and performant user experience.",
    technologiesUsed: "Next.js, TypeScript, React, CSS",
    githubLink: "https://github.com/enochkumanyenu/portfolio-website",
    demoLink: "#",
    image: "/projects/portfolio_1.png",
    images: [
      "/projects/portfolio_1.png",
      "/projects/portfolio_2.png",
      "/projects/portfolio_3.png",
      "/projects/portfolio_4.png",
      "/projects/portfolio_5.png",
      "/projects/portfolio_6.png"
    ],
  },
  {
    title: "AI-Powered Weight Loss Journey Planner",
    description:
      "This intelligent assistant helps you achieve your weight loss goals through AI-generated personalized daily nutrition, exercise, and habit plans, progress tracking, explainable AI, and adaptive guidance.",
    technologiesUsed: "Python, Streamlit, LangGraph, OpenAI GPT-4o",
    githubLink: "https://github.com/enagbeme/weight_loss_journey.git",
    demoLink: "#",
    image: "/projects/weight_loss_AI.png",
    images: [
      "/projects/weight_loss_AI.png",
      "/projects/weight_loss_AI.png_2.png",
      "/projects/weight_loss_AI.png_3.png",
      "/projects/weight_loss_AI.png_4.png",
      "/projects/weight_loss_AI.png_5.png",
      "/projects/weight_loss_AI.png_6.png"
    ],
  },
  {
    title: "Modern Java Swing Ludo Game",
    description:
      "A modern Java Swing implementation of the classic Ludo board game with complete 4-player support, interactive dice rolling, and turn management system.",
    technologiesUsed: "Java, Swing, OOP",
    githubLink: "https://github.com/enagbeme/java_ludo_game.git",
    demoLink: "#",
    image: "/projects/ludo_game.png",
    images: [
      "/projects/ludo_game.png",
      "/projects/ludo_game_2.png"
    ],
  },
  {
    title: "Round Robin CPU Scheduling Visualizer",
    description:
      "A Java Swing application that visually demonstrates the Round Robin CPU scheduling algorithm with interactive GUI and performance metrics.",
    technologiesUsed: "Java, Swing, Algorithms",
    githubLink: "https://github.com/enagbeme/round_robin_algorithm.git",
    demoLink: "#",
    image: "/projects/round_robin.png",
    images: ["/projects/round_robin.png"],
  },
  {
    title: "Stack ADT Implementation with GUI",
    description:
      "Comprehensive Java implementation of Stack Abstract Data Type with both console-based and graphical user interface visualizations.",
    technologiesUsed: "Java, Swing, Data Structures",
    githubLink: "https://github.com/enagbeme/stackADT.git",
    demoLink: "#",
    image: "/projects/stack_1.png",
    images: [
      "/projects/stack_1.png",
      "/projects/stack_2.png",
      "/projects/stack_3.png"
    ],
  },
  {
    title: "Expense Tracker Mobile App",
    description:
      "Designed an Android app with SQLite database integration for managing and visualizing expenses, improving budgeting accuracy.",
    technologiesUsed: "Java (Android), SQLite",
    githubLink: "https://github.com/enagbeme/expense_tracker.git",
    demoLink: "#",
    image: "/projects/expense.svg",
    images: ["/projects/expense.svg"],
  },
  {
    title: "Criminal Facial Recognition System",
    description:
      "Built a system to identify suspects using facial data, achieving 85%+ accuracy in test cases with OpenCV.",
    technologiesUsed: "Python, Java, OpenCV, MySQL",
    githubLink: "#",
    demoLink: "#",
    image: "/projects/facial.svg",
    images: ["/projects/facial.svg"],
  }
];

