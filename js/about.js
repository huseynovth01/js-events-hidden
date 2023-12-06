// var overlay = document.querySelector(".overlay");
// var information_center = document.querySelector(".information_center");
// var openBtn = document.querySelector(".btn_phone");
// var closeBtn = document.querySelector(".btn_x");

// function openBtn() {
//     information_center.classList.remove("hidden")
//     overlay.classList.remove("hidden")
// }

// function closeBtn (){
//     information_center.classList.add("hidden")
//     overlay.classList.add("hidden")
// }

// openBtn.addEventListener("click",openBtn);
// closeBtn.addEventListener("click",closeBtn);
// overlay.addEventListener("click",closeBtn);

var overlay = document.querySelector(".overlay");
var information_center = document.querySelector(".information_center");
var openButton = document.querySelector(".btn_phone");
var closeButton = document.querySelector(".btn_x");

function openInformationCenter() {
    information_center.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeInformationCenter() {
    information_center.classList.add("hidden");
    overlay.classList.add("hidden");
}

openButton.addEventListener("click", openInformationCenter);
closeButton.addEventListener("click", closeInformationCenter);
overlay.addEventListener("click", closeInformationCenter);


