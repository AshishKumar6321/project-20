var  cat,mouse;
var catrunning,mouseImg1,catImg1;
var background,backgroundImg,catLastImage,
catImg2,catImg3,mouseImg2,mouseLastImage;

function preload() {
    //load the images here
    catImg1=addImage("tomTwo.png");
    mouseImg1=addImage("jerryThree.png");
    backgroundImg=addImage("garden.png")
    catImg2=addImage("tomThree.png");
    catImg3=addImage("tomFour.png");
    mouseImg2=addImage("jerryTwo.png");

   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(500,450,70,90);
    cat.addImage("cat",catImg1);
    cat.velocityY=1;

    mouse=createSprite(800,900,80,90);
    mouse.addImage("mouse",mouseImg1);

    background.addImage("background",garden.png)



}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide

    text(mouseX+','+mouseY,10,45);

     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
         cat.addAnimation("catLastImage",catImg3);
         cat.changeAnimation("catLastImage");
         mouse.changeAnimation("mouseLastImage",mouseImg2);
         mouse.changeAnimation("mouseLastImage");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keycode=== LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
}

}
