const text = document.querySelector("h2")
function formResize(){
    text.innerText = "you just resized!";
    text.style.color ="yellow";
}
function clickText(){
    text.innerText = "that was a right click!";
    text.style.color ="pink";
}
function textin(){
    text.innerText="the mouse is here!";
    text.style.color ="blue";
}
function textout(){
    text.innerText="The mouse is gone!";
    text.style.color ="red";
}

text.addEventListener("contextmenu", clickText);
text.addEventListener("mouseleave", textout);
text.addEventListener("mouseenter", textin);
window.addEventListener("resize", formResize);
