// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu-tehningrat diklik
document.querySelector("#menu-tehningrat").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik di luar sidebar untuk menghilangkan nav
const tehningrat = document.querySelector("#menu-tehningrat");

document.addEventListener("click", function (e) {
  if (!tehningrat.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
