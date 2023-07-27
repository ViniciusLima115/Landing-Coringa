
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  });


  const menuItems = document.querySelectorAll('.header__menu-item a');

  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      const target = document.querySelector(item.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

