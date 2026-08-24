export function initContactForm(endpoint) {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");
  const button = document.getElementById("contact-submit");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!endpoint || endpoint.includes("xxxxxxxx")) {
      status.textContent = "Form belum terhubung — atur formEndpoint di profile.model.js dulu.";
      status.style.color = "#B91C1C";
      return;
    }

    button.disabled = true;
    button.textContent = "Mengirim...";
    status.textContent = "";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.textContent = "Pesan terkirim! Terima kasih, saya akan segera membalas.";
        status.style.color = "var(--accent-2)";
        form.reset();
      } else {
        status.textContent = "Gagal mengirim. Coba lagi atau hubungi lewat email langsung.";
        status.style.color = "#B91C1C";
      }
    } catch (err) {
      status.textContent = "Gagal mengirim. Periksa koneksi internet Anda.";
      status.style.color = "#B91C1C";
    } finally {
      button.disabled = false;
      button.textContent = "Kirim Pesan";
    }
  });
}