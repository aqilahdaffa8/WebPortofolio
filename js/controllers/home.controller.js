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

import { initTerminal } from "./terminal.controller.js";
import { initContactForm } from "./contact.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("home");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("hero-root").innerHTML = renderHero(PROFILE);
  document.getElementById("about-root").innerHTML = renderAbout(PROFILE);
  document.getElementById("skills-root").innerHTML = renderSkills(SKILLS);
  document.getElementById("contact-root").innerHTML = renderContact(PROFILE);
  initContactForm(PROFILE.formEndpoint);

  // Featured preview — hanya 2 proyek utama, sisanya di halaman penuh
  document.getElementById("projects-preview-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
      <p class="font-mono text-xs accent mb-2">~/projects</p>
      <div class="flex items-end justify-between mb-10 flex-wrap gap-3">
        <h2 class="font-display text-3xl md:text-4xl font-700">Proyek Mobile</h2>
        <a href="projects.html" class="font-mono text-xs accent hover:underline">Lihat lebih banyak →</a>
      </div>
      ${renderProjectsGrid(PROJECTS.slice(0, 2))}
    </section>`;

  document.getElementById("certificates-preview-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
      <p class="font-mono text-xs accent mb-2">~/certificates</p>
      <div class="flex items-end justify-between mb-10 flex-wrap gap-3">
        <h2 class="font-display text-3xl md:text-4xl font-700">Sertifikasi <span class="text-muted text-xl font-mono">(${CERTIFICATES.length})</span></h2>
        <a href="certificates.html" class="font-mono text-xs accent hover:underline">Lihat semua sertifikat →</a>
      </div>
      ${renderCertificatesGrid(CERTIFICATES, { visibleCount: 3 })}
    </section>`;

  lucide.createIcons();
  initThumbnailSwitcher();

  initTerminal("terminal-body", [
    { prefix: "$ ", text: "whoami", color: "var(--text-muted)" },
    { prefix: "&gt; ", text: "Muhammad Aqilah — Mobile Developer", color: "var(--accent-2)" },
    { prefix: "$ ", text: "ls skills/", color: "var(--text-muted)" },
    { prefix: "&gt; ", text: "flutter  dart  firebase  supabase", color: "var(--accent)" },
    { prefix: "$ ", text: "status --check", color: "var(--text-muted)" },
    { prefix: "&gt; ", text: "🟢 Terbuka untuk magang & proyek", color: "var(--accent-2)" }
  ]);
});