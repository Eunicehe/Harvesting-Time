class fruit {
  image;
  imagePath;
  fruitName;
  x;
  y;
  // speed = {
  //     x: 1,
  //     y: 1,
  // };
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
    //     this.image.onload = function () {
    //     this.draw();
    //     };
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
    if (this.x - 30 < basket.x && basket.x < this.x + 30 && basket.y < this.y - 10 ) {

      this.isCaptured = true;
    }
  }

  isFruitOut() {
    if (this.y - this.height/2 > canvas.height) {
      isOut = true;
    }
  }


  tick() {
    this.move();
    this.draw();
    this.isFruitCaptured();
    this.isFruitOut();
    if (isCaptured || isOut ) {
      // regenerate coordinates
    }

    if (this.isCaptured == true) {
      console.log('captured!');
    }
  }
}
