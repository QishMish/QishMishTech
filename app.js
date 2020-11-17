const hamburger = document.querySelector("#hamburger-menu");
const close = document.querySelector("#close");
const navbar = document.querySelector(".navbar");


hamburger.addEventListener("click", function(){
    navbar.classList.add("sidebar");
});

close.addEventListener("click", function(){
    navbar.classList.remove("sidebar");
});

const modalButton = document.querySelector(".button")
const modal = document.querySelector(".modal")

modalButton.addEventListener("click", function(){
    if(modal.classList.contains("none")){
        modal.classList.remove("none")
    }else{
        modal.classList.add("show");
    }
    
});

const modalClose = document.querySelector("#modal-close")

modalClose.addEventListener("click", function(){
    modal.classList.add("none");
});