const body = document.querySelector("body");
body.style.backgroundColor = "yellow";
function eventResize(){
    var frame = window.innerWidth;
    //최소값이 500
    if(frame>=1000){
        body.style.backgroundColor = "violet";
    }
    else if(frame<=800){
        body.style.backgroundColor = "red";
    }
    else if (frame>=500){
        body.style.backgroundColor = "yellow";
    }
}

window.addEventListener("resize", eventResize)