export function renderContact(profile) {
  return `
  <section id="contact" class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-hand text-2xl accent-2 mb-1 reveal">ngobrol yuk</p>
    <h2 class="font-display text-4xl mb-10 reveal">Mari Berkolaborasi</h2>

    <div class="grid md:grid-cols-5 gap-8">
      <div class="md:col-span-2 surface rounded-2xl p-7 reveal reveal-1">
        <p class="font-hand text-2xl accent mb-2">Say Hello</p>
        <p class="text-sm text-muted mb-6">Terbuka untuk peluang magang & kolaborasi proyek — drop pesan kapan saja.</p>

        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="mail" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">Email</p><p class="text-sm font-medium">${profile.socials.email}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="github" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">GitHub</p><p class="text-sm font-medium">${profile.socials.github.replace("https://", "")}</p></div>
          </div>
          <div class="flex items-center gap-3">
            <div class="icon-circle"><i data-lucide="linkedin" class="w-4 h-4"></i></div>
            <div><p class="text-[10px] text-muted uppercase tracking-wide">LinkedIn</p><p class="text-sm font-medium">${profile.socials.linkedin.replace("https://", "")}</p></div>
          </div>
        </div>

        <div class="dashed-divider my-6"></div>

        <div class="flex gap-3">
          <a href="${profile.socials.github}" class="icon-circle hover:bg-[var(--surface-2)] transition">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>
          <a href="${profile.socials.linkedin}" class="icon-circle hover:bg-[var(--surface-2)] transition">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/></svg>
          </a>
          <a href="mailto:${profile.socials.email}" class="icon-circle hover:bg-[var(--surface-2)] transition">
            <i data-lucide="mail" class="w-4 h-4"></i>
          </a>
        </div>
      </div>

      <form id="contact-form" class="md:col-span-3 surface rounded-2xl p-7 space-y-4 reveal reveal-2">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs text-muted uppercase tracking-wide block mb-2">Nama</label>
            <input type="text" name="name" required class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="Nama Anda">
          </div>
          <div>
            <label class="text-xs text-muted uppercase tracking-wide block mb-2">Email</label>
            <input type="email" name="email" required class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="nama@email.com">
          </div>
        </div>
        <div>
          <label class="text-xs text-muted uppercase tracking-wide block mb-2">Subjek</label>
          <input type="text" name="subject" class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="Tentang apa pesan ini?">
        </div>
        <div>
          <label class="text-xs text-muted uppercase tracking-wide block mb-2">Pesan</label>
          <textarea name="message" required rows="5" class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="Tuliskan pesan Anda..."></textarea>
        </div>
        <button type="submit" id="contact-submit" class="torn-btn torn-btn-solid w-full">Kirim Pesan ✎</button>
        <p id="contact-status" class="text-sm mt-2"></p>
      </form>
    </div>
  </section>`;
}
