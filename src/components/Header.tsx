"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">
            EE
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

