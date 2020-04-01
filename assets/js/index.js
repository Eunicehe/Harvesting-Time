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



const mango = new Mango(90, -1, 0, 3);

const tickM = () => {
  console.log("TickM");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  mango.tickM();

  window.requestAnimationFrame(tickM);
};

tickM();




const grape = new Grape(140, -1, 0, 3);

const tickG = () => {
  console.log("TickG");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  grape.tickG();

  window.requestAnimationFrame(tickG);
};

tickG();




const orange = new Orange(200, -1, 0, 3);

const tickO = () => {
  console.log("TickO");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  orange.tickO();

  window.requestAnimationFrame(tickO);
};

tickO();
