//Create variables here
var dog,happydog;
var foodS, foodstock;
var database;
var dogImg;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);

foodStock = database.ref('Food');
foodStock.on("value",readStock);

  
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){

  writeStock(foods);
  dog.addImage(dogHappy);

}

  drawSprites();

  text("foodstock",250,250);
  textSize(3);
  fill();
  

}



