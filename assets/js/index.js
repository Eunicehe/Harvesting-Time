const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let scoreElement = document.querySelector('#score');
let score = 0;
let numOfFruitSameTime = 1;
let lifeElement = document.querySelector('#life');
let life = 10;
var fruitList = [];
var fruitCat = {};
let image;
var restartButton = document.getElementById('restart');

restartButton.style.display = 'none';
function updateScore(addToScore) {
  score += addToScore;

  scoreElement.innerText = score;
}

function updateLife(loseLife) {
  if (life > 0) {
    life -= loseLife;
  }
  // console.log('life:' + life);
  lifeElement.innerText = life;
  if (life == 0) {
    restartButton.style.display = 'block';
  }
}

document.addEventListener('mousemove', getMouse);

function loadImages() {
  image = new Image();
  image.onload = function () {
    draw();
  };
  image.src = './assets/img/bg.png';
}

function draw() {
  ctx.beginPath();
  // ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, 800, 500);
}

loadImages();


const basket = new Basket(0, 330, 0, 0);

fruitCat[0] = './assets/img/apple.png';
fruitCat[1] = './assets/img/mango.png';
fruitCat[2] = './assets/img/grape.png';
fruitCat[3] = './assets/img/orange.png';
fruitCat[4] = './assets/img/peach.png';
fruitCat[5] = './assets/img/pear.png';

function getMouse(e) {
  // console.log(e.clientX);
  basket.setPos(e.clientX - 35, 330);
}

const updateFrame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  if (fruitList.length == 0 && life > 0) {
    for (i = 0; i < numOfFruitSameTime; i++) {
      var randomX = Math.floor(Math.random() * (canvas.width - 70));

      fruitList.push(
        new fruit(
          randomX,
          -70,
          0,
          8,
          'na',
          fruitCat[Math.floor(Math.random() * 6)]
        )
      );
    }
  }
  if (fruitList.length > 0) {
    console.log('length:' + fruitList.length);
    for (i = 0; i < fruitList.length; i++) {
      fruitList[i].tick();
      if (fruitList[i].getIsOut() || fruitList[i].getIsCapture()) {
        fruitList.splice(i, 1);
      }
    }
  }

  basket.tickB();

  window.requestAnimationFrame(updateFrame);
  // console.log(score);
};

updateFrame();

function restartGame() {
  life = 10;
  score = 0;
  scoreElement.innerText = score;
  lifeElement.innerText = life;
  restartButton.style.display = 'none';
}
