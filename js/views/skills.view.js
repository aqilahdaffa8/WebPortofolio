export function renderSkills(skills) {
  const chips = arr =>
    arr
      .map(
        s => `
    <span class="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/80 hover:border-white/25 hover:text-white transition-colors">
      ${s}
    </span>`
      )
      .join("");

  return `
  <section id="skills" class="relative z-20 px-6 py-24 sm:px-10 sm:py-32 lg:px-20 bg-[#09090b] border-t border-white/10 overflow-hidden">
    
    <div class="section-watermark text-[clamp(6rem,18vw,16rem)] top-12">
      SKILLS
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      
      <div class="mb-12">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/45 mb-2">Technical Proficiency</p>
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Skills & Technologies</h2>
        <p class="text-white/50 text-sm mt-2">Tools, languages, and frameworks utilized to build robust digital solutions.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        
        <div class="p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-[#121215] shadow-lg">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
            <i data-lucide="code" class="w-5 h-5"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Languages & Fundamentals</h3>
          <p class="text-sm text-white/50 leading-relaxed mb-6">Core programming languages used for algorithmic logic, system design, and software implementation.</p>
          <div class="flex flex-wrap gap-2.5">
            ${chips(skills.programming)}
          </div>
        </div>

        <div class="p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-[#121215] shadow-lg">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
            <i data-lucide="layers" class="w-5 h-5"></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Frameworks & Cloud Services</h3>
          <p class="text-sm text-white/50 leading-relaxed mb-6">Modern mobile frameworks, fullstack tools, persistent databases, and deployment platforms.</p>
          <div class="flex flex-wrap gap-2.5">
            ${chips(skills.framework)}
          </div>
        </div>

      </div>

    </div>
  </section>`;
}
