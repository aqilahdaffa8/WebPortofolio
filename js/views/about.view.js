export function renderAbout(profile) {
  const paragraphs = profile.bio.map(p => `<p>${p}</p>`).join("");
  const langBadges = profile.languages.map(l => `<span class="badge">${l}</span>`).join("");

  return `
  <section id="about" class="max-w-6xl mx-auto px-5 md:px-8 py-24 border-t border-blueprint">
    <p class="font-mono text-xs accent mb-2">~/about</p>
    <h2 class="font-display text-3xl md:text-4xl font-700 mb-10">Tentang Saya</h2>

    <div class="grid md:grid-cols-5 gap-12">
      <div class="md:col-span-3 space-y-4 text-muted leading-relaxed">
        ${paragraphs}
        <div class="flex gap-3 pt-2 flex-wrap">${langBadges}</div>
      </div>

      <div class="md:col-span-2 grid grid-cols-2 gap-4">
        <div class="surface rounded-xl p-5">
          <i data-lucide="smartphone" class="w-5 h-5 accent mb-3"></i>
          <p class="text-sm font-medium">Mobile Dev</p>
          <p class="text-xs text-muted mt-1">Flutter, Dart</p>
        </div>
        <div class="surface rounded-xl p-5">
          <i data-lucide="database" class="w-5 h-5 accent mb-3"></i>
          <p class="text-sm font-medium">Database</p>
          <p class="text-xs text-muted mt-1">SQLite, Hive, Firebase</p>
        </div>
        <div class="surface rounded-xl p-5">
          <i data-lucide="cloud" class="w-5 h-5 accent mb-3"></i>
          <p class="text-sm font-medium">Backend</p>
          <p class="text-xs text-muted mt-1">Supabase, REST API</p>
        </div>
        <div class="surface rounded-xl p-5">
          <i data-lucide="git-branch" class="w-5 h-5 accent mb-3"></i>
          <p class="text-sm font-medium">Tools</p>
          <p class="text-xs text-muted mt-1">Git & GitHub</p>
        </div>
      </div>
    </div>
  </section>`;
}
