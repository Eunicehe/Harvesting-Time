const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");

const apple = new Apple(10, 10, 0, 3);

const tick = () => {
    console.log('Tick');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    apple.tick();

    window.requestAnimationFrame(tick);
};

tick();
