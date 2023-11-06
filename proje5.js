const searchform = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

const searchBtn  = document.querySelector("#search-btn");
const cartBtn  = document.querySelector("#cart-btn");
const menuBtn  = document.querySelector("#menu-btn");

searchBtn.addEventListener("click" , function(){
    searchform.classList.toggle("active");
    document.addEventListener("click", function (e) {
     if(
        !e.composedPath().includes(searchBtn) && 
        !e.composedPath().includes(searchBtn)
        ) {
        searchform.classList.remove("active"); 
     }
    });
});

cartBtn.addEventListener("click" , function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
     if(
        !e.composedPath().includes(cartBtn) && 
        !e.composedPath().includes(cartItem)
        ) {
        cartItem.classList.remove("active"); 
     }
    });
});

menuBtn.addEventListener("click" , function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
     if(
        !e.composedPath().includes(menuBtn) && 
        !e.composedPath().includes(navbar)
        ) {
        cartItem.classList.remove("active"); 
     }
    });
});