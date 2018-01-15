//visual
const BACKGROUND_COLOR = 255;
const INSTRUCTIONS = "Type something";
const TEXT_COLOR = "#1400ff";

//canvas size
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 900;

//type sizes
const LETTER_SPACE = 5;
const LETTER_WIDTH = 80;
const LETTER_HEIGHT = 100;
const LINE_SPACE = 5;
var row = 1;

//variables
var name = "";
var letter = [];
var myAnimation = [];

var canvas;
var saveClick = true;
var gif, recording = false;
var save_btn;

//preload animations
function preload() {

//loads animation of letters
A = loadAnimation('assets/letters/a1.png', 'assets/letters/a2.png');
B = loadAnimation('assets/letters/b1.png', 'assets/letters/b2.png');
C = loadAnimation('assets/letters/c1.png', 'assets/letters/c2.png');
D = loadAnimation('assets/letters/d1.png', 'assets/letters/d2.png');
E = loadAnimation('assets/letters/e1.png', 'assets/letters/e2.png');
F = loadAnimation('assets/letters/f1.png', 'assets/letters/f2.png');
G = loadAnimation('assets/letters/g1.png', 'assets/letters/g2.png');
H = loadAnimation('assets/letters/h1.png', 'assets/letters/h2.png');
I = loadAnimation('assets/letters/i1.png', 'assets/letters/i2.png');
J = loadAnimation('assets/letters/j1.png', 'assets/letters/j2.png');
K = loadAnimation('assets/letters/k1.png', 'assets/letters/k2.png');
L = loadAnimation('assets/letters/l1.png', 'assets/letters/l2.png');
M = loadAnimation('assets/letters/m1.png', 'assets/letters/m2.png');
N = loadAnimation('assets/letters/n1.png', 'assets/letters/n2.png');
O = loadAnimation('assets/letters/o1.png', 'assets/letters/o2.png');
P = loadAnimation('assets/letters/p1.png', 'assets/letters/p2.png');
Q = loadAnimation('assets/letters/q1.png', 'assets/letters/q2.png');
R = loadAnimation('assets/letters/r1.png', 'assets/letters/r2.png');
S = loadAnimation('assets/letters/s1.png', 'assets/letters/s2.png');
T = loadAnimation('assets/letters/t1.png', 'assets/letters/t2.png');
U = loadAnimation('assets/letters/u1.png', 'assets/letters/u2.png');
W = loadAnimation('assets/letters/w1.png', 'assets/letters/w2.png');
X = loadAnimation('assets/letters/x1.png', 'assets/letters/x2.png');
Y = loadAnimation('assets/letters/y1.png', 'assets/letters/y2.png');
Z = loadAnimation('assets/letters/z1.png', 'assets/letters/z2.png');
SPACE = loadAnimation('assets/letters/z1.png', 'assets/letters/z2.png');

//loads array of images
myAnimation[0] = loadImage('assets/deco/01.png');
myAnimation[1] = loadImage('assets/deco/02.png');
myAnimation[2] = loadImage('assets/deco/03.png');
myAnimation[3] = loadImage('assets/deco/04.png');
myAnimation[4] = loadImage('assets/deco/05.png');
myAnimation[5] = loadImage('assets/deco/06.png');
myAnimation[6] = loadImage('assets/deco/07.png');


}

function setup() {

canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

canvas.parent('sketch-holder');

  background(BACKGROUND_COLOR);

  //instructions
  textFont("Lato");
  fill(TEXT_COLOR);
  textAlign(CENTER);
  textSize(30);
  //var start_txt = createP(INSTRUCTIONS);
  //start_txt.class('starter_txt');
  //start_txt.position(500,500);
  text(INSTRUCTIONS,width/2,height/2);
  frameRate(10);

//set up restart button
  restart_btn = createButton('restart');
  restart_btn.class('restart_btn');
  restart_btn.parent('btn_container');
  restart_btn.mouseClicked(restart);

  //set up save button
save_btn = createButton('record');
save_btn.class('save_btn');
save_btn.parent('btn_container');
save_btn.mouseClicked(savecanvas);

setupGIF();

}

function restart() {
  background(BACKGROUND_COLOR);
  letter = [];

}

function savecanvas() {

  recording = !recording;

    if (!recording) {
        gif.render();
    }

saveClick = !saveClick;

if (!saveClick) {
  save_btn.html('stop + save');

 // var recording = createDiv('');
  //recording.class('recording_indicator');
 // recording.parent('status');

} else {
  save_btn.html('record');
}



}



function keyPressed() {
  background(BACKGROUND_COLOR);

if (keyCode <= 90 && keyCode >= 65) {
  name += key;
} else if (keyCode == 32) {
  name += " ";

//} else if (keyCode == BACKSPACE) {
  //name = name.substring(0,name.length()-1);
//} else if (keyCode == ENTER) {
} else {};


  //backspace - Couldn't get this to work yet, but I want to add backspace function if I have more time
  //if(keyCode == BACKSPACE) {
    //name = name.substring(0,name.length()-1);
  //}

    saveName(name);
  }

//checks to see if name was entered to start animation
function nameEntered(array) {
  if (array.length > 0) {
    return true
  } else {
    return false
  }
}

//stores user's name's letters into an array
function saveName(name) {
  for (i=0;i<name.length;i++) {
    letter[i] = name.substring(i,i+1);
  }

}

//animates letters that user enters and calculates their position
function animateName(letter,index,length,letterspace,letterwidth) {

//calculate position of letters
//calculates width of entire name, including letter spacing
var nameWidth = (length * letterwidth) + (length-1);
//var nameHeight = (rows * letterheight) + (rows-1);

//calculate the X position of the first letter
var startPositionX = (width-nameWidth)/2;
//var startPositionY = (height-nameHeight)/2;

//calculates X position of each letter
var letterPositionX = startPositionX + (letterwidth+letterspace)*index;
//var letterPositionY = startPositionY + (letterheight+linespace)*rows;

var letterPositionY = CANVAS_HEIGHT/2;
//converts user input into variable
if (letter == " ") {
  newLetter = SPACE;
} else {
var newLetter = eval(letter);
}


//animates the letter
animation(newLetter,letterPositionX,letterPositionY)

}


function draw() {

//letter animation runs if user enters name
if (nameEntered(letter)) {

//uses a loop to animate the letters
for (i=0;i<letter.length;i++){
animateName(letter[i],i,letter.length,LETTER_SPACE,LETTER_WIDTH)
}

}

//uses draws sprites from p5.play to load the stickers the user inputs by mouseclick
drawSprites();

 if (recording) {
        gif.addFrame(canvas.elt, {
            delay: 1,
            copy: true
        });
    }

}

function setupGIF() {
    gif = new GIF({
        workers: 5,
        quality: 20
    });
    gif.on('finished', function(blob) {
        window.open(URL.createObjectURL(blob));
    });
}

//uses mouse position to create sprite for user to draw sticker on canvas
function mousePressed() {

//only happens after user enters name
  if (nameEntered(letter)){

  //originally was intended for stickers to be animated as well but didn't have time
  //var animatedSprite = createSprite(mouseX, mouseY, 50, 100);

//this randomizes the sticker by randomizing from an array
var randomAnimation = random(myAnimation);

//this was for the original animated method
  //animatedSprite.addAnimation("flower",randomAnimation)

  //draws sticker when user clicks on canvas
  image(randomAnimation,mouseX,mouseY);
  }

}
