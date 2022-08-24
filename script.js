window.onload = () => {
  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".close-menu");
  const navItems = document.querySelector(".nav-items");

  const features = document.querySelector("#features");
  const company = document.querySelector("#company");
  const featuresDropdown = document.querySelector("#features-dropdown");
  const companyDropdown = document.querySelector("#company-dropdown");

  toggle(openMenu, navItems, "active");
  toggle(closeMenu, navItems, "active");
  toggle(features, featuresDropdown, "active");
  toggle(company, companyDropdown, "active");
};

function toggle(button, className, toggleClass) {
  button.addEventListener("click", () => {
    className.classList.toggle(toggleClass);
  });
}
