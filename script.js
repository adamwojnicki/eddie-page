const handleMobileMenu = (icon) => {
  const nav = document.querySelector(".navigation__list");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-active");
  const iconChange = nav.classList.contains("active") ? "close" : "menu";
  icon.childNodes[0].textContent = iconChange;
  const menuItems = document.querySelectorAll(".navigation__item a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => closeNavAfterMenuClick(nav, icon));
  });
};

const closeNavAfterMenuClick = (nav, icon) => {
  document.body.classList.remove("menu-active");
  nav.classList.remove("active");
  icon.childNodes[0].textContent = "menu";
  console.log(icon);
};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".hamburger");
  mobileMenuIcon.addEventListener("click", () =>
    handleMobileMenu(mobileMenuIcon)
  );
  AOS.init({
    offset: 300,
    delay: 200,
    duration: 1000,
    easing: "ease",
    once: false,
    mirror: false,
  });
});
