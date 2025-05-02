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
    body.classList.toggle("body_overflow");
})