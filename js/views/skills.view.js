export function renderSkills(skills) {
  const badges = arr => arr.map(s => `<span class="badge">${s}</span>`).join("");

  return `
  <section id="skills" class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-mono text-xs accent mb-2">~/skills</p>
    <h2 class="font-display text-3xl md:text-4xl font-700 mb-10">Technical Skills</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <p class="font-mono text-xs text-muted mb-3">PROGRAMMING LANGUAGE</p>
        <div class="flex flex-wrap gap-2">${badges(skills.programming)}</div>
      </div>
      <div>
        <p class="font-mono text-xs text-muted mb-3">FRAMEWORK & TECHNOLOGY</p>
        <div class="flex flex-wrap gap-2">${badges(skills.framework)}</div>
      </div>
    </div>
  </section>`;
}
