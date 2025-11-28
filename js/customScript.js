// <!-- Minimal JS: mobile nav + year -->
const btn = document.getElementById("mobileNavBtn");
const menu = document.getElementById("mobileNav");
btn &&
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
