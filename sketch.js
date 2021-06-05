var police,policeimage
var theif,theifimg
var ob1,ob2,ob3
var backgroundimg,background1

function preload(){
policeimage=loadAnimation("./123/police1.jpg","./123/police2.jpg")
theifimg=loadAnimation("./123/theif.jpg","./123/theif2.jpg")
ob1=loadImage("./123/car1.jpg")
ob2=loadImage("./123/car2.jpg")
ob3=loadImage("./123/car3.png")
backgroundimg=loadImage("./123/background22.jpg")


}
function setup(){
createCanvas(800,400)
police=createSprite(100,200,50,50)
police.addAnimation("police",policeimage)
theif=createSprite(200,200,50,50)
theif.addAnimation("theif",theifimg)


}
function draw(){
background(255)

  drawSprites();
}