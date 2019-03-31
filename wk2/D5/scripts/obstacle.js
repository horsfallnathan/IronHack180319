class Obstacle {
    constructor() {
        this.width = 50;
        const GAP_OPENING = 200;
        const gapPos = Math.floor(Math.random() * (GAME_HEIGHT - GAME_HEIGHT * 0.8)) + GAME_HEIGHT * 0.4;
        this.topEnd = gapPos - GAP_OPENING / 2;
        this.botY = gapPos + GAP_OPENING / 2;

        this.x = GAME_WIDTH;
    }
    draw() {
        fill(255);
        this.x -= 7;
        rect(this.x, 0, this.width, this.topEnd);
        rect(this.x, this.botY, this.width, GAME_HEIGHT - this.botY);
    }
    // checkCollision(){
    //     const isColliding = !(
    //         r2.{

    //     }
}
