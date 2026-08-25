export function renderNav(activePage = "home") {
  const link = (href, label, page, key) =>
    `<a href="${href}" data-key="${key}" class="${activePage === page ? "active" : ""}">${label}</a>`;

  return `
  <header id="site-header" class="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style="background-color:rgba(247,247,247,0.92); border-bottom:1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="wordmark">Muhammad Aqilah<span class="dot">.</span></a>
      <nav id="nav-links" class="crumb hidden md:flex">
        ${link("index.html#about", "Tentang", "home", "about")}
        ${link("projects.html", "Proyek", "projects", "projects")}
        ${link("certificates.html", "Sertifikat", "certificates", "certificates")}
        ${link("index.html#skills", "Skills", "home", "skills")}
        ${link("index.html#contact", "Kontak", "home", "contact")}
        <span id="nav-indicator" class="nav-indicator"></span>
      </nav>
      <div class="tag-chip">
        <span class="status-dot"></span>
        Open to Work
      </div>
    </div>
  </header>`;
}

export function renderFooter(profile) {
  return `
  <footer class="border-t border-blueprint py-8">
    <div class="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
      <div>
        <p class="wordmark text-base">${profile.name}<span class="dot">.</span></p>
        <p class="text-xs text-muted mt-0.5">© 2026 · Crafted by Human, Assisted by AI.</p>
      </div>
      <button type="button" onclick="window.scrollTo({top:0,behavior:'smooth'})" class="ink-btn">↑ Kembali ke atas</button>
    </div>
  </footer>`;
}
