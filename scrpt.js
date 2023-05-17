let menu = document.querySelector(".ham")
let cross = document.querySelector(".close")
let popup = document.querySelector(".popup")
let links =  document.querySelector(".navi-links")

console.log(menu)
console.log(cross)


popup.addEventListener("click",result)
function result() {
    if (cross.style.display == "") {
        menu.style.display = "none"
        cross.style.display = "block"
        popup.classList.add("popup2")
        links.classList.add("navi-linkspop")
    } else if (cross.style.display == "block") {
        menu.style.display = "block"
        cross.style.display = ""
        popup.classList.remove("popup2")
        links.classList.remove("navi-linkspop")
    }
}



