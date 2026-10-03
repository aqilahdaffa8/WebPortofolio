export function renderAbout(profile) {
  return `
  <section id="about" class="relative z-20 px-6 py-24 sm:px-10 sm:py-32 lg:px-20 border-t border-[#c2cedd] bg-[#d0dae7] text-slate-900 overflow-hidden">
    
    <!-- Background Watermark (Light Mode) -->
    <div class="section-watermark text-[clamp(6rem,18vw,16rem)] top-12 text-slate-900/[0.04]">
      ABOUT
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      
      <!-- Section Header -->
      <div class="mb-10 sm:mb-14">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Profile & Story</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950">
          About ${profile.name}
        </h2>
        <p class="text-slate-500 text-sm sm:text-base mt-2">${profile.role}</p>
      </div>

      <!-- Main Highlighted Lead Text (Borderless with Scroll Reveal) -->
      <div id="about-description" class="py-2 sm:py-4 mb-12 sm:mb-16 max-w-5xl">
        <p class="text-lg sm:text-2xl lg:text-[1.75rem] leading-[1.7] sm:leading-[1.75] text-slate-500 font-light text-pretty">
          Saya adalah <span class="font-semibold text-slate-950">Full-Stack dan Mobile Developer</span> yang berfokus pada pengembangan aplikasi web dan mobile yang <span class="font-semibold text-slate-950">fungsional, responsif, dan mudah digunakan</span>. Saya terbiasa mengembangkan aplikasi dari <span class="font-semibold text-slate-950">frontend hingga backend</span>, merancang arsitektur <span class="font-semibold text-slate-950">REST API</span>, mengelola basis data, serta mengintegrasikan berbagai layanan untuk menghasilkan <span class="font-semibold text-slate-950">sistem yang terstruktur dan terukur</span>.
        </p>
      </div>

      <!-- Quick Info / Attributes Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div class="p-6 rounded-2xl border border-[#b8c8da] bg-[#c8d6e6] shadow-sm flex flex-col justify-between hover:border-[#a0b4c8] transition-colors">
          <span class="font-mono text-xs text-slate-500 uppercase tracking-widest">Specialization</span>
          <p class="text-base font-semibold text-slate-900 mt-4">Mobile & Web Apps</p>
        </div>
        <div class="p-6 rounded-2xl border border-[#b8c8da] bg-[#c8d6e6] shadow-sm flex flex-col justify-between hover:border-[#a0b4c8] transition-colors">
          <span class="font-mono text-xs text-slate-500 uppercase tracking-widest">Core Stack</span>
          <p class="text-base font-semibold text-slate-900 mt-4">Flutter & Next.js</p>
        </div>
        <div class="p-6 rounded-2xl border border-[#b8c8da] bg-[#c8d6e6] shadow-sm flex flex-col justify-between hover:border-[#a0b4c8] transition-colors">
          <span class="font-mono text-xs text-slate-500 uppercase tracking-widest">Architecture</span>
          <p class="text-base font-semibold text-slate-900 mt-4">Clean & Modular</p>
        </div>
        <div class="p-6 rounded-2xl border border-[#b8c8da] bg-[#c8d6e6] shadow-sm flex flex-col justify-between hover:border-[#a0b4c8] transition-colors">
          <span class="font-mono text-xs text-slate-500 uppercase tracking-widest">Location</span>
          <p class="text-base font-semibold text-slate-900 mt-4">${profile.location}</p>
        </div>
      </div>

    </div>
  </section>`;
}
