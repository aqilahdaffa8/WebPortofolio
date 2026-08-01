export function initTerminal(containerId, lines) {
  const body = document.getElementById(containerId);
  if (!body) return;
  let li = 0, ci = 0;

  function typeLine() {
    if (li >= lines.length) return;
    const line = lines[li];
    if (ci === 0) {
      const div = document.createElement("div");
      div.id = `${containerId}-line-${li}`;
      div.innerHTML = `<span style="color:var(--text-muted)">${line.prefix}</span><span style="color:${line.color}"></span>`;
      body.appendChild(div);
    }
    const span = document.querySelector(`#${containerId}-line-${li} span:last-child`);
    if (ci < line.text.length) {
      span.textContent += line.text[ci];
      ci++;
      setTimeout(typeLine, 22);
    } else {
      li++;
      ci = 0;
      setTimeout(typeLine, 260);
    }
  }
  typeLine();
}
