function setup() {
    createCanvas(1000,1000);
    background(50, 60, 10);
}
  
function draw() {
    flowerPower();
}

function flowerPower(){
    if(mouseIsPressed){
        let size = random(20,100)
        fill(random(0,255), random(0,255), random(0,255));
        circle(mouseX-10, mouseY-10, size);
        circle(mouseX-10, mouseY+10, size);
        circle(mouseX+10, mouseY-10, size);
        circle(mouseX+10, mouseY+10, size);
        fill(random(200,255), random(50,255), random(50,255));
        circle(mouseX, mouseY, size);
    }
    
}