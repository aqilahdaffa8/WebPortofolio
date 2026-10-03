const ICON_ARROW_UP_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;
const ICON_FILE_TEXT = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`;

export function renderCertificateCard(cert, compact = false) {
  const highlightsHtml = (cert.highlights || [])
    .map(
      (h, i) => `
    <li class="flex items-start gap-2.5 py-2 text-xs text-white/80 border-t border-white/10">
      <span class="font-mono text-xs text-white/40 font-semibold">0${i + 1}</span>
      <span class="font-medium tracking-tight">${h}</span>
    </li>`
    )
    .join("");

  if (compact) {
    // Compact vertical card untuk 2-column grid
    return `
  <article class="certificate-card group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#131316] text-white shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-white/25 hover:-translate-y-1">
    
    <!-- IMAGE AREA -->
    <div class="relative aspect-[16/9] overflow-hidden bg-black/40">
      <img 
        src="${cert.image}" 
        alt="${cert.title}" 
        class="w-full h-full object-cover object-center grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" 
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
      
      <!-- Big Number Top-Right -->
      <span class="absolute top-4 right-5 font-mono text-3xl font-extrabold text-white/90 drop-shadow-lg select-none">
        ${cert.number}
      </span>
      
      <!-- Date Bottom-Left -->
      <div class="absolute bottom-4 left-5 right-5 font-mono text-xs uppercase tracking-wider text-white/80 flex items-center justify-between flex-wrap gap-2">
        <span class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
          ${cert.date}
        </span>
        <span class="text-white/50 text-[11px]">ID: ${cert.certId}</span>
      </div>
    </div>

    <!-- DETAILS AREA -->
    <div class="flex flex-col flex-1 p-6">
      <div class="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 mb-3">
        <span>${cert.category || "Professional Track"}</span>
        <span class="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold text-white/80">${cert.badge || "Verified"}</span>
      </div>

      <h3 class="text-lg font-bold tracking-tight text-white mb-1 leading-snug">
        ${cert.title}
      </h3>
      
      <p class="font-mono text-xs uppercase tracking-wider text-white/60 mb-3">
        ${cert.issuer}
      </p>

      <p class="text-xs leading-relaxed text-white/55 mb-4 line-clamp-3">
        ${cert.description}
      </p>

      <!-- Highlights condensed -->
      <ol class="mb-5">
        ${highlightsHtml}
      </ol>

      <!-- Actions -->
      <div class="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
        ${
          cert.verifyUrl && cert.verifyUrl !== "#"
            ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-all">
            <span>Verify</span>
            ${ICON_ARROW_UP_RIGHT}
          </a>`
            : ""
        }
        ${
          cert.pdfUrl
            ? `
          <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/5 font-mono text-xs transition-colors">
            ${ICON_FILE_TEXT}
            <span>PDF</span>
          </a>`
            : ""
        }
      </div>
    </div>

  </article>`;
  }

  // Full wide card (untuk homepage preview)
  return `
  <article class="certificate-card group relative grid grid-cols-1 lg:grid-cols-[1.28fr_0.92fr] overflow-hidden rounded-[2rem] border border-white/10 bg-[#131316] text-white shadow-[0_32px_90px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/25">
    
    <!-- LEFT COLUMN: DETAILS & HIGHLIGHTS -->
    <div class="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
      <div>
        <div class="flex flex-wrap items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-white/50 mb-4">
          <span>${cert.category || "Professional Track"}</span>
          <span class="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold text-white/80">${cert.badge || "Verified"}</span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-snug">
          ${cert.title}
        </h3>
        
        <p class="font-mono text-xs uppercase tracking-wider text-white/70 mb-6">
          ${cert.issuer}
        </p>

        <p class="text-sm sm:text-base leading-relaxed text-white/60 mb-8">
          ${cert.description}
        </p>
      </div>

      <div>
        <p class="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Key Highlights</p>
        <ol class="grid sm:grid-cols-2 gap-x-6">
          ${highlightsHtml}
        </ol>
      </div>

      <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
        ${
          cert.verifyUrl && cert.verifyUrl !== "#"
            ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white/90 hover:scale-[1.02] transition-all">
            <span>Verify Credential</span>
            ${ICON_ARROW_UP_RIGHT}
          </a>`
            : ""
        }
        ${
          cert.pdfUrl
            ? `
          <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/5 font-mono text-xs transition-colors">
            ${ICON_FILE_TEXT}
            <span>View Certificate</span>
          </a>`
            : ""
        }
      </div>
    </div>

    <!-- RIGHT COLUMN: CERTIFICATE IMAGE WITH LARGE MONO NUMBER & BADGE -->
    <div class="relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 bg-black/40 overflow-hidden">
      <img 
        src="${cert.image}" 
        alt="${cert.title}" 
        class="w-full h-full object-cover object-center grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" 
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>
      
      <!-- Big Index Number Top-Right -->
      <span class="absolute top-5 right-6 font-mono text-4xl sm:text-5xl font-extrabold text-white/90 drop-shadow-lg select-none">
        ${cert.number}
      </span>
      
      <!-- Date & ID Bottom-Left -->
      <div class="absolute bottom-5 left-6 right-6 font-mono text-xs uppercase tracking-wider text-white/80 flex items-center justify-between flex-wrap gap-2">
        <span class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
          ${cert.date}
        </span>
        <span class="text-white/50 text-[11px]">ID: ${cert.certId}</span>
      </div>
    </div>

  </article>`;
}

export function renderCertificatesGrid(certs, { visibleCount = certs.length, twoColumn = false } = {}) {
  const displayed = certs.slice(0, visibleCount);

  if (twoColumn) {
    return `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
    ${displayed.map(c => renderCertificateCard(c, true)).join("")}
  </div>`;
  }

  return `
  <div class="flex flex-col gap-10 sm:gap-14">
    ${displayed.map(c => renderCertificateCard(c, false)).join("")}
  </div>`;
}
