const title = document.querySelector(".hello h1");
console.dir(title);

//글자 색 변경
title.style.color="blue";

function handTitleClick(){
    console.log("title was cliked");
}

title.addEventListener("click", handTitleClick);