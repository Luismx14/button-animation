let button = document.querySelector(".button");
let move = document.querySelector(".move");
button.addEventListener("click", function(){
    move.classList.toggle("active");
    button.classList.toggle("active")
});