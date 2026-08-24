export function renderAbout(profile) {
  const paragraphs = profile.bio.map(p => `<p>${p}</p>`).join("");

  return `
  <section id="about" class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-hand text-2xl accent-2 mb-1 reveal">sedikit cerita</p>
    <h2 class="font-display text-4xl mb-10 reveal">Tentang Saya</h2>

    <div class="grid md:grid-cols-5 gap-10 items-start">
      <div class="md:col-span-2 reveal reveal-1">
        <div class="polaroid rotate-l relative mx-auto" style="max-width:230px;">
          <div class="tape"></div>
          <img src="${profile.avatarAlt}" alt="${profile.name}" class="w-full aspect-[4/5] object-cover">
        </div>
      </div>

      <div class="md:col-span-3 surface rounded-2xl p-7 reveal reveal-2">
        <p class="font-hand text-2xl accent mb-3">My Story</p>
        <div class="space-y-3 text-muted leading-relaxed text-sm">${paragraphs}</div>

        <div class="dashed-divider my-6"></div>

        <div class="grid grid-cols-2 gap-5">
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="user" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">Nama</p><p class="text-sm font-medium">${profile.name}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="mail" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">Email</p><p class="text-sm font-medium">${profile.socials.email}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="graduation-cap" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">Sekolah</p><p class="text-sm font-medium">SMKN 1 Katapang</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="languages" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">Bahasa</p><p class="text-sm font-medium">${profile.languages.join(", ")}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
