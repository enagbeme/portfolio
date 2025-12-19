import Image from "next/image";

export default function Home() {
  const fullName = "Enoch Kumanyenu";
  const title = "Software Engineer / AI & Backend Developer";
  const location = "Richmond, VA";
  const whoAmI =
    "I am a passionate software engineer originally from Ghana, now living in Richmond, VA. I started programming five years ago and specialize in Java, JavaScript, Python, Spring Boot, and AI development."+
    " My journey into tech began with a curiosity for how things work and has evolved into a deep commitment to building solutions that are both impactful and elegant." + 
    " Professionally, I have worked on a variety of personal projects, such as a Smart Inventory Management System that streamlines tracking with predictive analytics," +
    " and a Weight Loss Mentor AI that provides personalized health coaching. These experiences have cemented my love for translating complex, real world problems into efficient, scalable software."+
    " Today, my primary focus is on designing reliable, high performance backend services and crafting clean, well documented APIs. I leverage Java, Python, and JavaScript to deliver fast, secure, and" + 
    " accessible experiences on the web. I care deeply about the entire software lifecycle emphasizing code quality, comprehensive testing, system performance, and deploying with confidence using tools like Docker and robust CI/CD pipelines." +
    " I am also actively exploring the practical applications of AI, building intelligent assistants and developer tools that enhance productivity, automate workflows, and make technology more intuitive. I believe AI should be a practical force multiplier, empowering people rather than replacing them." +
    " Outside of coding, I stay balanced and inspired by playing soccer, which teaches teamwork and resilience, and through photography, which trains my eye for detail and composition. These passions help me maintain creativity, focus, and motivation, both at the keyboard and beyond." +
    " I am always eager to connect, collaborate, and contribute to meaningful projects that challenge me to grow and create positive value.";

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
    {
      role: "Programming Tutor Assistant",
      company: "Project STEM",
      location: "New York, USA",
      period: "Mar 2025 – Present",
      bullets: [
        "Guided 30+ students in Java and Python, improving completion rates by 20%",
        "Maintained and enhanced automated grading system, reducing grading time by 30% for 50+ weekly submissions",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "EFT Corporation",
      location: "Accra, Ghana",
      period: "Aug 2022 – Aug 2023",
      bullets: [
        "Designed and optimized MySQL-backed REST APIs with Spring Boot, reducing transaction latency by 40%",
        "Integrated Oracle procedures into backend services, ensuring high availability and data consistency",
      ],
    },
    {
      role: "IT Support Associate",
      company: "Valley View University ITS",
      location: "Accra, Ghana",
      period: "Jan 2022 – Mar 2022",
      bullets: [
        "Supported database backups and restored critical records during maintenance operations",
        "Configured a NAS box to optimize data sharing, increasing collaboration efficiency by 30% for 50+ users",
      ],
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <Image
              src="/profile4.png"
              alt={fullName}
              width={200}
              height={200}
              className="profile-pic"
              priority
            />
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
              <li key={idx} className="work-item">
                <div className="work-header">
                  <h3 className="work-role">{exp.role}</h3>
                  <div className="work-meta">
                    {exp.company} · {exp.location} · {exp.period}
                  </div>
                </div>
                <ul className="work-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
