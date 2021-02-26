var fixed_rectanle
var moving_rectanle

function setup() {
  createCanvas(800,400);
  fixed_rectanle=createSprite(200, 200, 100, 100);
  moving_rectanle=createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0,0,0);  
  
  moving_rectanle.x= World.mouseX
  moving_rectanle.y= World.mouseY
  moving_rectanle.shapeColor = "green";
  fixed_rectanle.shapeColor = "green";
  
  if(collusion(moving_rectanle , fixed_rectanle)){
    moving_rectanle.shapeColor= "red"
    fixed_rectanle.shapeColor= "red"
  }
  else{
    moving_rectanle.shapeColor = "green"
    fixed_rectanle.shapeColor = "green"
  }
  
  console.log(moving_rectanle.x-fixed_rectanle.x);
  ;

  drawSprites();

}

function collusion(p1, p2 ){
  if(p1.x - p2.x < p2.width/2 + p1.width/2 && 
    p2.x - p1.x  <p2.width/2 + p1.width/2 &&
    p1.y - p2.y < p2.height/2 + p1.height/2 && 
    p2.y - p1.y  <p2.height/2 + p1.height/2)
    {
      return true
    
  }

else {
  return false
}


}