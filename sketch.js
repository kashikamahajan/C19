var startVelociy,o1,o2,o3,o4;
    var g1,g2,g3,g4,g;


function preload()
{
    g=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
}

function setup()
{

  

// Create a global startVelocity variable
startVelocity=-30;

// create point boards

// Create the first sprite and setAnimation to the sprite
 o1=createSprite(390,200,10,10);
o1.addAnimation("bronze_ball",g);
 g1=3;


// Create the second sprite and setAnimation to the sprite

 o2=createSprite(200,390,10,10);
o2.addAnimation("bronze_ball_copy_1",g);
g2=5;

// Create the third sprite and setAnimation to the sprite
o3=createSprite(0,190,10,10);
o3.addAnimation("bronze_ball_copy_1_copy_1",g);
g3=7;


// Create the fourth sprite and setAnimation to the sprite
 o4=createSprite(190,0,10,10);
o4.addAnimation("bronze_ball_copy_1_copy_1_copy_1",g);
 g4=3;

}


function draw() {
  background("black");
  
  createEdgeSprites();


console.log(o1.velocityY);
  

   o1.velocityX=o1.velocityX+g1;
   o2.velocityY=o2.velocityY-g2;
   o3.velocityX=o3.velocityX-g3;
   o4.velocityY=o4.velocityY+g4;
 

  
  
  drawSprites();
}
