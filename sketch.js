var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(730,600);

    //creating 4 different surfaces
    surface1 = createSprite(85,585,160,20);
    surface1.shapeColor = "red";
    surface2 = createSprite(265,585,160,20);
    surface2.shapeColor = "green";
    surface3 = createSprite(445,585,160,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(625,585,160,20);
    surface4.shapeColor = "yellow";



    //creating box sprite and give velocity
    box = createSprite(random(20,750) , 300,30,30);
    box.shapeColor = "white";
    box.velocityY = 3;


}

function draw() {
    background(rgb(169,169,169));
    background("black");

    isTouching();
    drawSprites();
}
  
  function isTouching(){
  
   if(box.isTouching(surface1)){
       box.shapeColor= "red" ;
       box.velocityY = 0;
      

     }
    
    if(box.isTouching(surface2)){
       box.shapeColor= "green" ;
       box.velocityY = 0;
       
    }

     if(box.isTouching(surface3)){
       box.shapeColor= "blue" ;
       box.velocityY = 0;
      
       
    }

    if(box.isTouching(surface4)){
       box.shapeColor= "yellow" ;
       box.velocityY = 0;
       
       
    }
  }