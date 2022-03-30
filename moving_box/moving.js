const box = document.querySelector("#box");
let isDragging=false;
let original_x=null;
let original_y=null;

box.addEventListener("mouseup",(event)=>{
    //마우스  올릴 때
    isDragging=true; 
    //원래 위치
    original_x = event.clientX;
    original_y = event.clientY;
});

box.addEventListener("mousedown", (event) => {
    //마우스 내릴 때
    isDragging=false;
    //현재 위치
});
box.addEventListener("mousemove", (event) => {
    //마우스 움직일 때
    if(isDragging==true){
        //현재 위치
        box.style.left = event.clientX +original_x;
        box.style.top = event.clientY+original_y;
    }
});