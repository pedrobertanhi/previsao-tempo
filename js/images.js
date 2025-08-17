
const images = ['images/1.jpg', 'images/2.jpg'];

const interval = 10000;

let number = 0;

function changeBackground() {
    const container = document.querySelector('.background-container');
    container.style.backgroundImage = `url(${images[number]})`;
    number = (number + 1) % images.length;
}

setInterval(changeBackground, interval);
changeBackground();
