var back, backImg
var spaceship, shipImg
var b1, b2
var mImg, cImg, sImg


function preload(){
  backImg=loadImage("outer-space.png")
  shipImg=loadImage("ship.png")
  mImg=loadImage("rock.png")
  cImg=loadImage("coin.png")

}


function setup() {
  createCanvas(1200,800);

  back=createSprite(600,400,10,10)
  back.addImage(backImg)
  back.velocityY=2
  back.scale=1.5

  b1=createSprite(100,400,10,1000)
  b1.visible=false

  b2=createSprite(1100,400,10,1000)
  b2.visible=false

  spaceship=createSprite(580,600,20,20)
  spaceship.addImage(shipImg)
  spaceship.scale=0.2

  laserGroup= new Group()
  metGroup= new Group()
  coinGroup= new Group()
  shipGroup= new Group()
}

function draw() {
  background("black");

  

  if(back.y>700){
    back.y=back.height/10
  }

  if(keyDown("right")){
    spaceship.x=spaceship.x+6
  }

  if(keyDown("left")){
    spaceship.x=spaceship.x-6
  }
  spaceship.collide(b1)
  spaceship.collide(b2)

  if(keyDown("space")){
    laser()
  }
  
 var select=Math.round(random(1,2))
 if(World.frameCount%100==0){
   if(select==1){
     met()
   }
   else {
     coin()
   }
 }
  drawSprites();
}
// how to make the border?

function laser(){
  var laser=createSprite(540,540,5,30)
  laser.shapeColor="yellow"
  laser.x=spaceship.x+2
  laser.velocityY=-4
  laser.lifetime=300
  laserGroup.add(laser)
  }

  function met(){
    var m=createSprite(Math.round(random(100,1000)),0,10,10)
    m.addImage(mImg)
    m.scale=0.2
    m.velocityY=+4
    m.lifetime=300
    metGroup.add(m)
  }
  function coin(){
    var c=createSprite(Math.round(random(100,1000)),0,10,10)
    c.addImage(cImg)
    c.scale=0.2
    c.velocityY=+4
    c.lifetime=300
    coinGroup.add(c)
  }

  function ship(){
    var s=createSprite(Math.round(random(100,1000)),0,10,10)
    s.shapeColor="green"
    s.velocityY=+1
    s.lifetime=2300
    shipGroup.add(s)
  }
