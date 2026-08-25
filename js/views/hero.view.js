export function renderHero(profile, stats) {
  return `
  <section id="hero" class="relative max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-24 grid md:grid-cols-5 gap-12 items-center overflow-hidden">

    <span class="watermark hidden md:block" style="font-size:9rem; top:-10px; left:-10px;">CODE</span>

    <div class="md:col-span-3 relative z-10 reveal is-visible">
      <p class="font-hand text-2xl accent-2 mb-1">Halo, saya</p>
      <h1 class="font-display text-5xl md:text-6xl leading-tight mb-3">
        ${profile.name}
      </h1>
      <p class="font-hand text-2xl accent mb-6" style="text-decoration:underline; text-decoration-style:wavy; text-decoration-color:var(--accent-2); text-underline-offset:6px;">${profile.role}</p>
      <p class="text-muted text-lg max-w-xl mb-8 leading-relaxed">${profile.bio[0]}</p>
      <div class="flex flex-wrap gap-4 mb-8">
        <a href="projects.html" class="torn-btn torn-btn-solid">Lihat Proyek →</a>
        <a href="index.html#contact" class="ink-btn">Hubungi Saya</a>
      </div>
      <div class="flex gap-3">
        <span class="tag-chip"><span class="status-dot"></span>${profile.status}</span>
      </div>
    </div>

    <div class="md:col-span-2 relative z-10 reveal is-visible reveal-2">
      <div class="polaroid rotate-r relative mx-auto" style="max-width:260px;">
        <div class="tape"></div>
        <img src="${profile.avatar}" alt="${profile.name}" class="w-full aspect-[4/5] object-cover">
        <p class="font-hand text-xl text-center mt-3 text-muted">${profile.name.split(" ")[0]} ${profile.name.split(" ")[1]}</p>
      </div>
      <div class="flex gap-3 justify-center mt-6">
        <div class="stat-pill"><div class="num">${stats.projects}</div><div class="label">Proyek</div></div>
        <div class="stat-pill"><div class="num">${stats.certificates}</div><div class="label">Sertifikat</div></div>
      </div>
    </div>
  </section>`;
}
