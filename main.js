const btn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")

btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})
