const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;S
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,380,60,60);
    box2 = new Box(900,380,60,60);
    pig1 = new Pig(800,380);
    log1 = new Log(800,320,250,PI/2);

    box3 = new Box(700,300,60,60);
    box4 = new Box(900,300,60,60);
    pig2 = new Pig(800,300);
    log2 = new Log(800,240,250,PI/2);

    pig3 = new Pig(800,220);
    log3 = new Log(750,220,150,PI/7);
    log4 = new Log(850,220,150,-PI/7);

    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    pig3.display();
    log3.display();
    log4.display();

    bird.display();

}