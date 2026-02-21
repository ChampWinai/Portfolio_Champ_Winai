// ══════════════════════════════════════════════════
// Portfolio — Winai Boonyen | Script
// ══════════════════════════════════════════════════

(function () {
  "use strict";

  const scrollBtn = document.getElementById("scrollToTopBtn");
  const header = document.querySelector(".main-header");
  const darkModeBtn = document.getElementById("toggleDarkMode");
  const darkModeIcon = darkModeBtn.querySelector("i");
  const langBtn = document.getElementById("toggleLang");
  const langLabel = langBtn.querySelector(".lang-label");

  // ── Language state ──
  let currentLang = localStorage.getItem("lang") || "th";

  function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-th][data-en]").forEach((el) => {
      el.textContent = el.getAttribute("data-" + lang);
    });
    langLabel.textContent = lang === "th" ? "EN" : "TH";
    localStorage.setItem("lang", lang);
  }

  // Apply saved language on load
  applyLanguage(currentLang);

  langBtn.addEventListener("click", () => {
    applyLanguage(currentLang === "th" ? "en" : "th");
  });

  // ── Scroll to top ──
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ── Scroll handler: sticky header + scroll-to-top visibility ──
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Sticky header
        header.classList.toggle("sticky", scrollY > 50);

        // Scroll-to-top button
        scrollBtn.classList.toggle("show", scrollY > 300);

        // Active nav link
        updateActiveNav();

        ticking = false;
      });
      ticking = true;
    }
  });

  // ── Active nav link based on scroll position ──
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  // ── Dark mode toggle ──
  // Restore saved preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
  }

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      darkModeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      darkModeIcon.classList.replace("fa-sun", "fa-moon");
    }

    localStorage.setItem("darkMode", isDark);
  });

  // ── Intersection Observer: fade-in on scroll ──
  const observerOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards, timeline items, about items, contact cards
  const animTargets = document.querySelectorAll(
    ".portfolio-card, .timeline-item, .about-info-item, .skill-category, .cert-card, .contact-card"
  );

  animTargets.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

  // ── Smooth scroll for nav links ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ── Typing animation for hero role ──
  const typingEl = document.querySelector(".typing-wrapper");
  if (typingEl) {
    // Subtle typing cursor blink is handled by CSS
    // Stop cursor blink after 6 seconds for clean look
    setTimeout(() => {
      typingEl.style.borderRightColor = "transparent";
    }, 6000);
  }
})();
