const title = document.querySelector(".hello h1");
console.dir(title);

//글자 색 변경
//title.style.color="blue";

function handTitleClick(){
    console.log("title was cliked");
}

function handleMouseEnter(){
    //console.log("mouse is here");
    title.innerText ="mouse is here";
}
function handleMouseLeave(){
    //console.log("아아 마우스는 떠났습니다.");
    title.innerText="아아 마우스는 떠났습니다.";
}
//이벤트 실행
title.addEventListener("click", handTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);