(function () {
  "use strict";

  if (mainMenuToggle) && (mainMenu) {
    mainMenuToggle.addEventListener("click", () => {
      openCloseMainMenu ();
    });

    mainMenu.addEventListener("click", () => {
      openCloseMainMenu ();
    });
  }
})();

function openCloseMainMenu () {

  const mainMenuToggle = document.getElementById("main-menu-toggle");
  const mainMenu = document.getElementById("main-menu");
  const isExpanded = mainMenuToggle.getAttribute("aria-expanded");
      mainMenu.classList.toggle("show");
      mainMenuToggle.setAttribute(
        "aria-expanede",
        isExpanded === "false" ? true : false
      );
} 