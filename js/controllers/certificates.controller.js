import { PROFILE } from "../models/profile.model.js";
import { CERTIFICATES } from "../models/certificates.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderCertificatesGrid } from "../views/certificates.view.js";
import { initScrollReveal } from "./reveal.controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("certificates");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("certificates-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 page-hero relative overflow-hidden">
      <span class="code-float code-float-lg code-anim hidden md:block" style="top:8px; right:4%;">01</span>
      <p class="font-hand text-2xl accent-2 mb-1 relative z-10">koleksi lengkap</p>
      <h1 class="font-display text-5xl mb-4 relative z-10">Semua Sertifikat <span class="text-muted text-3xl">(${CERTIFICATES.length})</span></h1>
      <p class="text-muted max-w-xl mb-12 relative z-10">Sertifikasi yang telah saya selesaikan, sebagian besar melalui program Dicoding Indonesia.</p>
      ${renderCertificatesGrid(CERTIFICATES)}
    </section>`;

  lucide.createIcons();
  initScrollReveal();
});
