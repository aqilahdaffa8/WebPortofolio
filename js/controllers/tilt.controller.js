export function initTiltCards() {
  if (window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(-4px)";
    });
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}
