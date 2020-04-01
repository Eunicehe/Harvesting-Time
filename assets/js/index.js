const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");

const apple = new Apple(40, -1, 0, 3);

const tick = () => {
  console.log("Tick");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  apple.tick();

  window.requestAnimationFrame(tick);
};

tick();


// mango
const mango = new Mango(110, -1, 0, 3);

const tickM = () => {
  console.log("TickM");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  mango.tickM();

  window.requestAnimationFrame(tickM);
};

tickM();



// grape
const grape = new Grape(180, -1, 0, 3);

const tickG = () => {
  console.log("TickG");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  grape.tickG();

  window.requestAnimationFrame(tickG);
};

tickG();



// orange
const orange = new Orange(250, -1, 0, 3);

const tickO = () => {
  console.log("TickO");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  orange.tickO();

  window.requestAnimationFrame(tickO);
};

tickO();



// peach
const peach = new Peach(320, -1, 0, 3);

const tickP = () => {
  console.log("TickP");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  peach.tickP();

  window.requestAnimationFrame(tickP);
};

tickP();



// pear
const pear = new Pear(400, -1, 0, 3);

const tickPear = () => {
  console.log("TickPear");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pear.tickPear();

  window.requestAnimationFrame(tickPear);
};

tickPear();



// basket
const basket = new Basket(10, 300, 3, 0);

const tickB = () => {
  console.log("TickB");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  basket.tickB();

  window.requestAnimationFrame(tickB);
};

tickB();
