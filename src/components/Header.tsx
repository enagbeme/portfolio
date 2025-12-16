"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [mobileOpen]);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">
            EE
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

