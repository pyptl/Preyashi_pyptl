const nav_icon=document.querySelector(".nav-icon");
const nav_menu=document.querySelector(".nav-menu");

nav_icon.addEventListener("click",()=>{
    nav_icon.classList.toggle("active");
    nav_menu.classList.toggle("active");
    

})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    nav_icon.classList.remove("active");
    nav_menu.classList.remove("active");
}))


