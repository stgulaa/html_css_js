const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `&nbsp&nbsp&nbsp${year}년 ${month}월 ${day}일 <br>✏${hours}시 ${min}분 ${sec}초✏`;

}

getClock(); //시간을 1초 기다리지 않고 처음부터 바로 볼 수 있도록
setInterval(getClock, 1000);