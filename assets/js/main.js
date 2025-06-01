  AOS.init();


// window.addEventListener("load", function () {
//   // Add delay before triggering "loaded"
//   setTimeout(() => {
//     document.body.classList.add("loaded");

//     // Then fade out and remove preloader
//     setTimeout(() => {
//       const preloader = document.getElementById("pre_loader");
//       if (preloader) {
//         preloader.remove();
//       }
//     }, 500); // Fade-out duration
//   }, 2000); // Delay after page is fully loaded (in ms)
// });


var back_to_top = $('#back_to_top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    back_to_top.addClass('show');
    } else {
    back_to_top.removeClass('show');
    }
  });
  
  back_to_top.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });



let body = document.querySelector("#body");
let nav_collapse = document.querySelector("#nav_collapse");
let ham_btn = document.querySelector("#ham_btn");
let ham_btn_icon = document.querySelector("#ham_btn_icon");



ham_btn.addEventListener("click", function(){
    nav_collapse.classList.toggle("nav_show");
    ham_btn_icon.classList.toggle("icon-ham_btn");
    ham_btn_icon.classList.toggle("icon-close_icon");
    back_to_top.toggle("show")
    body.classList.toggle("body_overflow");

})




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  
  },
});



const swiperElement = document.querySelector("#trusted_companies_swiper");
const trustedCompaniesSwiper = new Swiper('#trusted_companies_swiper', {
    slidesPerView: 3,
  spaceBetween: 10,
      speed: 3000,
      parallax: true,
      loop: true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
       breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  
  },
    });


// trusted companies swiper pause play hover
swiperElement.addEventListener('mouseenter', () => {
  trustedCompaniesSwiper.autoplay.stop(); 
});
swiperElement.addEventListener('mouseleave', () => {
  trustedCompaniesSwiper.autoplay.start(); 
});



      var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
  spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
       breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  
  },
    });






// popover JS initialization
window.addEventListener("load", function () {
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
  new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'hover',
    html: true,
  })
);
});

