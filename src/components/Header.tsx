"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [mobileOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">
            <span className="logo-text">EK</span>
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/enagbeme"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
                style={{ marginLeft: 8 }}
              >
                <i className="fab fa-github" /> GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
