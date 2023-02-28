const headerBurger = document.querySelector(".header__burger");
const burgerClose = document.querySelector(".header__burger-close");
const navigation = document.querySelector(".navigation");

if (headerBurger) {
  headerBurger.addEventListener("click", () => {
    navigation.classList.add("navigation_active");
    burgerClose.classList.add("header__burger-close_active");
  });
};

burgerClose.addEventListener("click", () => {
  navigation.classList.remove("navigation_active");
  burgerClose.classList.remove("header__burger-close_active");
});

