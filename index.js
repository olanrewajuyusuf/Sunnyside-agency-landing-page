let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");


menu.addEventListener("click", function(){
    menu.classList.toggle("burger");
    if (!menu.classList.contains("burger")){
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})
window.addEventListener("resize", function(){
    if (this.window.innerWidth > 800){
        nav.style.display = "flex"
    } else {
        nav.style.display = "none";
    }
})


