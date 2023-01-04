const burgerButton = document.querySelector(".nav_toggle");
const navigation = document.querySelector("nav")
 burgerButton.addEventListener("click", toggleNav)

function toggleNav(){
 burgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}