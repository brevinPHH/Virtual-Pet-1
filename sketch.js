//Create variables here
var dog,dogImg1, dogImg2
var database
var foodS, foodStock
function preload()
{
  dogImg1=loadImage("Images/dogImg.png")
  dogImg2=loadImage("Images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(250,300,300,150,150)
  dog.addImage(dogImg1)
  dog.scale=0.15
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogImg2)
}
textSize(13)
fill(255,255,254)
stroke("black")
text("foodRemaining"+foodS,170,200)
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    Food:x
  })
}

