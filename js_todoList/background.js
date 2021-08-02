const images = ["0.jpeg", "1.jpeg", "2.jpeg","3.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgimg = document.createElement("img");
bgimg.src= `images\'${chosenImage}`;

document.body.appendChild(bgimg);
