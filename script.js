let hero = "bgViolet"
const header = document.querySelector("header")
const main = document.querySelector("main")

document.addEventListener("scroll",()=>{
    if(window.scrollY > hero.clientHeight){
        header.classList.add("bgViolet")
    }
})