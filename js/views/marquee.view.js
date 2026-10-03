export function renderMarquee(skills) {
  const items = [
    "Flutter",
    "Dart",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Firebase",
    "SQLite",
    "Hive",
    "Tailwind CSS",
    "Git & GitHub",
    "RESTful API",
    "AWS Cloud",
    "Clean Architecture"
  ];

  const track = items
    .map(
      item => `
    <span class="inline-flex items-center gap-4 text-sm sm:text-base font-mono uppercase tracking-widest text-white/45">
      <span>${item}</span>
      <span class="text-white/20">✦</span>
    </span>`
    )
    .join("");

  return `
  <div class="relative z-20 bg-[#0d0d10] border-t border-[#a0b4c8]/30 overflow-hidden">
    <div class="py-8">
      <div class="marquee-container">
        <div class="marquee-track">
          ${track}
          ${track}
        </div>
      </div>
    </div>
  </div>`;
}
