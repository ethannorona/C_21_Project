createEdgeSprites();
var canvas;
var music, gameover, coin, jump;

var box;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
    coin = loadSound("8d82b5_Super_Mario_Bros_Coin_Sound_Effect.mp3");
    jump = loadSound("maro-jump-sound-effect_1.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 580, 180, 10);
    surface1.shapeColor = "red";

    surface2 = createSprite(300, 580, 180, 10);
    surface2.shapeColor = "purple";
    
    surface3 = createSprite(500, 580, 180, 10);
    surface3.shapeColor = "yellow";
    
    surface4 = createSprite(700, 580, 180, 10);
    surface4.shapeColor = "green"; 

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)), 100, 10, 10);
    box.shapeColor = "white";
    box.velocityX = -3;
    box.velocityY = 5;

    createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    //box.bounceOff(topEdge);
    //box.bounceOff(bottomEdge);
    //box.bounceOff(leftEdge);
    //box.bounceOff(rightEdge);
    //box.bounceOff(edges);

    console.log(surface4.y - box.x);
    console.log(surface4.height/2 + box.height/2);

    //add condition to check if box touching surface and make it bounce off

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
        jump.play();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
        coin.play();
    }

    drawSprites();
}
