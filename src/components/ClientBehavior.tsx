"use client";
import { useEffect } from "react";

export default function ClientBehavior() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("header");
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");

      if (header) {
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }

      if (scrollToTopBtn) {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
      }
    };

    const onClickTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("scroll", onScroll);
    const btn = document.getElementById("scrollToTopBtn");
    btn?.addEventListener("click", onClickTop);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      btn?.removeEventListener("click", onClickTop);
      observer.disconnect();
    };
  }, []);

  return null;
}
