export function renderSkills(skills) {
  const chips = arr => arr.map(s => `<span class="tag-chip"><i data-lucide="hash"></i>${s}</span>`).join("");

  return `
  <section id="skills" class="relative overflow-hidden max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-hand text-2xl accent-2 mb-1 reveal">perkakas sehari-hari</p>
    <h2 class="font-display text-4xl mb-10 reveal">Skills & Tools</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="surface rounded-2xl p-6 reveal reveal-1">
        <div class="icon-circle mb-4"><i data-lucide="code-2" class="w-4 h-4"></i></div>
        <p class="font-hand text-2xl accent mb-1">Programming Language</p>
        <p class="text-sm text-muted mb-4">Bahasa pemrograman yang saya pakai untuk membangun logika dan tampilan aplikasi.</p>
        <div class="flex flex-wrap gap-2">${chips(skills.programming)}</div>
      </div>
      <div class="surface rounded-2xl p-6 reveal reveal-2">
        <div class="icon-circle mb-4"><i data-lucide="layers" class="w-4 h-4"></i></div>
        <p class="font-hand text-2xl accent mb-1">Framework & Technology</p>
        <p class="text-sm text-muted mb-4">Framework dan tools yang membantu proses build sampai deploy aplikasi.</p>
        <div class="flex flex-wrap gap-2">${chips(skills.framework)}</div>
      </div>
    </div>
  </section>`;
}
