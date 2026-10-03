import { PROFILE } from "../models/profile.model.js";
import { CERTIFICATES } from "../models/certificates.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderCertificatesGrid } from "../views/certificates.view.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("certificates");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("certificates-root").innerHTML = `
    <section class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <!-- Watermark -->
      <div class="section-watermark text-[clamp(5rem,17vw,17rem)] -top-6">
        CREDENTIALS
      </div>

      <div class="relative z-10 mb-14 border-b border-white/10 pb-8">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/45 mb-2">Complete Archive</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3">
          All Certificates &amp; Licenses <span class="text-white/40 text-2xl sm:text-3xl">(${CERTIFICATES.length})</span>
        </h1>
        <p class="text-white/60 max-w-2xl text-sm sm:text-base">
          Daftar seluruh sertifikasi, program intensif, dan pelatihan software engineering yang telah diselesaikan.
        </p>
      </div>

      <div class="relative z-10">
        ${renderCertificatesGrid(CERTIFICATES, { twoColumn: true })}
      </div>
    </section>`;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Lenis Smooth Scroll
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Drawer menu handlers
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const menuPanel = document.getElementById("staggered-menu-panel");
  const menuBackdrop = document.getElementById("menu-backdrop");

  openMenuBtn?.addEventListener("click", () => {
    menuPanel?.classList.add("is-open");
    menuBackdrop?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  function closeMenu() {
    menuPanel?.classList.remove("is-open");
    menuBackdrop?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  closeMenuBtn?.addEventListener("click", closeMenu);
  menuBackdrop?.addEventListener("click", closeMenu);

  // Sub-page nav links: simpan target section ke sessionStorage lalu redirect ke index.html
  document.querySelectorAll("[data-subpage='true']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = link.dataset.section;
      if (section) {
        sessionStorage.setItem("scrollToSection", section);
      }
      window.location.href = "index.html";
    });
  });

  // Scroll to top btn
  document.getElementById("scroll-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
