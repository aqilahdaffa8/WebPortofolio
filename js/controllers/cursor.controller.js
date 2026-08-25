export function initCustomCursor() {
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  window.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.classList.add("is-active");
  });

  window.addEventListener("mouseleave", () => dot.classList.remove("is-active"));

  const hoverables = "a, button, .tilt-card, input, textarea";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverables)) dot.classList.add("is-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverables)) dot.classList.remove("is-hover");
  });
}
