import { PROFILE } from "../models/profile.model.js";
import { SKILLS } from "../models/skills.model.js";
import { PROJECTS } from "../models/projects.model.js";
import { CERTIFICATES } from "../models/certificates.model.js";

import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderHero } from "../views/hero.view.js";
import { renderAbout } from "../views/about.view.js";
import { renderMarquee } from "../views/marquee.view.js";
import { renderSkills } from "../views/skills.view.js";
import { renderContact } from "../views/contact.view.js";
import { renderCertificatesGrid } from "../views/certificates.view.js";
import { renderProjectsGrid, initCarousels } from "../views/projects.view.js";

import { initContactForm } from "./contact.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. RENDER ALL SECTIONS
  document.getElementById("nav-root").innerHTML = renderNav("home");
  document.getElementById("hero-root").innerHTML = renderHero(PROFILE);
  document.getElementById("about-root").innerHTML = renderAbout(PROFILE);
  document.getElementById("marquee-root").innerHTML = renderMarquee(SKILLS);

  // 2. CERTIFICATES SECTION (Experience Replacer matching iqmal.dev)
  document.getElementById("certificates-preview-root").innerHTML = `
    <section id="certificates" class="relative z-20 px-6 py-24 sm:px-10 sm:py-32 lg:px-20 bg-[#09090b] border-t border-white/10 overflow-hidden">
      <!-- Watermark -->
      <div class="section-watermark text-[clamp(4.5rem,15vw,15rem)] top-10">
        CERTIFICATES
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/45 mb-2">Credentials Archive</p>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
              Certificates & Licenses
            </h2>
          </div>
          <a href="certificates.html" class="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors">
            <span>View All Certificates (${CERTIFICATES.length})</span>
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <!-- Cards List (Top 3 for Homepage) -->
        ${renderCertificatesGrid(CERTIFICATES, { visibleCount: 3 })}
      </div>
    </section>`;

  // 3. PROJECTS SECTION (Showcase matching iqmal.dev)
  document.getElementById("projects-preview-root").innerHTML = `
    <section id="projects" class="relative z-20 px-6 py-24 sm:px-10 sm:py-32 lg:px-20 bg-[#09090b] border-t border-white/10 overflow-hidden">
      <!-- Watermark -->
      <div class="section-watermark text-[clamp(5rem,17vw,17rem)] top-10">
        PROJECTS
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/45 mb-2">Portfolio Showcase</p>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
              Selected Projects
            </h2>
          </div>
          <a href="projects.html" class="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors">
            <span>View All Projects (${PROJECTS.length})</span>
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>

        <!-- Projects List (Top 3 for Homepage) -->
        ${renderProjectsGrid(PROJECTS.slice(0, 3))}
      </div>
    </section>`;

  document.getElementById("skills-root").innerHTML = renderSkills(SKILLS);
  document.getElementById("contact-root").innerHTML = renderContact(PROFILE);
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Contact Form
  initContactForm(PROFILE.formEndpoint);

  // Initialize Mobile Project Carousels
  initCarousels();

  // 4. LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 4b. HANDLE NAVIGATION FROM SUB-PAGES VIA SESSIONSTORAGE
  const scrollTarget = sessionStorage.getItem("scrollToSection");
  if (scrollTarget) {
    sessionStorage.removeItem("scrollToSection");
    // Tunggu sebentar agar layout selesai render
    setTimeout(() => {
      const targetEl = document.getElementById(scrollTarget);
      if (targetEl) {
        if (lenis) {
          lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 300);
  }

  // 5. GSAP SCROLL ANIMATIONS
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Reveal About Description (muncul saat scroll ke bawah, hilang saat scroll ke atas)
    const aboutDesc = document.getElementById("about-description");
    if (aboutDesc) {
      gsap.from(aboutDesc, {
        scrollTrigger: {
          trigger: aboutDesc,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 45,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out"
      });
    }

    // Reveal Certificates Cards
    gsap.utils.toArray(".certificate-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Reveal Project Showcase Cards
    gsap.utils.toArray(".project-showcase-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }

  // 6. HERO INTERACTIVE DUAL-PHOTO SPOTLIGHT REVEAL (Monokrom -> Berwarna saat didekati kursor)
  const profileCardMedia = document.getElementById("profile-card-media");
  const spotlightColorImg = document.getElementById("spotlight-color-img");

  if (profileCardMedia && spotlightColorImg) {
    let mouseInside = false;

    profileCardMedia.addEventListener("mouseenter", (e) => {
      mouseInside = true;
      spotlightColorImg.style.setProperty("--spotlight-r", "170px");
      spotlightColorImg.style.opacity = "1";
    });

    profileCardMedia.addEventListener("mousemove", (e) => {
      const rect = profileCardMedia.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update spotlight position
      spotlightColorImg.style.setProperty("--spotlight-x", `${x}px`);
      spotlightColorImg.style.setProperty("--spotlight-y", `${y}px`);
      spotlightColorImg.style.setProperty("--spotlight-r", "170px");

      // Subtle 3D card tilt
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      profileCardMedia.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    profileCardMedia.addEventListener("mouseleave", () => {
      mouseInside = false;
      spotlightColorImg.style.setProperty("--spotlight-r", "0px");
      profileCardMedia.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }

  // 7. HERO ROLE TYPEWRITER ANIMATION
  const typewriterRoleEl = document.getElementById("typewriter-role");
  if (typewriterRoleEl) {
    const roles = [
      "Full-Stack & Mobile Developer",
      "Flutter & Dart Specialist",
      "Next.js & React Architect",
      "Clean Code Enthusiast"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        typewriterRoleEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 45;
      } else {
        typewriterRoleEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typeSpeed = 2200; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next
      }

      setTimeout(typeLoop, typeSpeed);
    }
    typeLoop();
  }

  // 8. STAGGERED DRAWER MENU LOGIC
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const menuPanel = document.getElementById("staggered-menu-panel");
  const menuBackdrop = document.getElementById("menu-backdrop");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  function openMenu() {
    menuPanel?.classList.add("is-open");
    menuBackdrop?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menuPanel?.classList.remove("is-open");
    menuBackdrop?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  openMenuBtn?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);
  menuBackdrop?.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeMenu();
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && lenis) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target, { offset: -20 });
        }
      }
    });
  });

  // 9. NAVBAR SCROLL SPY & GLASSMORPHISM TRANSITION
  const siteHeader = document.getElementById("site-header");
  const spyLinks = document.querySelectorAll("[data-spy]");
  const logoText = document.querySelector(".site-logo-text");

  // Light sections = hero, about. Dark sections = the rest
  const lightSections = ["home", "about"];

  function isInLightSection() {
    const aboutEl = document.getElementById("about");
    if (!aboutEl) return window.scrollY < 100;
    return window.scrollY < (aboutEl.offsetTop + aboutEl.offsetHeight - 80);
  }

  window.addEventListener("scroll", () => {
    const inLight = isInLightSection();

    if (siteHeader) {
      if (window.scrollY > 40) {
        if (inLight) {
          // In light area: white frosted glass
          siteHeader.classList.add("py-3", "bg-white/85", "backdrop-blur-xl", "border-b", "border-slate-200/70", "shadow-sm");
          siteHeader.classList.remove("py-5", "bg-[#09090b]/80", "border-white/10");
        } else {
          // In dark area: dark frosted glass
          siteHeader.classList.add("py-3", "bg-[#09090b]/85", "backdrop-blur-xl", "border-b", "border-white/10");
          siteHeader.classList.remove("py-5", "bg-white/85", "border-slate-200/70", "shadow-sm");
        }
      } else {
        // At top: fully transparent
        siteHeader.classList.remove("py-3", "bg-[#09090b]/85", "backdrop-blur-xl", "border-b", "border-white/10", "bg-white/85", "border-slate-200/70", "shadow-sm");
        siteHeader.classList.add("py-5");
      }
    }

    // Logo text color
    if (logoText) {
      if (inLight) {
        logoText.classList.add("text-slate-900");
        logoText.classList.remove("text-white");
      } else {
        logoText.classList.add("text-white");
        logoText.classList.remove("text-slate-900");
      }
    }

    // Scroll spy
    const sections = ["home", "about", "certificates", "projects", "contact"];
    let current = "";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 140;
        if (window.scrollY >= top) {
          current = id;
        }
      }
    });

    spyLinks.forEach((link) => {
      if (link.dataset.spy === current) {
        link.classList.add("text-white", "bg-white/10");
        link.classList.remove("text-white/70");
      } else {
        link.classList.remove("text-white", "bg-white/10");
        link.classList.add("text-white/70");
      }
    });
  });

  // 10. SCROLL TO TOP BUTTON
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  scrollToTopBtn?.addEventListener("click", () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
