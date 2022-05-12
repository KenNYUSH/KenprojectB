let button1, button2, button3, button4, button5;

let thaiSel = 0;
let chinaSel = 0;
let japanSel = 0;
let italySel = 0;
let koreasel = 0;

let selCol;

let numberOfImages = 2;
let imgThai = [];
let imgKorea = [];
let imgItaly = [];
let imgChina = [];
let imgJapan = [];

let foodArray = [];
let arraySize = 0;

let selImg;

function preload(){
  //for (let i=0; i<numberOfImages; i++){
    imgThai[0] = loadImage("assets/thai/0.png");
    imgThai[1] = loadImage("assets/thai/1.png");
    imgKorea [0] = loadImage("assets/korean/1.png") 
    imgKorea [1] = loadImage ("assets/korean/4.png")
    imgItaly[0] = loadImage("assets/italian/i.1.png");
    imgItaly[1] = loadImage("assets/italian/i.2.png");
    imgJapan[0] = loadImage("assets/Japan/j.1.png");
    imgJapan[1] = loadImage("assets/Japan/j.2.png");
    imgChina[0] = loadImage("assets/china/c.1.png");
    imgChina[1] = loadImage("assets/china/c.2.png");
  //}
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  noStroke();

  imgThai[0].resize(100,100);
  imgThai[1].resize(100,80);
  imgItaly[0].resize(90,90);
  imgItaly[1].resize(100,100);
  imgKorea[0].resize(100,110);
  imgKorea[1].resize(110,100);
  imgChina[0].resize(100,100);
  imgChina[1].resize(120,100);
  imgJapan[0].resize(110,110);
  imgJapan[1].resize(100,100);

  button1 = createButton('Thailand');
  button1.position(50, 50);
  button1.mousePressed(change1);

  button2 = createButton('China');
  button2.position(50, 80);
  button2.mousePressed(change2);

  button3 = createButton('Japan');
  button3.position(50, 110);
  button3.mousePressed(change3);

  button4 = createButton('Italy');
  button4.position(50, 140);
  button4.mousePressed(change4);

  button5 = createButton('Korea');
  button5.position(50, 170);
  button5.mousePressed(change5);

  selCol = color("#606060")

  for (let i=0; i<arraySize; i++){
    let randSel = parseInt(random(imgThai.length));
    selImg = imgThai[randSel];
    foodArray[i] = new Food(width/2, height/2, random(255), random(2,30), selImg);
  }

  for (let i=0; i<arraySize; i++){
    let randSel = parseInt(random(imgChina.length));
    selImg = imgChina[randSel];
    foodArray[i] = new Food(width/2, height/2, random(255), random(2,30), selImg);
  }

  for (let i=0; i<arraySize; i++){
    let randSel = parseInt(random(imgJapan.length));
    selImg = imgJapan[randSel];
    foodArray[i] = new Food(width/2, height/2, random(255), random(2,30), selImg);
  }

  for (let i=0; i<arraySize; i++){
    let randSel = parseInt(random(imgItaly.length));
    selImg = imgItaly[randSel];
    foodArray[i] = new Food(width/2, height/2, random(255), random(2,30), selImg);
  }

  for (let i=0; i<arraySize; i++){
    let randSel = parseInt(random(imgKorea.length));
    selImg = imgKorea[randSel];
    foodArray[i] = new Food(width/2, height/2, random(255), random(2,30), selImg);
  }


}

function change1(){

  for (let i=0; i<20; i++){
    let randSel = parseInt(random(imgThai.length));
    selImg = imgThai[randSel];
    foodArray.push(new Food(width/2, height/2, random(255), random(2,30), selImg));
  }

  thaiSel = 1;
  chinaSel = 0;
  japanSel = 0;
  italySel = 0;
  koreaSel = 0;
}

function change2(){

  for (let i=0; i<20; i++){
    let randSel = parseInt(random(imgChina.length));
    selImg = imgChina[randSel];
    foodArray.push(new Food(width/2, height/2, random(255), random(2,30), selImg));
  }

  thaiSel = 0;
  chinaSel = 1;
  japanSel = 0;
  italySel = 0;
  koreaSel = 0;
}

function change3(){

  for (let i=0; i<20; i++){
    let randSel = parseInt(random(imgJapan.length));
    selImg = imgJapan[randSel];
    foodArray.push(new Food(width/2, height/2, random(255), random(2,30), selImg));
  }

  thaiSel = 0;
  chinaSel = 0;
  japanSel = 1;
  italySel = 0;
  koreaSel = 0;
}

function change4(){

  for (let i=0; i<20; i++){
    let randSel = parseInt(random(imgItaly.length));
    selImg = imgItaly[randSel];
    foodArray.push(new Food(width/2, height/2, random(255), random(2,30), selImg));
  }

  thaiSel = 0;
  chinaSel = 0;
  japanSel = 0;
  italySel = 1;
  koreaSel = 0;
}

function change5(){

  for (let i=0; i<20; i++){
    let randSel = parseInt(random(imgKorea.length));
    selImg = imgKorea[randSel];
    foodArray.push(new Food(width/2, height/2, random(255), random(2,30), selImg));
  }

thaiSel = 0
italySel = 0;
chinaSel = 0;
japanSel = 0;
koreaSel = 1;

}

function draw() {
  background(100);
  

  for (let i=0; i<foodArray.length; i++){
    foodArray[i].move();
    foodArray[i].display();
  }

  /*
  if (thaiSel == 1) selCol = color("#FF00FF");
  if (chinaSel == 1) selCol = color("#FF0000");
  if (japanSel == 1) selCol = color("#606000");
  if (greeceSel == 1) selCol = color("#0000FF");
  fill(selCol);
  rect(200, 200, 200, 200)
  */
}


class Food {
  //The constructor helps us to define the main properties of the class
  //It accepts arguments each time a new object is initialized
  constructor(x, y, col, size, selectImage) {
    this.xi = x;
    this.yi = y;
    this.speedXi = random(-5, 5);
    this.speedYi = random(-5, 5);
    this.fillcol = col;
    this.size = size;
    this.selectImage = selectImage;
  }

  move() {
    //Motion system - current position and speed
    this.xi = this.xi + this.speedXi;
    this.yi = this.yi + this.speedYi;

    //Based on boundaries collision, reverse direction for x and y
    if (this.xi > width - this.size / 2 || this.xi < this.size / 2) {
      this.speedXi *= -1;
    }
    if (this.yi > height - this.size / 2 || this.yi < this.size / 2) {
      this.speedYi *= -1;
    }
  }

  display() {
    //Display settings for the object
    noStroke();
    //fill(this.fillcol);
    //ellipse(this.xi, this.yi, this.size, this.size);
    image(this.selectImage, this.xi, this.yi);
  }
}
