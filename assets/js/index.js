document.addEventListener('mousemove', getMouse);
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

//随机y

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const apple = new fruit(30, 10, 0, 4, 'apple', './assets/img/apple.png');
// const apple = new Apple(30, -10, 0, 3);
// const mango = new Mango(150, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const grape = new Grape(250, -10 - getRandomArbitrary(220, 1000), 0, 3);
// const orange = new Orange(400, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const peach = new Peach(550, -10 - getRandomArbitrary(200, 1000), 0, 3);
// const pear = new Pear(700, -10 - getRandomArbitrary(200, 1000), 0, 3);
const mango = new fruit(
  150,
  -10 - getRandomArbitrary(200, 1000),
  0,
  3,
  'mango',
  './assets/img/mango.png'
);
const grape = new fruit(
  250,
  -10 - getRandomArbitrary(200, 1000),
  0,
  3,
  'grape',
  './assets/img/grape.png'
);
const orange = new fruit(
  400,
  -10 - getRandomArbitrary(200, 1000),
  0,
  3,
  'orange',
  './assets/img/orange.png'
);

const peach = new fruit(
  550,
  -10 - getRandomArbitrary(200, 1000),
  0,
  3,
  'peach',
  './assets/img/peach.png'
);

const pear = new fruit(
  700,
  -10 - getRandomArbitrary(200, 1000),
  0,
  3,
  'pear',
  './assets/img/pear.png'
);

const basket = new Basket(0, 300, 0, 0);
function getMouse(e) {
  // console.log(e.clientX);
  basket.setPos(e.clientX - 35, 300);
}
const updateFrame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  apple.tick();
  mango.tick();
  grape.tick();
  orange.tick();
  peach.tick();
  pear.tick();
  // apple.tick();
  // mango.tickM();
  // grape.tickG();
  // orange.tickO();
  // peach.tickP();
  // pear.tickPear();
  basket.tickB();
  window.requestAnimationFrame(updateFrame);
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
