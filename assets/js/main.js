
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