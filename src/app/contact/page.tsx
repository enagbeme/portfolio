export default function ContactPage() {
  const email = "enoch.kumanyenu99@yahoo.com";
  const phone = "804-572-7877";
  const linkedin = "https://www.linkedin.com/in/enoch-kumanyenu";

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="text-dark">Get in Touch</h2>
        <p>
          I&apos;m always open to new opportunities, collaborations, and interesting
          projects. Feel free to reach out!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope" />
            <h3 className="text-primary">Email</h3>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt" />
            <h3 className="text-primary">Phone</h3>
            <p>{phone}</p>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin" />
            <h3 className="text-primary">LinkedIn</h3>
            <p>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
