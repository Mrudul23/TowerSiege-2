const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var score = 0;
var chance = 1;
var backGround,welldone;

function preload(){
  backGround = loadImage("background.jpg");
  welldone = loadImage("well done.gif");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(660,460,40,40);
  box2 = new Box(700,460,40,40);
  box3 = new Box(740,460,40,40);
  box4 = new Box(780,460,40,40);
  box5 = new Box(820,460,40,40);
  box6 = new Box(860,460,40,40);

  box7 = new Box(680,420,40,40);
  box8 = new Box(720,420,40,40);
  box9 = new Box(760,420,40,40);
  box10 = new Box(800,420,40,40);
  box11 = new Box(840,420,40,40);

  box12 = new Box(700,380,40,40);
  box13 = new Box(740,380,40,40);
  box14 = new Box(780,380,40,40);
  box15 = new Box(820,380,40,40);

  box16 = new Box(720,340,40,40);
  box17 = new Box(760,340,40,40);
  box18 = new Box(800,340,40,40);

  box19 = new Box(740,300,40,40);
  box20 = new Box(780,300,40,40);

  box21 = new Box(760,260,40,40);

  box22 = new Box(960,220,40,40);
  box23 = new Box(1000,220,40,40);
  box24 = new Box(1040,220,40,40);
  box25 = new Box(1080,220,40,40);
  box26 = new Box(1120,220,40,40);
 
  box27 = new Box(980,180,40,40,);
  box28 = new Box(1020,180,40,40,);
  box29 = new Box(1060,180,40,40,);
  box30 = new Box(1100,180,40,40,);

  box31 = new Box(1000,140,40,40,);
  box32 = new Box(1040,140,40,40,);
  box33 = new Box(1080,140,40,40,);
 
  
  box34 = new Box(1020,120,40,40);
  box35 = new Box(1060,120,40,40);
 
  box36 = new Box(1040,100,40,40);

  polygon = new Polygon(200,200,100);

  rope = new Rope(polygon.body,{x:300,y:200});

  ground1 = new Platform(600,590,1200,20);

  ground2 = new Platform(1040,250,250,20);

  ground3 = new Platform(760,490,270,20);
  
}

function draw() {

    if(keyWentDown("space") && score<720){
        Matter.Body.setPosition(polygon.body,{x:300,y:200});
        rope.attach();
        chance = chance + 1;
    }


  background(backGround);

  if(score === 720){
  image(welldone,0,0,300,300);
  rope.fly()
  }

  Engine.update(engine);  

  box1.display("blue");
  box2.display("blue");
  box3.display("blue");
  box4.display("blue");
  box5.display("blue");
  box6.display("blue");

  box7.display("Red");
  box8.display("Red");
  box9.display("Red");
  box10.display("Red");
  box11.display("Red");

  box12.display("Yellow");
  box13.display("Yellow");
  box14.display("Yellow");
  box15.display("Yellow");

  box16.display("Green");
  box17.display("Green");
  box18.display("Green");

  box19.display("Pink");
  box20.display("Pink");

  box21.display("Green");
  
  box22.display("Yellow");
  box23.display("Yellow");
  box24.display("Yellow");
  box25.display("Yellow");
  box26.display("Yellow");
  
  box27.display("blue");
  box28.display("blue");
  box29.display("blue");
  box30.display("blue");

  box31.display("red");
  box32.display("red");
  box33.display("red");
 
  box34.display("Pink");
  box35.display("Pink");

  box36.display("green");
 
  rope.display();
  polygon.display();
  ground1.display();
  ground2.display();
  ground3.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();

  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();

  box12.score();
  box13.score();
  box14.score();
  box15.score();

  box16.score();
  box17.score();
  box18.score();

  box19.score();
  box20.score();

  box21.score();
  
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  
  box27.score();
  box28.score();
  box29.score();
  box30.score();

  box31.score();
  box32.score();
  box33.score();
 
  box34.score();
  box35.score();

  box36.score();

  fill("black");
  stroke("black");
  textSize(35);  
  textFont("cooper");
  text("chance number : "+chance,0,25)
  text("score : "+ score,1000,25);

  if(score === 720 && chance>1){
    fill("black");
    stroke("black");
    textSize(40);
    textAlign(CENTER);
    text("Yay! Champ you won the championship 🎉🎊",width/2,330);
    text("It took you "+ chance  +" chances to win the game" ,width/2,375);

  }

  if(score === 720 && chance === 1){
    fill("black");
    stroke("black");
    textSize(40);
    textAlign(CENTER);
    text("Yay! Champ you won the championship 🎉🎊",width/2,330);
    text("It took you "+ chance  +" chance to win the game" ,width/2,375);

  }


}

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    rope.fly();
  }