import { PROFILE } from "../models/profile.model.js";
import { PROJECTS } from "../models/projects.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderProjectsGrid, initThumbnailSwitcher } from "../views/projects.view.js";
import { initScrollReveal } from "./reveal.controller.js";
import { initCustomCursor } from "./cursor.controller.js";
import { initTiltCards } from "./tilt.controller.js";
import { initNavSpy } from "./navspy.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("projects");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("projects-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 page-hero relative overflow-hidden">
      <p class="font-hand text-2xl accent-2 mb-1 relative z-10">semua karya</p>
      <h1 class="font-display text-5xl mb-4 relative z-10">Semua Proyek <span class="text-muted text-3xl">(${PROJECTS.length})</span></h1>
      <p class="text-muted max-w-xl mb-12 relative z-10">Kumpulan proyek Mobile dan Web yang saya bangun.</p>
      ${renderProjectsGrid(PROJECTS)}
    </section>`;

  lucide.createIcons();
  initThumbnailSwitcher();
  initScrollReveal();
  initCustomCursor();
  initTiltCards();
  initNavSpy("projects");
});
