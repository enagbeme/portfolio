export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 Enoch Kumanyenu. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/enoch-kumanyenu"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <button id="scrollToTopBtn" className="scroll-to-top-btn" title="Go to top">
        <i className="fas fa-arrow-up" />
      </button>
    </footer>
  );
}

