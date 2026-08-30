import { PROFILE } from "../models/profile.model.js";
import { PROJECTS } from "../models/projects.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderProjectsGrid, renderCategoryFilter, initThumbnailSwitcher } from "../views/projects.view.js";
import { initScrollReveal } from "./reveal.controller.js";
import { initCustomCursor } from "./cursor.controller.js";
import { initTiltCards } from "./tilt.controller.js";
import { initNavSpy } from "./navspy.controller.js";

let currentFilter = "all";

function getCounts() {
  return {
    all: PROJECTS.length,
    mobile: PROJECTS.filter(p => p.category === "mobile").length,
    web: PROJECTS.filter(p => p.category === "web").length
  };
}

function getFilteredProjects() {
  if (currentFilter === "all") return PROJECTS;
  return PROJECTS.filter(p => p.category === currentFilter);
}

function updateProjectsView() {
  const container = document.getElementById("projects-grid-container");
  const filterContainer = document.getElementById("filter-container");
  
  if (filterContainer) {
    filterContainer.innerHTML = renderCategoryFilter(currentFilter, getCounts());
    bindFilterEvents();
  }

  if (container) {
    container.innerHTML = renderProjectsGrid(getFilteredProjects());
    lucide.createIcons();
    initThumbnailSwitcher();
    initScrollReveal();
    initTiltCards();
  }
}

function bindFilterEvents() {
  document.querySelectorAll(".filter-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      if (filter && filter !== currentFilter) {
        currentFilter = filter;
        updateProjectsView();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("projects");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("projects-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 page-hero relative overflow-hidden">
      <p class="font-hand text-2xl accent-2 mb-1 relative z-10">semua karya</p>
      <h1 class="font-display text-4xl sm:text-5xl mb-4 relative z-10">Semua Proyek <span class="text-muted text-2xl sm:text-3xl">(${PROJECTS.length})</span></h1>
      <p class="text-muted max-w-xl mb-8 relative z-10">Kumpulan proyek Mobile dan Web yang saya bangun.</p>
      <div id="filter-container">
        ${renderCategoryFilter(currentFilter, getCounts())}
      </div>
      <div id="projects-grid-container">
        ${renderProjectsGrid(getFilteredProjects())}
      </div>
    </section>`;

  lucide.createIcons();
  bindFilterEvents();
  initThumbnailSwitcher();
  initScrollReveal();
  initCustomCursor();
  initTiltCards();
  initNavSpy("projects");
});

