// Inline SVGs — dipakai di drawer & footer
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;

const ICON_LINKEDIN = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

const ICON_MAIL = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

const ICON_ARROW_UP = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`;

export function renderNav(activePage = "home") {
  const base = activePage === "home" ? "" : "index.html";
  const isSubPage = activePage !== "home";

  return `
  <!-- STAGGERED MENU OVERLAY BACKDROP -->
  <div id="menu-backdrop" class="menu-backdrop" aria-hidden="true"></div>

  <!-- STAGGERED MENU PANEL (DRAWER) -->
  <aside id="staggered-menu-panel" class="p-8 sm:p-12 flex flex-col justify-between" aria-label="Navigation drawer" data-lenis-prevent="true">
    <div class="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
      <div class="flex items-center gap-2.5">
        <span class="w-8 h-8 rounded-lg bg-white text-black font-bold flex items-center justify-center font-mono text-xs shadow-md">A</span>
        <span class="text-sm font-semibold tracking-tight text-white">Aqilah / Navigation</span>
      </div>
      <button id="close-menu-btn" class="p-2 text-white/70 hover:text-white transition-colors" aria-label="Close menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>

    <div class="my-auto">
      <ul class="flex flex-col gap-6 sm:gap-7" role="list">
        <li>
          <a href="${base}#home" class="menu-link-item group flex items-baseline gap-4" data-nav-link data-section="home" ${isSubPage ? 'data-subpage="true"' : ''}>
            <span class="font-mono text-xs text-white/40 tracking-widest font-normal">01</span>
            <span class="group-hover:text-white transition-colors">HOME</span>
          </a>
        </li>
        <li>
          <a href="${base}#about" class="menu-link-item group flex items-baseline gap-4" data-nav-link data-section="about" ${isSubPage ? 'data-subpage="true"' : ''}>
            <span class="font-mono text-xs text-white/40 tracking-widest font-normal">02</span>
            <span class="group-hover:text-white transition-colors">ABOUT</span>
          </a>
        </li>
        <li>
          <a href="${base}#certificates" class="menu-link-item group flex items-baseline gap-4" data-nav-link data-section="certificates" ${isSubPage ? 'data-subpage="true"' : ''}>
            <span class="font-mono text-xs text-white/40 tracking-widest font-normal">03</span>
            <span class="group-hover:text-white transition-colors">CERTIFICATES</span>
          </a>
        </li>
        <li>
          <a href="${base}#projects" class="menu-link-item group flex items-baseline gap-4" data-nav-link data-section="projects" ${isSubPage ? 'data-subpage="true"' : ''}>
            <span class="font-mono text-xs text-white/40 tracking-widest font-normal">04</span>
            <span class="group-hover:text-white transition-colors">PROJECTS</span>
          </a>
        </li>
        <li>
          <a href="${base}#contact" class="menu-link-item group flex items-baseline gap-4" data-nav-link data-section="contact" ${isSubPage ? 'data-subpage="true"' : ''}>
            <span class="font-mono text-xs text-white/40 tracking-widest font-normal">05</span>
            <span class="group-hover:text-white transition-colors">CONTACT</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
      <div class="flex flex-wrap items-center gap-4">
        <a href="https://github.com/aqilahdaffa8" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_GITHUB}
          <span>GITHUB</span>
        </a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/aqilah-daffa-76290a3a4" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_LINKEDIN}
          <span>LINKEDIN</span>
        </a>
        <span>·</span>
        <a href="mailto:aqilahdaffa8@email.com" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_MAIL}
          <span>EMAIL</span>
        </a>
      </div>
      <p class="text-white/30 text-[11px]">Bandung · Indonesia</p>
    </div>
  </aside>

  <!-- FIXED FLOATING NAVBAR -->
  <header id="site-header" class="fixed top-0 left-0 right-0 z-50 px-6 py-5 sm:px-10 lg:px-20 transition-all duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between">

      <!-- LOGO -->
      <a href="${base}#home" class="flex items-center gap-2.5 select-none group pointer-events-auto" aria-label="Aqilah Portfolio">
        <span class="w-8 h-8 rounded-lg bg-slate-950 text-white font-extrabold flex items-center justify-center font-mono text-sm shadow-md transition-transform duration-300 group-hover:scale-105 border border-white/20">A</span>
        <span class="text-sm font-semibold tracking-tight text-slate-900 drop-shadow-sm group-hover:text-slate-600 transition-colors site-logo-text">Aqilah / Portfolio</span>
      </a>

      <!-- MENU TOGGLE BUTTON -->
      <div class="flex items-center gap-3 pointer-events-auto">
        <button id="open-menu-btn" type="button" class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-800/20 bg-slate-950 text-xs font-mono uppercase tracking-wider text-white hover:bg-slate-800 shadow-md transition-all duration-200" aria-label="Open menu">
          <span>Menu</span>
          <span class="w-3.5 h-3.5 flex flex-col justify-center gap-1">
            <span class="w-full h-[1.5px] bg-white rounded-full"></span>
            <span class="w-full h-[1.5px] bg-white rounded-full"></span>
          </span>
        </button>
      </div>

    </div>
  </header>`;
}

export function renderFooter(profile) {
  return `
  <footer class="relative z-10 border-t border-white/10 bg-[#09090b] px-6 py-12 sm:px-10 lg:px-20 text-white/50 text-xs font-mono">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded bg-white text-black font-bold flex items-center justify-center text-[10px]">A</span>
        <p>© 2026 ${profile.name}. All rights reserved.</p>
      </div>
      <div class="flex items-center gap-6">
        <a href="${profile.socials.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_GITHUB}
          <span>GITHUB</span>
        </a>
        <a href="${profile.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_LINKEDIN}
          <span>LINKEDIN</span>
        </a>
        <a href="mailto:${profile.socials.email}" class="flex items-center gap-1.5 hover:text-white transition-colors">
          ${ICON_MAIL}
          <span>EMAIL</span>
        </a>
        <button type="button" id="scroll-to-top" class="hover:text-white transition-colors flex items-center gap-1.5 ml-2">
          <span>TOP</span>
          ${ICON_ARROW_UP}
        </button>
      </div>
    </div>
  </footer>`;
}
