const handleMobileMenu = (e, icon) => {
  e.preventDefault();
  const nav = document.querySelector(".navigation__list");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-active");
  const iconChange = nav.classList.contains("active") ? "close" : "menu";
  icon.childNodes[0].textContent = iconChange;
  const closeNavAfterMenuClick = () => {
    document.body.classList.remove("menu-active");
    nav.classList.remove("active");
  };
  const menuItems = document.querySelectorAll(".navigation__item");
  menuItems.forEach((item) =>
    item.addEventListener("click", closeNavAfterMenuClick())
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".hamburger");
  mobileMenuIcon.addEventListener("click", (e) =>
    handleMobileMenu(e, mobileMenuIcon)
  );
});
