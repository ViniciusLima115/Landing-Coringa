
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

 // Adicione um evento de clique ao botão hamburguer para exibir o menu mobile
 const hamburgerMenu = document.querySelector('.hamburger-menu');
 const headerMenuMobile = document.createElement('div');

 headerMenuMobile.className = 'header__menu-mobile';
 headerMenuMobile.innerHTML = document.querySelector('.header__menu').innerHTML;

 hamburgerMenu.addEventListener('click', function () {
   document.body.appendChild(headerMenuMobile);
 });

 // Fechar o menu mobile ao clicar fora dele
 document.addEventListener('click', function (event) {
   if (!headerMenuMobile.contains(event.target) && event.target !== hamburgerMenu) {
     document.body.removeChild(headerMenuMobile);
   }
 });

 // Remover classe sticky do cabeçalho em telas menores
 window.addEventListener('resize', function () {
   const header = document.querySelector('.header');
   if (window.innerWidth <= 768) {
     header.classList.remove('header--sticky');
   } else {
     header.classList.add('header--sticky');
   }
 });



