/* Shared client logic: theme toggle + floating clouds. */

// ---------- Light / Dark mode ----------
(function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const sync = () => {
      const t = document.documentElement.getAttribute("data-theme");
      btn.textContent = t === "dark" ? "🌙" : "☀️";
    };
    sync();
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      sync();
    });
  });
})();

// ---------- Floating cloud backdrop ----------
document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".cloud-field");
  if (field && !field.children.length) {
    ["c1", "c2", "c3", "c4"].forEach((c) => {
      const s = document.createElement("span");
      s.className = c;
      field.appendChild(s);
    });
  }
});

// ---------- Home: provider carousel (data from Node API) ----------
async function initCarousel() {
  const track = document.getElementById("slides");
  if (!track) return;
  const dotsWrap = document.getElementById("dots");
  let providers = [];
  try {
    providers = await (await fetch("/api/providers")).json();
  } catch (e) {
    track.innerHTML = '<div class="loading">Could not load providers.</div>';
    return;
  }

  track.innerHTML = providers
    .map(
      (p) => `
      <div class="slide" style="background:${p.sky}">
        <div>
          <h3>${p.name}</h3>
          <div class="tag">${p.tagline}</div>
          <p>${p.blurb}</p>
          <span class="pill">${p.short}</span>
        </div>
        <div class="logo-plate"><img src="${p.image}" alt="${p.name} logo"></div>
      </div>`
    )
    .join("");

  dotsWrap.innerHTML = providers
    .map((_, i) => `<button data-i="${i}" aria-label="slide ${i + 1}"></button>`)
    .join("");

  let idx = 0;
  const dots = [...dotsWrap.children];
  const go = (i) => {
    idx = (i + providers.length) % providers.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === idx));
  };
  dots.forEach((d) => d.addEventListener("click", () => go(+d.dataset.i)));
  document.getElementById("prev").addEventListener("click", () => go(idx - 1));
  document.getElementById("next").addEventListener("click", () => go(idx + 1));
  go(0);
  let timer = setInterval(() => go(idx + 1), 5000);
  track.parentElement.addEventListener("mouseenter", () => clearInterval(timer));
  track.parentElement.addEventListener("mouseleave", () => {
    timer = setInterval(() => go(idx + 1), 5000);
  });
}

// ---------- About: team grid (data from Node API) ----------
async function initTeam() {
  const grid = document.getElementById("teamGrid");
  if (!grid) return;
  try {
    const data = await (await fetch("/api/team")).json();
    const countEl = document.getElementById("teamCount");
    if (countEl) countEl.textContent = data.count;
    grid.innerHTML = data.members
      .map(
        (m) => `
        <div class="member">
          <div class="avatar"><img src="${m.avatar}" alt="${m.name}"></div>
          <h3>${m.name}</h3>
          <div class="role">${m.role}</div>
          <p class="bio">${m.bio}</p>
          <span class="cloud-tag">Best CP · ${m.bestCP || "—"}</span>
        </div>`
      )
      .join("");
  } catch (e) {
    grid.innerHTML = '<div class="loading">Could not load the team.</div>';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initTeam();
});
