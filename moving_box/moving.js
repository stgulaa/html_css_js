const box = document.getElementById("box");
box.addEventListener('mousedown',(event)=>{
    //박스 움직이기
    let x = event.clientX;
    let y = event.clientY;
    box.style.position(x,y);
});

box.addEventListener('');