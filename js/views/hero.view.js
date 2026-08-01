export function renderHero(profile) {
  return `
  <section id="hero" class="max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-24 grid md:grid-cols-5 gap-12 items-center">
    <div class="md:col-span-3">
      <p class="font-mono text-sm accent-2 mb-4">$ status --check<br><span class="text-muted">&gt; </span>🟢 ${profile.status}</p>
      <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-700 leading-tight mb-3">
        ${profile.name.split(" ").slice(0, 2).join(" ")}<br><span class="accent">${profile.name.split(" ").slice(2).join(" ")}</span>
      </h1>
      <p class="font-mono text-sm text-muted mb-6">${profile.tagline}</p>
      <p class="text-muted text-lg max-w-xl mb-8 leading-relaxed">${profile.bio[0]}</p>
      <div class="flex flex-wrap gap-4">
        <a href="projects.html" class="px-6 py-3 rounded-lg font-medium text-sm" style="background:var(--accent); color:#0B1120;">Lihat Proyek</a>
        <a href="index.html#contact" class="px-6 py-3 rounded-lg font-medium text-sm surface hover:border-sky-400 transition">Hubungi Saya</a>
      </div>
    </div>

    <div class="md:col-span-2">
      <div class="surface rounded-xl overflow-hidden shadow-2xl">
        <div class="browser-bar">
          <span class="browser-dot" style="background:#F87171;"></span>
          <span class="browser-dot" style="background:#FBBF24;"></span>
          <span class="browser-dot" style="background:#34D399;"></span>
          <span class="font-mono text-xs text-muted ml-2">portfolio.sh</span>
        </div>
        <div class="p-5 font-mono text-sm leading-7 min-h-[190px]" id="terminal-body"></div>
      </div>
    </div>
  </section>`;
}
