document.addEventListener("handlebars-rendered", () => {
  document
    .querySelectorAll(".page-navigation__list-item-button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const currentSubmenu = button.parentNode.querySelector(
          ".page-navigation__list-item-submenu",
        );
        // reset button
        document
          .querySelectorAll(".page-navigation__list-item-button")
          .forEach((item) => {
            if (item !== button)
              item.classList.remove(
                "page-navigation__list-item-button--is-open",
              );
          });
        // reset submenu
        document
          .querySelectorAll(".page-navigation__list-item-submenu")
          .forEach((item) => {
            if (item !== currentSubmenu)
              item.classList.remove(
                "page-navigation__list-item-submenu--is-open",
              );
          });
          // set button state
          button.classList.toggle('page-navigation__list-item-button--is-open');
          // set submenu state
          currentSubmenu.classList.toggle(
          "page-navigation__list-item-submenu--is-open",
        );
      });
    });
});
