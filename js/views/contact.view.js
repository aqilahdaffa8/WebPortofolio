export function renderContact(profile) {
  return `
  <section id="contact" class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-mono text-xs accent mb-2">~/contact</p>
    <h2 class="font-display text-3xl md:text-4xl font-700 mb-4">Mari Berkolaborasi</h2>
    <p class="text-muted mb-10 max-w-xl">Terbuka untuk peluang magang, kolaborasi proyek, atau sekadar berdiskusi. Kirim pesan langsung, atau hubungi lewat kanal di bawah.</p>

    <div class="grid md:grid-cols-5 gap-10">
      <form id="contact-form" class="md:col-span-3 space-y-4">
        <div>
          <label class="font-mono text-xs text-muted block mb-2">NAMA</label>
          <input type="text" name="name" required class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="Nama Anda">
        </div>
        <div>
          <label class="font-mono text-xs text-muted block mb-2">EMAIL</label>
          <input type="email" name="email" required class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="nama@email.com">
        </div>
        <div>
          <label class="font-mono text-xs text-muted block mb-2">PESAN</label>
          <textarea name="message" required rows="4" class="w-full surface-2 rounded-lg px-4 py-3 text-sm border border-blueprint" placeholder="Tuliskan pesan Anda..."></textarea>
        </div>
        <button type="submit" id="contact-submit" class="px-6 py-3 rounded-lg font-medium text-sm" style="background:var(--accent); color:#0B1120;">Kirim Pesan</button>
        <p id="contact-status" class="text-sm mt-2"></p>
      </form>

      <div class="md:col-span-2 space-y-4">
        <a href="${profile.socials.github}" class="flex items-center gap-3 surface rounded-xl p-4 hover:border-sky-400 transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          <span class="text-sm">${profile.socials.github.replace("https://", "")}</span>
        </a>
        <a href="${profile.socials.linkedin}" class="flex items-center gap-3 surface rounded-xl p-4 hover:border-sky-400 transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/></svg>
          <span class="text-sm">${profile.socials.linkedin.replace("https://", "")}</span>
        </a>
        <a href="mailto:${profile.socials.email}" class="flex items-center gap-3 surface rounded-xl p-4 hover:border-sky-400 transition">
          <i data-lucide="mail" class="w-5 h-5"></i><span class="text-sm">${profile.socials.email}</span>
        </a>
      </div>
    </div>
  </section>`;
}