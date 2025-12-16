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

      <article className="resume-card">
        <header className="resume-top">
          <div className="resume-ident">
            <h1 className="resume-name">ENOCH KUMANYENU</h1>
            <div className="resume-sub">Entry-level Java Software Engineer</div>
          </div>
          <div className="resume-contact">
            <div>Richmond, VA</div>
            <div>804-572-7877</div>
            <div>enoch.kumanyenu99@yahoo.com</div>
            <div>
              <a href="https://www.linkedin.com/in/enoch-kumanyenu" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/enoch-kumanyenu
              </a>
            </div>
            <div>
              <a href="https://github.com/enagbeme" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme
              </a>
            </div>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="section-title">Summary</h2>
          <ul className="bullets">
            <li>Strong foundations in data structures, algorithms, and OOP.</li>
            <li>Builds RESTful APIs with Spring Boot, JPA/Hibernate, and MySQL/PostgreSQL.</li>
            <li>Experience with authentication, reporting, and microservice-style features.</li>
            <li>Comfortable integrating front-end apps with React/Next.js and TypeScript.</li>
            <li>Collaborative, test-minded, and focused on performance and reliability.</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="chips">
            <span className="chip">Java</span>
            <span className="chip">Python</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">Spring Web</span>
            <span className="chip">Spring Security</span>
            <span className="chip">JPA/Hibernate</span>
            <span className="chip">Thymeleaf</span>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">MySQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Oracle</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Docker</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
            <span className="chip">Agile/Scrum</span>
            <span className="chip">Testing</span>
            <span className="chip">CI/CD</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="item-row">
            <div className="item-main">
              Virginia Commonwealth University — Master of Science in Computer Science
            </div>
            <div className="item-meta">Aug 2024 – Dec 2025 · Richmond, VA</div>
          </div>
          <div className="item-row">
            <div className="item-main">Valley View University — Bachelor of Science in Computer Science</div>
            <div className="item-meta">Sep 2018 – Aug 2022 · Accra, Ghana</div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          <div className="item-row">
            <div className="item-main">Programming Tutor Assistant — Project STEM</div>
            <div className="item-meta">Mar 2025 – Present · New York, USA</div>
          </div>
          <ul className="bullets">
            <li>Guided 30+ students in Java and Python assignments, increasing completion rates by 20%.</li>
            <li>Enhanced an automated grading pipeline, reducing grading time by 30% for 50+ weekly submissions.</li>
          </ul>
          <div className="item-row">
            <div className="item-main">Junior Software Engineer — EFT Corporation</div>
            <div className="item-meta">Aug 2022 – Aug 2023 · Accra, Ghana</div>
          </div>
          <ul className="bullets">
            <li>Designed and optimized MySQL-backed REST APIs using Spring Boot, reducing transaction latency by 40%.</li>
            <li>Integrated Oracle procedures into backend services to improve data consistency and availability.</li>
          </ul>
          <div className="item-row">
            <div className="item-main">IT Support Intern — Valley View University ITS</div>
            <div className="item-meta">Jan 2022 – Mar 2022 · Accra, Ghana</div>
          </div>
          <ul className="bullets">
            <li>Supported database backups and restored critical records during maintenance operations.</li>
            <li>Configured a NAS solution that improved collaboration efficiency by 30% for 50+ users.</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="item-row">
            <div className="item-main">TRYB Clothing — Java 17, Spring Boot 3.5, Thymeleaf, Spring Data JPA, Validation, MySQL/H2</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/tryb_clothing" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/tryb_clothing
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>Streetwear e-commerce app with product browsing, checkout, address management, and order history.</li>
            <li>Views with Thymeleaf; persistence via JPA; H2 dev profile and MySQL default profile.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">Smart Inventory Management System — Java, Spring Boot, MySQL</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/qm_inventory" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/qm_inventory
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>RESTful APIs with layered architecture, inventory logs, orders, and reports.</li>
            <li>Improved transaction efficiency by 40% with secure financial data handling.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">AI-Powered Weight Loss Journey Planner — Python, Streamlit, LangGraph, OpenAI</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/weight_loss_journey" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/weight_loss_journey
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>Personalized daily plans for nutrition and exercise with explainable guidance.</li>
            <li>Adaptive agent behaviors implemented with clean, reproducible workflows.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">Modern Java Swing Ludo Game — Java, Swing, OOP</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/java_ludo_game" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/java_ludo_game
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>Classic Ludo implementation with full 4-player support and turn management.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">Round Robin CPU Scheduling Visualizer — Java, Swing, Algorithms</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/round_robin_algorithm" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/round_robin_algorithm
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>Interactive visualization with configurable quantum and performance metrics.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">Stack ADT Implementation with GUI — Java, Swing, Data Structures</div>
            <div className="item-meta">
              <a href="https://github.com/enagbeme/stackADT" target="_blank" rel="noopener noreferrer">
                github.com/enagbeme/stackADT
              </a>
            </div>
          </div>
          <ul className="bullets">
            <li>Complete Stack ADT with console and GUI visualizations.</li>
          </ul>

          <div className="item-row">
            <div className="item-main">Personal Portfolio Website — Next.js, TypeScript, React, CSS</div>
          </div>
          <ul className="bullets">
            <li>Responsive portfolio with optimized images and a modern UI.</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Keywords</h2>
          <p className="keywords">
            Java, Spring Boot, Spring Web, Spring Security, JPA, Hibernate, REST APIs, Microservices, MySQL, PostgreSQL, Oracle,
            SQLite, MongoDB, SQL, Data Modeling, Transactions, Thymeleaf, React, Next.js, TypeScript, CSS, Docker, Git, Linux,
            CI/CD, Agile, Scrum, Testing, Documentation
          </p>
        </section>
      </article>
    </section>
  );
}
