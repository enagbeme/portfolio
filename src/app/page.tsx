export default function Home() {
  const fullName = "Enoch Kumanyenu";
  const title = "Software Engineer / AI & Backend Developer";
  const location = "Richmond, VA";
  const whoAmI =
    "I am a passionate software engineer originally from Ghana, now living in Richmond, VA. " +
    "I started programming five years ago and specialize in Java, JavaScript, Python, Spring Boot, and AI development. " +
    "I love building personal projects like a Smart Inventory Management System, a Weight Loss Mentor AI, an Expense Tracker Mobile App, " +
    "and a Criminal Facial Recognition System. I enjoy solving real-world problems through software and mentoring others in programming and AI concepts. " +
    "Outside of coding, I enjoy playing soccer and photography, which help me stay creative and motivated.";

  const education = [
    "Virginia Commonwealth University - Master of Science in Computer Science (Aug 2024- Dec 2025) Richmond, VA",
    "Valley View University - Bachelor of Science in Computer Science (Sep 2018- Aug 2022) Accra, Ghana",
  ];

  const skills = [
    "Programming Languages: Java, Python, JavaScript, SQL/PL, Bash",
    "Frameworks & Concepts: Spring Boot, REST APIs, Object-Oriented Programming, Data Structures",
    "Databases: MySQL, PostgreSQL, Oracle, MongoDB",
    "Tools: Git, Docker, Linux, JIRA",
  ];

  const workExperience = [
    "Programming Tutor Assistant - Project STEM- New York, USA (Mar 2025-Present)<br/>" +
      "Guided 30+ students with Java and Python assignments, improving project completion rates by 20%.<br/>" +
      "Maintained and enhanced an automated grading system, reducing grading time by 30% and improving accuracy for 50+ submissions weekly.",
    "Junior Software Engineer - EFT Corporation- Accra, Ghana (Aug 2022- Aug 2023)<br/>" +
      "Designed and optimized MySQL-backed REST APIs using Spring Boot, reducing transaction latency by 40%.<br/>" +
      "Collaborated on integrating Oracle database procedures into backend services, ensuring high availability and data consistency.",
    "IT Support Associate - Valley View University ITS- Accra, Ghana (Jan 2022- Mar 2022)<br/>" +
      "Supported database backups and restored critical records during maintenance operations.<br/>" +
      "Facilitated the team’s efforts in configuring a NAS box, optimizing data-sharing and increasing collaboration efficiency by 30% for over 50 users at the university.",
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{fullName}</h1>
            <p className="lead">{title}</p>
            <p className="location">{location}</p>
            <a href="/projects" className="btn bg-primary text-white">
              View My Work
            </a>
            <a href="/contact" className="btn bg-secondary text-white">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-me">
        <div className="container">
          <h2 className="text-dark">Who I Am</h2>
          <p>{whoAmI}</p>

          <h2 className="text-dark">Education</h2>
          <ul className="education-list">
            {education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>

          <h2 className="text-dark">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>

          <h2 className="text-dark">Work Experience</h2>
          <ul className="work-experience-list">
            {workExperience.map((exp, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: exp }} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
