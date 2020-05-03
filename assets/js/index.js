const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
let scoreElement = document.querySelector('#score');
let score = 0;
let numOfFruitSameTime = 1;
let lifeElement = document.querySelector('#life');
let life = 20;
var fruitList = [];
var fruitCat = {};
let image;

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

//random y

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const apple = new fruit(30, 10, 0, 4, 'apple', './assets/img/apple.png');
const mango = new fruit(
  150,
  apple.y - getRandomArbitrary(100, 500),
  0,
  3,
  'mango',
  './assets/img/mango.png'
);

const grape = new fruit(
  250,
  mango.y - getRandomArbitrary(100, 500),
  0,
  3,
  'grape',
  './assets/img/grape.png'
);

const orange = new fruit(
  400,
  grape.y - getRandomArbitrary(100, 500),
  0,
  3,
  'orange',
  './assets/img/orange.png'
);

const peach = new fruit(
  550,
  orange.y - getRandomArbitrary(100, 500),
  0,
  3,
  'peach',
  './assets/img/peach.png'
);

const pear = new fruit(
  700,
  peach.y - getRandomArbitrary(100, 500),
  0,
  3,
  'pear',
  './assets/img/pear.png'
);

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
  // apple.tick();
  // mango.tick();
  // grape.tick();
  // orange.tick();
  // peach.tick();
  // pear.tick();
  // apple.tick();
  // mango.tickM();
  // grape.tickG();
  // orange.tickO();
  // peach.tickP();
  // pear.tickPear();
  basket.tickB();

  window.requestAnimationFrame(updateFrame);
  // console.log(score);
};

updateFrame();

// const apple = new Apple(40, -1, 0, 3);

// const tick = () => {
//   console.log("Tick");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   apple.tick();

//   window.requestAnimationFrame(tick);
// };

// tick();

// // mango
// const mango = new Mango(110, -1, 0, 3);

// const tickM = () => {
//   console.log("TickM");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   mango.tickM();

//   window.requestAnimationFrame(tickM);
// };

// tickM();

// // grape
// const grape = new Grape(180, -1, 0, 3);

// const tickG = () => {
//   console.log("TickG");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   grape.tickG();

//   window.requestAnimationFrame(tickG);
// };

// tickG();

// // orange
// const orange = new Orange(250, -1, 0, 3);

// const tickO = () => {
//   console.log("TickO");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   orange.tickO();

//   window.requestAnimationFrame(tickO);
// };

// tickO();

// // peach
// const peach = new Peach(320, -1, 0, 3);

// const tickP = () => {
//   console.log("TickP");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   peach.tickP();

//   window.requestAnimationFrame(tickP);
// };

// tickP();

// // pear
// const pear = new Pear(400, -1, 0, 3);

// const tickPear = () => {
//   console.log("TickPear");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   pear.tickPear();

//   window.requestAnimationFrame(tickPear);
// };

// tickPear();

// // basket
// const basket = new Basket(10, 300, 3, 0);

// const tickB = () => {
//   console.log("TickB");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   basket.tickB();

//   window.requestAnimationFrame(tickB);
// };

// tickB();

// const apple = new Apple(30, -10, 0, 3);
// const mango = new Mango(150, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const grape = new Grape(250, -10 - getRandomArbitrary(220, 1000), 0, 3);
// const orange = new Orange(400, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const peach = new Peach(550, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const pear = new Pear(700, -10 - getRandomArbitrary(200, 1000), 0, 3);
