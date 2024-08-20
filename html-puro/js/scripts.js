/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //Get the button
    let bttButton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        bttButton.style.display = "block";
      } else {
        bttButton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    bttButton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    /*let multipleCardCarousel = document.querySelector("#carouselExampleControls");


    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });


      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;


      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });


      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
    */
    let items = document.querySelectorAll('.carousel.slide.multiple.destaque .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) { 
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    let items4 = document.querySelectorAll('.carousel.slide.multiple.recentes .carousel-item')

    items4.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items4[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    
});
