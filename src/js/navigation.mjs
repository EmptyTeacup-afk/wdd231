export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector("#global-nav");

  if (!menuButton || !globalNav) {
    throw new Error("Global navigation markup is missing.");
  }

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    globalNav.classList.toggle("show", !isExpanded);
  });
}
