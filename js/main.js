const menuBtn = document.getElementById("mobile-menu");
const menuItem = document.getElementById("navbar");
menuBtn.addEventListener("click", (e) => {
  menuItem.classList.toggle("show");
  if (menuItem.classList.contains("show")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
  e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (
    menuItem.classList.contains("show") &&
    !menuItem.contains(e.target) &&
    e.target !== menuBtn
  ) {
    menuItem.classList.remove("show");
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
