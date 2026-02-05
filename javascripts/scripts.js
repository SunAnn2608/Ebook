// ===== Theme toggle (dark/light) =====
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  root.classList.add("light-theme");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    root.classList.toggle("light-theme");
    localStorage.setItem("theme", root.classList.contains("light-theme") ? "light" : "dark");
  });
}

// ===== Gallery: click thumb -> open "large" in new tab (same file, just bigger in browser) =====
document.querySelectorAll(".gallery-grid a").forEach((a) => {
  a.addEventListener("click", (e) => {
    // открываем в новой вкладке (требование задания)
    // target="_blank" уже стоит в HTML, но оставим как есть
  });
});
