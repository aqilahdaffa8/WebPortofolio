export function renderMobileCarousel(images, projectId) {
  if (!images || images.length === 0) return "";

  const slides = images.map((src, i) => `
    <div class="carousel-slide ${i === 0 ? "active" : ""}" data-index="${i}" style="position:absolute;inset:0;overflow:hidden;transition:opacity 0.4s ease;opacity:${i === 0 ? "1" : "0"};z-index:${i === 0 ? "10" : "0"};pointer-events:${i === 0 ? "auto" : "none"};">
      <img
        src="${src}"
        alt="Screenshot ${i + 1}"
        style="width:100%;height:104.5%;object-fit:cover;object-position:top;display:block;transform:translateY(-4.2%);pointer-events:none;"
        loading="lazy"
        draggable="false"
      >
    </div>`
  ).join("");

  const dots = images.map((_, i) => `
    <button type="button" class="carousel-dot" data-dot="${i}" style="width:${i === 0 ? "18px" : "6px"};height:6px;border-radius:9999px;border:none;cursor:pointer;padding:0;transition:all 0.3s ease;background:${i === 0 ? "#ffffff" : "rgba(255,255,255,0.35)"};" aria-label="Slide ${i + 1}"></button>`
  ).join("");

  return `
  <div class="mobile-carousel" data-id="${projectId}" style="position:relative;width:100%;height:100%;user-select:none;touch-action:pan-y;">
    <!-- Slides container -->
    <div class="carousel-slides-wrapper" style="position:relative;width:100%;height:100%;overflow:hidden;">
      ${slides}
    </div>

    ${images.length > 1 ? `
    <!-- Prev / Next buttons -->
    <button type="button" class="carousel-prev" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);z-index:25;width:34px;height:34px;border-radius:9999px;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;cursor:pointer;color:#ffffff;box-shadow:0 4px 14px rgba(0,0,0,0.5);transition:background 0.2s, transform 0.2s;" aria-label="Previous slide">
      <svg style="pointer-events:none;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button type="button" class="carousel-next" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);z-index:25;width:34px;height:34px;border-radius:9999px;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;cursor:pointer;color:#ffffff;box-shadow:0 4px 14px rgba(0,0,0,0.5);transition:background 0.2s, transform 0.2s;" aria-label="Next slide">
      <svg style="pointer-events:none;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <!-- Dots -->
    <div class="carousel-dots-container" style="position:absolute;bottom:12px;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:6px;z-index:25;pointer-events:auto;">
      ${dots}
    </div>
    ` : ""}

    <!-- Counter -->
    <span class="carousel-counter" style="position:absolute;top:10px;right:10px;z-index:25;font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.85);background:rgba(0,0,0,0.6);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);padding:2px 8px;border-radius:9999px;border:1px solid rgba(255,255,255,0.15);pointer-events:none;">
      1 / ${images.length}
    </span>
  </div>`;
}

// Inline SVGs for social icons (Lucide tidak punya LinkedIn)
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;

export function renderProjectCard(project) {
  const techChips = project.tech
    .map(
      t => `
    <span class="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70">
      ${t}
    </span>`
    )
    .join("");

  const highlightsHtml = (project.highlights || [])
    .map(
      (h, i) => `
    <li class="flex items-start gap-2.5 py-1.5 text-xs sm:text-sm text-white/75 border-t border-white/10">
      <span class="font-mono text-xs text-white/40 font-semibold">0${i + 1}</span>
      <span>${h}</span>
    </li>`
    )
    .join("");

  const isMobile = project.category === "mobile";
  const mainImage = project.images && project.images.length > 0
    ? project.images[0]
    : "assets/images/foto_monokrom.png";

  const imageSection = isMobile
    ? `
    <!-- MOBILE CAROUSEL: portrait phone frame -->
    <div class="relative w-full flex justify-center items-center py-4">
      <!-- Phone shell: lebar responsive -->
      <div class="w-[200px] sm:w-[240px] lg:w-[260px] flex-shrink-0" style="position:relative;">
        <!-- Aspect ratio box: 9:20 ≈ phone portrait -->
        <div style="padding-bottom:222%;position:relative;">
          <!-- Outer phone frame -->
          <div style="position:absolute;inset:0;border-radius:2.5rem;border:2px solid rgba(255,255,255,0.2);background:#0a0a0c;box-shadow:0 40px 80px rgba(0,0,0,0.6);overflow:hidden;">
            ${renderMobileCarousel(project.images, project.id)}
          </div>
          <!-- Notch bar -->
          <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:64px;height:16px;background:#0a0a0c;border-radius:9999px;border:1px solid rgba(255,255,255,0.08);z-index:30;pointer-events:none;"></div>
          <!-- Home indicator -->
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:36px;height:4px;background:rgba(255,255,255,0.25);border-radius:9999px;z-index:30;pointer-events:none;"></div>
        </div>
      </div>
    </div>`
    : `
    <!-- WEB IMAGE PREVIEW -->
    <div class="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d10] group-hover:border-white/20 transition-all">
      <img
        src="${mainImage}"
        alt="${project.title} Preview"
        class="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      <span class="absolute top-4 left-4 px-3 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white/90">
        Web Application
      </span>
    </div>`;

  return `
  <article class="project-showcase-card group grid ${isMobile ? "lg:grid-cols-[auto_1fr]" : "lg:grid-cols-2"} gap-8 lg:gap-14 items-center p-6 sm:p-10 lg:p-12 rounded-[2rem] border border-white/10 bg-[#121215] shadow-[0_24px_64px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300">
    
    ${imageSection}

    <!-- CONTENT / DETAILS -->
    <div class="flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3 font-mono text-xs text-white/45">
          <span>${project.role || "Lead Developer"}</span>
          <span class="text-white/60 font-semibold">${project.number} / 05</span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          ${project.title}
        </h3>

        <p class="font-mono text-xs text-white/50 uppercase tracking-wider mb-4">
          ${project.subtitle || ""}
        </p>

        <p class="text-sm sm:text-base leading-relaxed text-white/65 mb-6">
          ${project.description}
        </p>

        <!-- Highlights -->
        <div class="mb-6">
          <p class="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Key Highlights</p>
          <ul class="space-y-1">
            ${highlightsHtml}
          </ul>
        </div>
      </div>

      <!-- Tech Stack & Links -->
      <div class="pt-6 border-t border-white/10 flex flex-col gap-5">
        <div class="flex flex-wrap gap-2">
          ${techChips}
        </div>

        <div class="flex flex-wrap items-center gap-4">
          ${
            project.repoUrl
              ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-all">
              ${ICON_GITHUB}
              <span>View Repository</span>
            </a>`
              : ""
          }
          ${
            project.demoUrl
              ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white hover:bg-white/10 font-mono text-xs font-semibold uppercase tracking-wider transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              <span>Live Preview</span>
            </a>`
              : ""
          }
        </div>
      </div>

    </div>

  </article>`;
}

