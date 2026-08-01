// VIEW — hanya menghasilkan string HTML dari data yang diterima.
export function renderNav(activePage = "home") {
  const link = (href, label, page) =>
    `<a href="${href}" class="${activePage === page ? "active" : ""}">${label}</a>`;

  return `
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style="background-color:rgba(11,17,32,0.85); border-bottom:1px solid var(--border);">
    <div class="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="font-mono text-sm accent">~/muhammad-aqilah</a>
      <nav class="crumb hidden md:flex items-center gap-5">
        ${link("index.html#about", "~/about", "home")}
        ${link("projects.html", "~/projects", "projects")}
        ${link("certificates.html", "~/certificates", "certificates")}
        ${link("index.html#skills", "~/skills", "home")}
        ${link("index.html#contact", "~/contact", "home")}
      </nav>
      <div class="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full surface-2">
        <span class="w-2 h-2 rounded-full inline-block" style="background:var(--accent-2); box-shadow:0 0 8px var(--accent-2);"></span>
        <span class="text-muted">Open to Work</span>
      </div>
    </div>
  </header>`;
}

export function renderFooter(profile) {
  return `
  <footer class="border-t border-blueprint py-8">
    <div class="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs text-muted">
      <p>© 2026 ${profile.name}. Dibangun dengan Flutter di hati dan HTML di layar.</p>
      <a href="index.html#hero" class="accent hover:underline">↑ Kembali ke atas</a>
    </div>
  </footer>`;
}
