const title = document.querySelector("#a h1");

function eventclick(){
    const currentColor =title.style.color;
    let newColor;
    if(currentColor === "blue"){
        title.style.color="tomato";
    }else{
        title.style.color ="blue";
    }
    title.style.color=newColor;
}

title.addEventListener("click", eventclick);