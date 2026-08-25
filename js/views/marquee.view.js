export function renderMarquee(skills) {
  const items = [...skills.programming, ...skills.framework];
  const track = items.map(s => `<span class="marquee-item"><span class="dot"></span>${s}</span>`).join("");
  // digandakan supaya loop terlihat mulus tanpa jeda
  return `
  <div class="marquee-wrap">
    <div class="marquee-track">${track}${track}</div>
  </div>`;
}
