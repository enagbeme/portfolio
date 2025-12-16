"use client";
import Link from "next/link";

export default function ResumePage() {
  const onPrint = () => {
    window.print();
  };

  return (
    <section className="container resume">
      <div className="resume-actions">
        <button className="btn bg-primary text-white" onClick={onPrint}>
          Download PDF
        </button>
        <a className="btn bg-secondary text-white" href="/resume_enoch_kumanyenu.txt" download>
          Download TXT
        </a>
        <Link className="btn bg-dark text-white" href="/">
          Back Home
        </Link>
      </div>

      <header className="resume-header">
        <h1>ENOCH KUMANYENU</h1>
        <p>Richmond, VA · 804-572-7877 · enoch.kumanyenu99@yahoo.com</p>
        <p>
          <a href="https://www.linkedin.com/in/enoch-kumanyenu" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/enoch-kumanyenu
          </a>{" "}
          ·{" "}
          <a href="https://github.com/enagbeme" target="_blank" rel="noopener noreferrer">
            github.com/enagbeme
          </a>
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <ul>
          <li>Entry-level Java Software Engineer with strong CS foundations in data structures, algorithms, and OOP.</li>
          <li>Builds backend services and RESTful APIs with Spring Boot, JPA/Hibernate, and MySQL/PostgreSQL.</li>
          <li>Hands-on experience delivering microservice-style features, secure authentication, and reporting.</li>
          <li>Comfortable with front-end integration (React/Next.js, TypeScript) and practical AI assistants (Python).</li>
          <li>Collaborative, test-minded, and focused on performance, reliability, and maintainability.</li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>
          Languages: Java, Python, JavaScript/TypeScript, SQL, Bash · Frameworks: Spring Boot, Spring Web, Spring Security,
          Spring Data JPA, Thymeleaf, React, Next.js · Databases: MySQL, PostgreSQL, Oracle, SQLite, MongoDB · Tools: Git,
          Docker, Linux, JIRA · Practices: REST APIs, OOP, microservices, testing, CI/CD, Agile/Scrum, documentation
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>Virginia Commonwealth University — Master of Science in Computer Science (Aug 2024 – Dec 2025), Richmond, VA</li>
          <li>Valley View University — Bachelor of Science in Computer Science (Sep 2018 – Aug 2022), Accra, Ghana</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Programming Tutor Assistant — Project STEM, New York, USA (Mar 2025 – Present)</h3>
        <ul>
          <li>Guided 30+ students in Java and Python assignments, increasing completion rates by 20%.</li>
          <li>Maintained and enhanced an automated grading pipeline, reducing grading time by 30% for 50+ weekly submissions.</li>
        </ul>
        <h3>Junior Software Engineer — EFT Corporation, Accra, Ghana (Aug 2022 – Aug 2023)</h3>
        <ul>
          <li>Designed and optimized MySQL-backed REST APIs using Spring Boot, reducing transaction latency by 40%.</li>
          <li>Integrated Oracle procedures into backend services to improve data consistency and availability.</li>
          <li>Contributed to Agile sprints, code reviews, debugging, and release preparation.</li>
        </ul>
        <h3>IT Support Intern — Valley View University ITS, Accra, Ghana (Jan 2022 – Mar 2022)</h3>
        <ul>
          <li>Supported database backups and restored critical records during maintenance operations.</li>
          <li>Configured a NAS solution that improved collaboration efficiency by 30% for 50+ users.</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <h3>TRYB Clothing — Java 17, Spring Boot 3.5, Thymeleaf, Spring Data JPA, Validation, MySQL/H2</h3>
        <ul>
          <li>Streetwear e-commerce app with product browsing, checkout (guest/registered), address management, and order history.</li>
          <li>Views with Thymeleaf; persistence via JPA; H2 dev profile and MySQL default profile.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/tryb_clothing" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/tryb_clothing
            </a>
          </li>
        </ul>

        <h3>Smart Inventory Management System — Java, Spring Boot, MySQL</h3>
        <ul>
          <li>RESTful APIs with layered architecture, inventory logs, orders, and reports.</li>
          <li>Improved transaction efficiency by 40% and strengthened secure financial data handling.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/qm_inventory" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/qm_inventory
            </a>
          </li>
        </ul>

        <h3>AI-Powered Weight Loss Journey Planner — Python, Streamlit, LangGraph, OpenAI</h3>
        <ul>
          <li>Personalized daily plans for nutrition/exercise; progress tracking and explainable guidance.</li>
          <li>Adaptive agent behaviors with reproducible workflows and clean UI.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/weight_loss_journey" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/weight_loss_journey
            </a>
          </li>
        </ul>

        <h3>Modern Java Swing Ludo Game — Java, Swing, OOP</h3>
        <ul>
          <li>Classic Ludo implementation with full 4-player support, interactive dice and turn management.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/java_ludo_game" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/java_ludo_game
            </a>
          </li>
        </ul>

        <h3>Round Robin CPU Scheduling Visualizer — Java, Swing, Algorithms</h3>
        <ul>
          <li>Interactive visualization of Round Robin scheduling with configurable quantum and metrics.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/round_robin_algorithm" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/round_robin_algorithm
            </a>
          </li>
        </ul>

        <h3>Stack ADT Implementation with GUI — Java, Swing, Data Structures</h3>
        <ul>
          <li>Complete Stack ADT with console and GUI visualizations; demonstrates core DS operations and error handling.</li>
          <li>
            Repo:{" "}
            <a href="https://github.com/enagbeme/stackADT" target="_blank" rel="noopener noreferrer">
              github.com/enagbeme/stackADT
            </a>
          </li>
        </ul>

        <h3>Personal Portfolio Website — Next.js, TypeScript, React, CSS</h3>
        <ul>
          <li>Portfolio showcasing education, skills, work experience, and projects with optimized images and responsive UI.</li>
        </ul>
      </section>

      <section>
        <h2>Keywords</h2>
        <p>
          Java, Spring Boot, Spring Web, Spring Security, JPA, Hibernate, REST APIs, Microservices, MySQL, PostgreSQL, Oracle,
          SQLite, MongoDB, SQL, Data Modeling, Transactions, Thymeleaf, React, Next.js, TypeScript, CSS, Docker, Git, Linux, CI/CD,
          Agile, Scrum, Testing, Documentation
        </p>
      </section>
    </section>
  );
}
