export function renderHero(profile) {
  const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
  const ICON_LINKEDIN = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
  const ICON_MAIL = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
  const ICON_ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

  return `
  <section id="home" class="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 sm:px-10 sm:pt-36 sm:pb-24 lg:px-20 overflow-hidden bg-gradient-to-b from-[#e8edf3] via-[#dde4ed] to-[#d0dae7] text-[#0f172a]">
    
    <!-- Background Soft Ambient Glow -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(148,163,184,0.18),transparent_70%)]"></div>

    <div class="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
      
      <!-- LEFT COLUMN: GREETINGS & INTRO -->
      <div class="flex flex-col items-start hero-text-reveal">
        
        <!-- Social Icons Row -->
        <div class="flex items-center gap-5 mb-6 text-slate-500">
          <a href="${profile.socials.github}" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 hover:scale-110 transition-all duration-200" aria-label="GitHub">
            ${ICON_GITHUB}
          </a>
          <a href="${profile.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
            ${ICON_LINKEDIN}
          </a>
          <a href="mailto:${profile.socials.email}" class="hover:text-slate-900 hover:scale-110 transition-all duration-200" aria-label="Email">
            ${ICON_MAIL}
          </a>
        </div>

        <!-- Location Badge -->
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          ${profile.location}
        </p>

        <!-- Big Greetings -->
        <h1 class="font-serif text-6xl sm:text-7xl lg:text-9xl leading-[0.92] tracking-tight text-slate-950 mb-4">
          Hi, I'm <span class="italic font-normal text-slate-700">${profile.nickname}.</span>
        </h1>

        <!-- Typewriter Role with cursor -->
        <div class="min-h-[2.5rem] flex items-center mb-6">
          <span id="typewriter-role" class="font-mono text-lg sm:text-2xl font-medium text-slate-700 tracking-wide"></span>
          <span class="cursor-blink ml-1 text-slate-900 font-mono text-xl sm:text-2xl">█</span>
        </div>

        <!-- Hero Bio -->
        <p class="text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl mb-9">
          ${profile.heroBio}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center gap-4">
          <a href="${profile.socials.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-950 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 hover:scale-[1.02] transition-all duration-200 shadow-[0_8px_20px_rgba(15,23,42,0.15)]">
            <span>Explore Work</span>
            ${ICON_ARROW_RIGHT}
          </a>
          <a href="#contact" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 bg-white/80 text-slate-800 font-mono text-xs font-medium uppercase tracking-wider hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 backdrop-blur-sm shadow-sm">
            <span>Get in Touch</span>
          </a>
        </div>

      </div>

      <!-- RIGHT COLUMN: PROFILE CARD WITH DUAL-IMAGE SPOTLIGHT REVEAL -->
      <div class="flex justify-center lg:justify-end hero-card-reveal">
        <div 
          id="profile-card-media" 
          class="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] rounded-[2rem] border border-white/15 bg-[#0e0e12] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-transform duration-300"
          style="transform-style:preserve-3d;"
        >
          <!-- Subtle Inner Glow/Border Layer -->
          <div class="absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_40%),linear-gradient(180deg,rgba(25,25,30,0.6)_0%,rgba(10,10,12,0.95)_100%)] pointer-events-none z-10"></div>
          
          <!-- Background Decorative Code Marks -->
          <svg viewBox="0 0 16 16" fill="none" class="absolute -right-6 top-8 w-28 h-28 text-white/[0.04] -rotate-12 pointer-events-none z-10">
            <path d="M8.01 0.85L6.01 14.85L7.99 15.14L9.99 1.14L8.01 0.85Z" fill="currentColor"/>
            <path d="M12.5 11.5L11.08 10.08L13.17 8L11.08 5.91L12.5 4.5L16 8L12.5 11.5Z" fill="currentColor"/>
            <path d="M2.82 8L4.91 10.08L3.5 11.5L0 8L3.5 4.5L4.91 5.91L2.82 8Z" fill="currentColor"/>
          </svg>

          <!-- DUAL PHOTO CONTAINER -->
          <div class="spotlight-wrapper absolute inset-0 z-0">
            <!-- 1. BASE IMAGE: MONOKROM -->
            <img 
              src="${profile.avatarMonochrome}" 
              alt="${profile.name} (Monochrome)" 
              class="spotlight-base select-none"
              draggable="false"
            />

            <!-- 2. TOP IMAGE: BERWARNA (Revealed by cursor spotlight) -->
            <img 
              id="spotlight-color-img"
              src="${profile.avatarColor}" 
              alt="${profile.name} (Colored Reveal)" 
              class="spotlight-color select-none"
              draggable="false"
            />
          </div>

          <!-- FLOATING BADGE (Matches iqmal.dev) -->
          <div class="absolute inset-x-5 bottom-5 z-20 flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-[#121216]/85 px-5 py-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div>
              <p class="text-sm font-semibold leading-none tracking-tight">@aqilahdaffa8</p>
              <p class="mt-2 text-xs leading-none text-white/60">${profile.status}</p>
            </div>
            <span class="pulse-dot"></span>
          </div>

        </div>
      </div>

    </div>

    <!-- SCROLL DOWN INDICATOR -->
    <div class="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-slate-400 font-mono text-[11px] uppercase tracking-widest pointer-events-none">
      <span>Scroll Down</span>
      <i data-lucide="chevron-down" class="w-4 h-4 animate-bounce"></i>
    </div>

  </section>`;
}