export function renderProjectsGrid(projects) {
  if (!projects || projects.length === 0) {
    return `
      <div class="p-12 text-center border border-white/10 rounded-2xl bg-[#121215]">
        <p class="text-white/40 font-mono text-sm">Tidak ada proyek dalam kategori ini.</p>
      </div>`;
  }
  return `
  <div class="flex flex-col gap-12 sm:gap-16">
    ${projects.map(p => renderProjectCard(p)).join("")}
  </div>`;
}

export function renderCategoryFilter(active = "all", counts = {}) {
  const tabs = [
    { key: "all", label: "All Projects", count: counts.all ?? 0 },
    { key: "mobile", label: "Mobile Apps", count: counts.mobile ?? 0 },
    { key: "web", label: "Web Apps", count: counts.web ?? 0 }
  ];

  return `
    <div class="flex items-center gap-2 mb-10 flex-wrap" id="project-filters">
      ${tabs
        .map(tab => {
          const isActive = tab.key === active;
          const activeClass = isActive
            ? "bg-white text-black border-white shadow-sm"
            : "bg-white/[0.04] text-white/60 hover:text-white border-white/10 hover:border-white/20";
          return `
          <button data-filter="${tab.key}" class="filter-tab-btn px-4 py-2 rounded-full text-xs font-mono font-medium border transition-all flex items-center gap-2 ${activeClass}">
            <span>${tab.label}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-black/15 text-black" : "bg-white/10 text-white/80"}">${tab.count}</span>
          </button>`;
        })
        .join("")}
    </div>`;
}

// Global reusable carousel initializer
export function initCarousels() {
  document.querySelectorAll(".mobile-carousel").forEach(carousel => {
    if (carousel.dataset.initialized === "true") return;
    carousel.dataset.initialized = "true";

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");
    const btnPrev = carousel.querySelector(".carousel-prev");
    const btnNext = carousel.querySelector(".carousel-next");
    const counter = carousel.querySelector(".carousel-counter");
    if (!slides.length) return;

    let current = 0;

    function goTo(idx) {
      const nextIdx = (idx + slides.length) % slides.length;
      if (nextIdx === current) return;

      // Hide current
      const oldSlide = slides[current];
      oldSlide.style.opacity = "0";
      oldSlide.style.zIndex = "0";
      oldSlide.style.pointerEvents = "none";
      oldSlide.classList.remove("active");

      if (dots[current]) {
        dots[current].style.background = "rgba(255,255,255,0.35)";
        dots[current].style.width = "6px";
      }

      // Show next
      current = nextIdx;
      const newSlide = slides[current];
      newSlide.style.opacity = "1";
      newSlide.style.zIndex = "10";
      newSlide.style.pointerEvents = "auto";
      newSlide.classList.add("active");

      if (dots[current]) {
        dots[current].style.background = "#ffffff";
        dots[current].style.width = "18px";
      }

      // Update counter text
      if (counter) {
        counter.textContent = `${current + 1} / ${slides.length}`;
      }
    }

    btnPrev?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current - 1);
    });

    btnNext?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current + 1);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        goTo(i);
      });
    });

    // Touch swipe support
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    carousel.addEventListener("touchstart", (e) => {
      if (!e.touches || e.touches.length === 0) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    carousel.addEventListener("touchend", (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      // Check horizontal swipe threshold
      if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          goTo(current + 1);
        } else {
          goTo(current - 1);
        }
      }
    }, { passive: true });
  });
}
