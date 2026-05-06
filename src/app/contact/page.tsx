export default function ContactPage() {
  const email = "enoch.enagbem@gmail.com";
  const phone = "804-572-7877";
  const linkedin = "https://www.linkedin.com/in/enoch-kumanyenu";
  const github = "https://github.com/enagbeme";

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="accent-line" />
          <h2>Get in Touch</h2>
          <p>
            I&apos;m always open to new opportunities, collaborations, and
            interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card animate-on-scroll">
            <i className="fas fa-envelope" />
            <h3>Email</h3>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>

          <div className="contact-card animate-on-scroll">
            <i className="fas fa-phone-alt" />
            <h3>Phone</h3>
            <p>{phone}</p>
          </div>

          <div className="contact-card animate-on-scroll">
            <i className="fab fa-linkedin" />
            <h3>LinkedIn</h3>
            <p>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </p>
          </div>

          <div className="contact-card animate-on-scroll">
            <i className="fab fa-github" />
            <h3>GitHub</h3>
            <p>
              <a href={github} target="_blank" rel="noopener noreferrer">
                View my repositories
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
