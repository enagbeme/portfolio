"use client";
import { useEffect } from "react";

export default function ClientBehavior() {
  useEffect(() => {
    const onScrollHeader = () => {
      const header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    const onScrollTopBtn = () => {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (!scrollToTopBtn) return;
      if (window.scrollY > 300) scrollToTopBtn.style.display = "block";
      else scrollToTopBtn.style.display = "none";
    };

    const onClickTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", onScrollHeader);
    window.addEventListener("scroll", onScrollTopBtn);

    const btn = document.getElementById("scrollToTopBtn");
    btn?.addEventListener("click", onClickTop);

    onScrollHeader();
    onScrollTopBtn();

    return () => {
      window.removeEventListener("scroll", onScrollHeader);
      window.removeEventListener("scroll", onScrollTopBtn);
      btn?.removeEventListener("click", onClickTop);
    };
  }, []);

  return null;
}

