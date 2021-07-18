const title = document.querySelector("#a h1");

function eventclick(){
    const clickedClass = "clicked"; //나중에 css랑 이름이 헷갈리지 않도록 정의하는 것?
    if(title.className==="clicked"){
        title.className ="";
    }
    else{
        title.className="clicked";
    }
}

title.addEventListener("click", eventclick);