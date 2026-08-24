export function renderNav(activePage = "home") {
  const link = (href, label, page, icon) =>
    `<a href="${href}" class="${activePage === page ? "active" : ""}"><i data-lucide="${icon}"></i>${label}</a>`;

  return `
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style="background-color:rgba(247,247,247,0.9); border-bottom:1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="logo-bracket text-lg accent"><span class="bracket">&lt;</span>Muhammad_Aqilah<span class="bracket">/&gt;</span></a>
      <nav class="crumb hidden md:flex">
        ${link("index.html#about", "Tentang", "home", "user")}
        ${link("projects.html", "Proyek", "projects", "folder-code")}
        ${link("certificates.html", "Sertifikat", "certificates", "award")}
        ${link("index.html#skills", "Skills", "home", "wrench")}
        ${link("index.html#contact", "Kontak", "home", "mail")}
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
        <p class="logo-bracket text-lg accent"><span class="bracket">&lt;</span>${profile.name}<span class="bracket">/&gt;</span></p>
        <p class="text-xs text-muted mt-0.5">© 2026</p>
      </div>
      <button type="button" onclick="window.scrollTo({top:0,behavior:'smooth'})" class="ink-btn">↑ Kembali ke atas</button>
    </div>
  </footer>`;
}
