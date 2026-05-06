import Image from "next/image";

export default function Home() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Virginia Commonwealth University",
      location: "Richmond, VA",
      period: "Aug 2024 – Dec 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Valley View University",
      location: "Accra, Ghana",
      period: "Sep 2018 – Aug 2022",
    },
  ];

  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Coursera / Google",
      status: "Expected May 2026",
      icon: "fab fa-google",
    },
    {
      name: "Introduction to Networking",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      icon: "fas fa-network-wired",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      icon: "fas fa-shield-alt",
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: ["Java", "Python", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "Frameworks & APIs",
      icon: "fas fa-layer-group",
      skills: [
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Security",
      icon: "fas fa-shield-alt",
      skills: [
        "Secure Coding",
        "Authentication / Authorization",
        "Vulnerability Awareness",
        "SOC 2 / ISO 27001 / HIPAA (conceptual)",
      ],
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-tools",
      skills: [
        "Docker",
        "AWS (EC2, S3, Lambda)",
        "CI/CD",
        "Git",
        "JIRA",
        "Linux",
        "Postman",
      ],
    },
  ];

  const workExperience = [
    {
      role: "Programming Tutor Assistant",
      company: "Project STEM",
      location: "New York, USA",
      period: "Mar 2025 – Present",
      bullets: [
        "Mentored 30+ students in Java and Python, improving assignment completion rates by 20%",
        "Optimized Python-based automated grading system, reducing grading time by 30%",
      ],
    },
    {
      role: "Freelance Software Developer",
      company: "Self-Employed",
      location: "Richmond, VA",
      period: "Sep 2023 – Aug 2024",
      bullets: [
        "Built Java/Spring Boot backend services with RESTful APIs for small business clients",
        "Implemented secure CRUD operations, input validation, and exception handling",
        "Optimized MySQL/PostgreSQL schemas, improving query response times by 25%",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "EFT Corporation",
      location: "Accra, Ghana",
      period: "Aug 2022 – Aug 2023",
      bullets: [
        "Developed Spring Boot REST APIs with MySQL, reducing transaction latency by 40%",
        "Ensured 99.9% data consistency across financial systems",
        "Collaborated in Agile teams using CI/CD pipelines for continuous delivery",
      ],
    },
    {
      role: "IT Support Associate",
      company: "Valley View University ITS",
      location: "Accra, Ghana",
      period: "Jan 2022 – Mar 2022",
      bullets: [
        "Managed database backups, recovery operations, and NAS setup for 50+ users",
        "Maintained 100% uptime for critical academic tools during semester operations",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <Image
              src="/profile4.png"
              alt="Enoch Kumanyenu"
              width={160}
              height={160}
              className="profile-pic"
              priority
            />
            <div className="hero-badge">
              <span className="dot" />
              Open to opportunities &middot; Permanent Resident — No Sponsorship Required
            </div>
            <h1>
              Hi, I&apos;m <span className="gradient-text">Enoch</span>
            </h1>
            <p className="lead">Software Engineer & Security-Focused Developer</p>
            <p className="location">
              <i className="fas fa-map-marker-alt" /> Richmond, VA
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">
                <i className="fas fa-briefcase" /> View My Work
              </a>
              <a href="/contact" className="btn btn-outline">
                <i className="fas fa-paper-plane" /> Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-me section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="accent-line" />
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-text animate-on-scroll">
              <p>
                Detail-oriented Computer Science graduate (M.S., VCU) with a
                strong foundation in information security, backend development,
                and technical documentation. Experienced in building secure,
                scalable systems using Java, Python, and cloud infrastructure.
                Actively pursuing Google Cybersecurity Certificate (May 2026).
                Authorized to work in the US — no sponsorship required.
              </p>
              <p>
                My primary focus is on designing reliable, high-performance
                backend services and crafting clean, well-documented APIs. I
                care deeply about the entire software lifecycle, emphasizing
                secure coding practices, code quality, system performance, and
                deploying with confidence using Docker and CI/CD pipelines. I am
                also actively expanding my knowledge in information security,
                compliance frameworks, and cloud infrastructure.
              </p>
              <p>
                Originally from Ghana, now based in Richmond, VA. Outside of
                coding, I stay balanced and inspired by playing soccer and
                through photography, which trains my eye for detail and
                composition. I am always eager to connect, collaborate, and
                contribute to meaningful projects.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-bar animate-on-scroll">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">M.S.</span>
              <span className="stat-label">Computer Science</span>
            </div>
          </div>

          {/* Education */}
          <div className="section-header animate-on-scroll">
            <div className="accent-line" />
            <h2>Education</h2>
          </div>
          <div className="education-grid animate-on-scroll">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="degree">{edu.degree}</div>
                <div className="school">{edu.school}</div>
                <div className="period">
                  <i className="fas fa-calendar-alt" /> {edu.period} &middot;{" "}
                  {edu.location}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="section-header animate-on-scroll">
            <div className="accent-line" />
            <h2>Certifications</h2>
          </div>
          <div className="education-grid animate-on-scroll">
            {certifications.map((cert, idx) => (
              <div key={idx} className="edu-card">
                <div className="degree">
                  <i className={cert.icon} style={{ marginRight: 8 }} />
                  {cert.name}
                </div>
                <div className="school">{cert.issuer}</div>
                <div className="period">
                  <i className="fas fa-certificate" /> {cert.status}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="section-header animate-on-scroll">
            <div className="accent-line" />
            <h2>Skills</h2>
          </div>
          <div className="skills-grid animate-on-scroll">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-category">
                <div className="skill-category-title">
                  <i className={cat.icon} /> {cat.title}
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="section-header animate-on-scroll">
            <div className="accent-line" />
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="exp-card animate-on-scroll">
                <div className="exp-header">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-company">
                  {exp.company} &middot; {exp.location}
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
