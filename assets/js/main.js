document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-language-select]").forEach((select) => {
    select.addEventListener("change", () => {
      window.location.href = select.value;
    });
  });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
