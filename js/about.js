// information_center

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
    closeorder()
}

openButton.addEventListener("click", openInformationCenter);
closeButton.addEventListener("click", closeInformationCenter);
overlay.addEventListener("click", closeInformationCenter);

document.addEventListener("keydown",function(event){
    if (event.key==="Escape"){
        closeInformationCenter();
    }
})

// ---------------------------------------------------------

// order call

var overlay1 = document.querySelector(".overlay1");
var order_call1 = document.querySelector(".order_call1");
var order = document.querySelector(".order");
var btn_cal  = document.querySelector("#btn-call")
var btn_x_2 = document.querySelector("btn_x_2")

function openorder(){
    information_center.classList.add("hidden");
    order_call1.classList.remove("hidden1")
    overlay.classList.add("hidden")
    overlay1.classList.remove("hidden1")
    
}

function closeorder(){
    order_call1.classList.add("hidden1")
    overlay1.classList.add("hidden1")
}


overlay1.addEventListener("click", closeorder)

btn_cal.addEventListener("click", openorder)

// -----------------------------------------------------