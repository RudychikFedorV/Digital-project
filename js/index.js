function navToggle() {
  document.getElementById("headerUl").classList.toggle("_active");
  document.getElementById("headerBackdrop").classList.toggle("_active");
}
window.onload = function () {
  const swiper = new Swiper(".swiper", {
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".welcome-left__number",
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: "#arrow-right",
      prevEl: "#arrow-left",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      300: {
        slidesPerView: "auto",
      },
      992: {
        slidesPerView: "auto",
      },
    },
  });
};
document.getElementById("copyright").textContent = new Date().getFullYear();

AOS.init();