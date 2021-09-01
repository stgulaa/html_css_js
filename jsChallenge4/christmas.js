const christmasTime = document.querySelector("h2");

function getDday(){
    const dDay = new Date("2021-12-24:00:00:00+0900");
    const toDay = new Date();
    const gap = dDay-toDay;
    const day = Math.ceil(gap/(1000*60*60*24));
    const hour = Math.ceil(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.ceil((gap % (1000 * 60)) / 1000);
    christmasTime.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${min < 10 ? `0${min}` : min}m ${
        sec < 10 ? `0${sec}` : sec}s`
}
getDday();
setInterval(getDday, 1000);