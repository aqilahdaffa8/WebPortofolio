export function initNavSpy(activePage = "home") {
  const header = document.getElementById("site-header");
  const nav = document.getElementById("nav-links");
  const indicator = document.getElementById("nav-indicator");
  if (!nav || !indicator) return;

  const links = Array.from(nav.querySelectorAll("a[data-key]"));

  function moveIndicatorTo(link) {
    if (!link) {
      indicator.classList.remove("is-visible");
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicator.style.left = (linkRect.left - navRect.left) + "px";
    indicator.style.width = linkRect.width + "px";
    indicator.classList.add("is-visible");
  }

  function setActive(key) {
    links.forEach((l) => l.classList.toggle("active", l.dataset.key === key));
    moveIndicatorTo(links.find((l) => l.dataset.key === key));
  }

  // Hover sementara menggeser indikator, lalu kembali ke link aktif saat mouse pergi
  links.forEach((l) => {
    l.addEventListener("mouseenter", () => moveIndicatorTo(l));
  });
  nav.addEventListener("mouseleave", () => {
    const active = links.find((l) => l.classList.contains("active"));
    moveIndicatorTo(active);
  });

  // Header elevation saat scroll
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  });

  if (activePage === "home") {
    // Scroll-spy: highlight nav sesuai section yang sedang dilihat
    const idToKey = {
      about: "about",
      "projects-preview": "projects",
      "certificates-preview": "certificates",
      skills: "skills",
      contact: "contact"
    };
    const sections = Object.keys(idToKey)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(idToKey[entry.target.id]);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    // Sembunyikan indikator saat masih di hero (sebelum section manapun terlihat)
    window.addEventListener("scroll", () => {
      if (window.scrollY < 120) {
        links.forEach((l) => l.classList.remove("active"));
        indicator.classList.remove("is-visible");
      }
    });
  } else {
    // Halaman statis (Proyek/Sertifikat): posisikan indikator ke link aktif
    window.addEventListener("resize", () => {
      const active = links.find((l) => l.classList.contains("active"));
      moveIndicatorTo(active);
    });
    setTimeout(() => {
      const active = links.find((l) => l.classList.contains("active"));
      moveIndicatorTo(active);
    }, 50);
  }
}
