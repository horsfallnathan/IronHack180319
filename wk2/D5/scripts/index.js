const game = new Game();

function setup() {
    game.setup();
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

function draw() {
    game.draw();
}
