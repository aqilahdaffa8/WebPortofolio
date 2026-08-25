export function renderProjectCard(project, index = 0) {
  const techChips = project.tech.map(t => `<span class="tag-chip">${t}</span>`).join("");
  const images = project.images && project.images.length ? project.images : ["assets/images/projects/placeholder.svg"];
  const mainImage = images[0];
  const thumbs = images;
  const rotateClass = index % 2 === 0 ? "rotate-l" : "rotate-r";

  const thumbsHtml = thumbs.length > 1
    ? `<div class="flex gap-2 justify-center mt-4 mb-2" data-thumbs="${project.id}">
        ${thumbs.map((src, i) => `
          <button class="thumb-btn w-10 h-10 rounded-md overflow-hidden border ${i === 0 ? "border-2" : ""} border-blueprint opacity-70 hover:opacity-100 transition" style="${i === 0 ? "border-color:var(--accent);" : ""}" data-src="${src}" data-project="${project.id}">
            <img src="${src}" alt="Screenshot ${project.title} ${i + 1}" class="w-full h-full object-cover">
          </button>`).join("")}
      </div>`
    : "";

  return `
  <article class="flex flex-col h-full reveal reveal-${(index % 3) + 1}">
    <div class="polaroid ${rotateClass} relative mb-2">
      <div class="tape"></div>
      <div class="rounded overflow-hidden w-40 mx-auto surface-2">
        <img src="${mainImage}" alt="Mockup ${project.title}" class="w-full aspect-[9/19] object-cover" data-main-image="${project.id}">
      </div>
      ${thumbsHtml}
    </div>
    <div class="surface rounded-xl p-6 flex flex-col flex-1 -mt-1 tilt-card">
      <h3 class="font-display text-3xl mb-2">${project.title}</h3>
      <p class="text-sm text-muted mb-4">${project.description}</p>
      <div class="mt-auto">
        <div class="flex flex-wrap gap-2 mb-5">${techChips}</div>
        <a href="${project.repoUrl}" target="_blank" class="torn-btn torn-btn-solid w-full text-sm">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          Lihat Repository
        </a>
      </div>
    </div>
  </article>`;
}

export function renderProjectsGrid(projects) {
  return `<div class="grid md:grid-cols-2 gap-x-8 gap-y-14 items-stretch">${projects.map((p, i) => renderProjectCard(p, i)).join("")}</div>`;
}

// Mengganti gambar utama saat thumbnail diklik.
export function initThumbnailSwitcher() {
  document.querySelectorAll(".thumb-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.dataset.project;
      const src = btn.dataset.src;
      const mainImg = document.querySelector(`[data-main-image="${projectId}"]`);
      if (mainImg) mainImg.src = src;
    });
  });
}
