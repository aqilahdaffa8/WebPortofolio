const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
const ICON_LINKEDIN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const ICON_MAIL_LG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const ICON_ARROW_UP_RIGHT_LG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
const ICON_SEND = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`;

export function renderContact(profile) {
  return `
  <section id="contact" class="relative z-20 px-6 py-28 sm:px-10 sm:py-36 lg:px-20 bg-[#09090b] border-t border-white/10 overflow-hidden">
    
    <!-- Background Watermark -->
    <div class="section-watermark text-[clamp(6rem,18vw,16rem)] top-12">
      CONTACT
    </div>

    <div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
      
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Get in touch</p>
      
      <h2 class="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none text-white tracking-tight mb-8">
        Let's Work <span class="italic font-normal">Together.</span>
      </h2>

      <p class="text-sm sm:text-base leading-relaxed text-white/60 max-w-xl mb-12">
        Tertarik untuk berkolaborasi, mendiskusikan peluang proyek, atau sekadar bertukar sapa? Pintu saya selalu terbuka untuk koneksi baru.
      </p>

      <!-- Direct Big Email Pill Button -->
      <a 
        href="mailto:${profile.socials.email}" 
        class="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-black font-mono text-sm sm:text-base font-semibold tracking-wide hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_12px_40px_rgba(255,255,255,0.18)] mb-14"
      >
        ${ICON_MAIL_LG}
        <span>${profile.socials.email}</span>
        ${ICON_ARROW_UP_RIGHT_LG}
      </a>

      <!-- Quick Social Links (Pill Style) -->
      <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
        <a 
          href="${profile.socials.github}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
        >
          ${ICON_GITHUB}
          <span>GitHub</span>
        </a>
        <a 
          href="${profile.socials.linkedin}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
        >
          ${ICON_LINKEDIN}
          <span>LinkedIn</span>
        </a>
        <a 
          href="mailto:${profile.socials.email}" 
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
        >
          ${ICON_SEND}
          <span>Direct Message</span>
        </a>
      </div>

      <!-- Quick Message Form -->
      <div class="w-full max-w-2xl text-left p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-[#121215]/80 backdrop-blur-md shadow-2xl">
        <h3 class="text-xl font-semibold text-white mb-2">Kirim Pesan Cepat</h3>
        <p class="text-xs text-white/50 mb-6">Pesan ini akan langsung terkirim ke inbox email saya.</p>

        <form id="contact-form" class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-mono text-[10px] uppercase tracking-wider text-white/50 mb-2">Nama</label>
              <input type="text" name="name" required placeholder="Nama Anda" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors">
            </div>
            <div>
              <label class="block font-mono text-[10px] uppercase tracking-wider text-white/50 mb-2">Email</label>
              <input type="email" name="email" required placeholder="nama@email.com" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors">
            </div>
          </div>
          <div>
            <label class="block font-mono text-[10px] uppercase tracking-wider text-white/50 mb-2">Pesan</label>
            <textarea name="message" required rows="4" placeholder="Tuliskan pesan atau detail proyek..." class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors"></textarea>
          </div>
          <button type="submit" id="contact-submit" class="w-full py-3.5 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all flex items-center justify-center gap-2">
            <span>Kirim Pesan Sekarang</span>
            ${ICON_SEND}
          </button>
          <p id="contact-status" class="text-xs text-center mt-2"></p>
        </form>
      </div>

    </div>
  </section>`;
}
