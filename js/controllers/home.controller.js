import { PROFILE } from "../models/profile.model.js";
import { SKILLS } from "../models/skills.model.js";
import { PROJECTS } from "../models/projects.model.js";
import { CERTIFICATES } from "../models/certificates.model.js";

import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderHero } from "../views/hero.view.js";
import { renderAbout } from "../views/about.view.js";
import { renderSkills } from "../views/skills.view.js";
import { renderContact } from "../views/contact.view.js";
import { renderProjectsGrid, initThumbnailSwitcher } from "../views/projects.view.js";
import { renderCertificatesGrid } from "../views/certificates.view.js";

import { initContactForm } from "./contact.controller.js";
import { initScrollReveal } from "./reveal.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("home");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("hero-root").innerHTML = renderHero(PROFILE, {
    projects: PROJECTS.length,
    certificates: CERTIFICATES.length
  });
  document.getElementById("about-root").innerHTML = renderAbout(PROFILE);
  document.getElementById("skills-root").innerHTML = renderSkills(SKILLS);
  document.getElementById("contact-root").innerHTML = renderContact(PROFILE);
  initContactForm(PROFILE.formEndpoint);

  // Featured preview — hanya 2 proyek utama, sisanya di halaman penuh
  document.getElementById("projects-preview-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
      <p class="font-hand text-2xl accent-2 mb-1 reveal">beberapa karya</p>
      <div class="flex items-end justify-between mb-10 flex-wrap gap-3">
        <h2 class="font-display text-4xl reveal">Proyek Mobile & Web <span class="text-muted text-2xl">(${PROJECTS.length})</span></h2>
        <a href="projects.html" class="text-sm accent hover:underline font-medium">Lihat lebih banyak →</a>
      </div>
      ${renderProjectsGrid(PROJECTS.slice(0, 2))}
    </section>`;

  // Featured preview sertifikat — hanya 3 yang tampil di beranda
  document.getElementById("certificates-preview-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
      <p class="font-hand text-2xl accent-2 mb-1 reveal">koleksi sertifikat</p>
      <div class="flex items-end justify-between mb-10 flex-wrap gap-3">
        <h2 class="font-display text-4xl reveal">Sertifikasi <span class="text-muted text-2xl">(${CERTIFICATES.length})</span></h2>
        <a href="certificates.html" class="text-sm accent hover:underline font-medium">Lihat semua sertifikat →</a>
      </div>
      ${renderCertificatesGrid(CERTIFICATES, { visibleCount: 3 })}
    </section>`;

  lucide.createIcons();
  initThumbnailSwitcher();
  initScrollReveal();
});
