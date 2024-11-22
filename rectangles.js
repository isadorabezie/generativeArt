function setup() {
  createCanvas(1000,1000);
  background(0);
}

function draw() {
  
  clickRectangles();
}

function clickRectangles(){
  if(mouseIsPressed){
    let rand_long = random(40,70);
    let rand_larg = random(40,70);
    if(mouseX < 500){
        fill(random(200,255), random(50,255), random(50,255));
      } else{
        fill(random(50,255), random(50,255),random(200,255));
      }
    rect(mouseX, mouseY, rand_long, rand_larg);
    }
}
      

function rectangles(){
    for( i = 0; i < 500; i++){
      let rand_x = random(100,850);
      let rand_y = random(100,850);
      let rand_long = random(40,70);
      let rand_larg = random(40,70);
      if(rand_x < 500){
        fill(random(200,255), random(50,255), random(50,255));
      } else{
        fill(random(50,255), random(50,255),random(200,255));
      }
      rect(rand_x, rand_y, rand_long, rand_larg);
    }
}
