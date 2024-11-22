function setup() {
    createCanvas(1000,1000);
    background(50, 60, 10);
}
  
function draw() {
    //flowerPower();
    bouquet();
}

function flowerPower(){
    if(mouseIsPressed){
        let flower = new Flower(random(20,100), random(10,90), mouseX, mouseY);
        flower.drawFlow();
    }
}

function bouquet(){
    if(mouseIsPressed){
        for(let i = 1; i < 10; i++){
            let randX, randY;
            randX = mouseX + random(-20,20)*i;
            randY = mouseY +random(-20,20)*i;

            let flower = new Flower(random(20,100), random(10,90), randX, randY);
            flower.drawFlow();
        }
    }

}

class Flower {
    constructor(petalSize, coreSize, x, y){
        this.petalSize = petalSize;
        this.coreSize = coreSize;
        this.x = x;
        this.y = y;
    }

    drawFlow(){
        fill(random(0,255), random(0,255), random(0,255));
        circle(this.x-10, this.y-10, this.petalSize);
        circle(this.x-10, this.y+10, this.petalSize);
        circle(this.x+10, this.y-10, this.petalSize);
        circle(this.x+10, this.y+10, this.petalSize);
        fill(random(200,255), random(50,255), random(50,255));
        circle(this.x, this.y, this.coreSize);
    }


}