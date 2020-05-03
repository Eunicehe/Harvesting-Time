class fruit {
  image;
  imagePath;
  fruitName;
  x;
  y;

  speedX = 1;
  speedY = 1;
  isCaptured = false;
  isOut = false;

  constructor(theX, theY, speedX, speedY, fruitName, imagePath) {
    this.fruitName = fruitName;
    console.log("We've loaded " + this.fruitName);
    console.log(theX, theY);

    this.x = theX;
    this.y = theY;

    if (speedX !== undefined) {
      this.speedX = speedX;
    }

    if (speedY !== undefined) {
      this.speedY = speedY;
    }
    this.imagePath = imagePath;
    this.loadImages();
  }

  loadImages() {
    this.image = new Image();

    this.image.onload = () => {
      this.draw();
    };
    this.image.src = this.imagePath;
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, this.y, 70, 70);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  // detect if the fruit is captured by the basket

  isFruitCaptured() {
    if (
      this.isOut == false &&
      this.x >= basket.x - 20 &&
      this.x <= basket.x + 20 &&
      this.y > basket.y &&
      this.y < basket.y + 70
    ) {
      this.isCaptured = true;

      updateScore(1);
    }
  }

  isFruitOut() {
    if (this.y + this.image.clientHeight > canvas.height) {
      this.isOut = true;
      // console.log('delete me');
      updateLife(1);
    }
  }
  getIsOut() {
    return this.isOut;
  }

  getIsCapture() {
    return this.isCaptured;
  }
  tick() {
    if (this.isCaptured == true) {
      console.log('captured!');
      return;
    }

    if (this.isCaptured == true || this.isOut == true) {
      // regenerate coordinates
      console.log('out!');
      return;
    }

    this.move();
    this.draw();

    this.isFruitCaptured();
    this.isFruitOut();
  }
}
