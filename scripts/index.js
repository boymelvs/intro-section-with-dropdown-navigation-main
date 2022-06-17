"use strict";

/* add/remove classes to make element vissible */
const addRemoveClasses = (elem) => {
   if (elem.classList.contains("show")) {
      elem.classList.remove("active");

      setTimeout(() => {
         elem.classList.remove("show");
      }, 300);

      /* add show active classes */
   } else {
      elem.classList.add("show");

      setTimeout(() => {
         elem.classList.add("active");
      }, 0.1);
   }
};

const getBurgerCheckbox = document.querySelector(".burger_checkbox");
const getBurgerMenu = document.querySelector(".burger_container");
const getMenu = document.querySelector(".menus_login_register_container");

getBurgerMenu.addEventListener("click", (e) => {
   addRemoveClasses(getMenu);
});

window.addEventListener("keydown", (e) => {
   if (e.key === "Escape" && getMenu.classList.contains("active")) {
      addRemoveClasses(getMenu);
      getBurgerCheckbox.checked = false;
   }
});
