const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours} : ${min} : ${sec}`;
}

getClock(); //시간을 1초 기다리지 않고 처음부터 바로 볼 수 있도록
setInterval(getClock, 1000);