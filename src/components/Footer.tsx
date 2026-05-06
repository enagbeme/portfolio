export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Enoch Kumanyenu. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/enoch-kumanyenu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/enagbeme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:enoch.enagbem@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <button id="scrollToTopBtn" className="scroll-to-top-btn" title="Go to top">
        <i className="fas fa-arrow-up" />
      </button>
    </footer>
  );
}
