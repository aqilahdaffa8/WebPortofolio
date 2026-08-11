import { PROFILE } from "../models/profile.model.js";
import { PROJECTS } from "../models/projects.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderProjectsGrid, initThumbnailSwitcher } from "../views/projects.view.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("projects");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("projects-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 page-hero">
      <p class="font-mono text-xs accent mb-2">~/projects</p>
      <h1 class="font-display text-3xl md:text-4xl font-700 mb-4">Semua Proyek Mobile</h1>
      <p class="text-muted max-w-xl mb-12">Kumpulan aplikasi mobile yang saya bangun menggunakan Flutter.</p>
      ${renderProjectsGrid(PROJECTS)}
    </section>`;

  lucide.createIcons();
  initThumbnailSwitcher();
});
