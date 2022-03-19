const images = ["0.jpg", "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];




// goal : add <img src="img/0.jpb"/> by using JS

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);