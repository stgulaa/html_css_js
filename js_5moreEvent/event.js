const a = document.querySelector(".hello h1");
console.dir(a);

function clickEvent(){
    console.log("click");
}
function handle(){
    document.body.style.backgroundColor ="tomato";
}
function copyEvent(){
    alert("복사했습니다.");
}
function offlineEvent(){
    alert("WIFI 안됨");
}
function onlineEvent(){
    alert("WIFI 연결성공");
}
a.addEventListener("click", clickEvent);
//a.onclick = clickEvent;

window.addEventListener("resize", handle);
window.addEventListener("copy", copyEvent);
window.addEventListener("offline", offlineEvent);
window.addEventListener("online", onlineEvent);