let img;

function setup() {
    createCanvas(640, 640);
    background(255, 204, 0);
    img = loadImage(
        'https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png'
    );
    frameRate(60);
    // frameRate(5);
}
//1. The first draw that was made
// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//         ellipse(mouseX, mouseY, 80, 80); //the numbers represent the width and height
//     }
// }

// 2. Add a second ball and make them drop

// let ypos = 0;
// let ypos2 = 0;

// function draw() {
//     clear();
//     background(255, 204, 0);
//     if (ypos >= 640) ypos = 0;
//     if (ypos2 >= 640) ypos2 = 0;
//     fill(255);
//     ellipse(400, ypos++, 80, 80);
//     fill(221);
//     ypos2 += 2;
//     ellipse(300, ypos2, 80, 80);
// }
const ACCELERATION = 0.1;
let ypos = 200;
let velocity = 0;
let fristMouseClick = true;

function draw() {
    clear();
    background(255, 204, 0);
    fill(255);
    if (ypos >= 640) {
        ypos = 0;
        velocity = 0;
    }

    if (mouseIsPressed) {
        if (fristMouseClick) {
            velocity = -4;
            fristMouseClick = false;
        }
        velocity += ACCELERATION * -1;
        // ypos -= 1;
    } else {
        fristMouseClick = true;
        velocity += ACCELERATION;
        //ypos += 1;
    }
    ypos += velocity;
    image(img, 300, ypos, img.width / 10, img.height / 10);
}
