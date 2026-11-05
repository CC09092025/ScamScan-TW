function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme
const theme = localStorage.getItem("theme");
setTheme(theme === "dark");

// Attach event listener after header loads
document.addEventListener("headerLoaded", () => {
  const themeButton = document.querySelector("#theme-toggle");

  themeButton?.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    setTheme(isDark);
  });
});
