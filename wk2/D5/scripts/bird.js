class Bird {
    constructor() {}

    setup() {
        this.img = loadImage(
            'https://raw.githubusercontent.com/horsfallnathan/IronHack180319/master/wk2/D5/assets/flappy.png'
        );
        this.ypos = 200;
        this.velocity = 0;
        this.fristMouseClick = true;
    }

    draw() {
        // clear();
        if (this.ypos >= GAME_HEIGHT || this.ypos < 0) {
            game.over();
        }
        fill(255);

        if (mouseIsPressed) {
            if (this.fristMouseClick) {
                this.velocity = -4;
                this.fristMouseClick = false;
            }
            this.velocity += ACCELERATION * -1;
            // ypos -= 1;
        } else {
            this.fristMouseClick = true;
            this.velocity += ACCELERATION;
            //ypos += 1;
        }
        this.ypos += this.velocity;
        image(this.img, 300, this.ypos, this.img.width / 2, this.img.height / 2);
    }
}
