import { PROFILE } from "../models/profile.model.js";
import { CERTIFICATES } from "../models/certificates.model.js";
import { renderNav, renderFooter } from "../views/nav.view.js";
import { renderCertificatesGrid } from "../views/certificates.view.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-root").innerHTML = renderNav("certificates");
  document.getElementById("footer-root").innerHTML = renderFooter(PROFILE);

  document.getElementById("certificates-root").innerHTML = `
    <section class="max-w-6xl mx-auto px-5 md:px-8 page-hero">
      <p class="font-mono text-xs accent mb-2">~/certificates</p>
      <h1 class="font-display text-3xl md:text-4xl font-700 mb-4">Semua Sertifikat <span class="text-muted text-2xl font-mono">(${CERTIFICATES.length})</span></h1>
      <p class="text-muted max-w-xl mb-12">Sertifikasi yang telah saya selesaikan, sebagian besar melalui program Dicoding Indonesia.</p>
      ${renderCertificatesGrid(CERTIFICATES)}
    </section>`;

  lucide.createIcons();
});
