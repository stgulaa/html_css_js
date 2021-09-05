const images = ["01.jpg", "99A04B475BC982642A.jfif", "99E649475BC9826A17.jfif","1200px-Seoul_panorama_by_yeung_ming_17489238902_cbb7450967_o.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgimg = document.createElement("img");
const memo = document.querySelector("#memo")
bgimg.src= `img/${chosenImage}`;
memo.append(bgimg);
//document.body.style.backgroundImage = `url(${bgimg.src})`;
