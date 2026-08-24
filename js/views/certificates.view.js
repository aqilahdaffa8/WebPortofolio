export function renderCertificateCard(cert, hidden = false, index = 0) {
  return `
  <div class="cert-card stamp-card overflow-hidden reveal reveal-${(index % 3) + 1} ${hidden ? "cert-hidden" : ""}" data-cert-id="${cert.id}">
    <img src="${cert.image}" alt="Sertifikat ${cert.title}" class="w-full aspect-[400/280] object-cover border-b border-blueprint">
    <div class="p-4">
      <p class="text-sm font-medium leading-snug">${cert.title}</p>
      <p class="text-xs text-muted mt-1">${cert.issuer}</p>
      <p class="text-[10px] text-muted mt-1 mb-3">${cert.date} · ID: ${cert.certId}</p>
      <div class="flex items-center gap-4 text-[11px]">
        <a href="${cert.pdfUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 accent hover:underline font-medium">
          Lihat PDF <i data-lucide="file-text" class="w-3 h-3"></i>
        </a>
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 accent-2 hover:underline font-medium">
          Verifikasi <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
        </a>
      </div>
    </div>
  </div>`;
}

export function renderCertificatesGrid(certs, { visibleCount = certs.length } = {}) {
  const cards = certs.map((c, i) => renderCertificateCard(c, i >= visibleCount, i)).join("");
  return `<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">${cards}</div>`;
}
