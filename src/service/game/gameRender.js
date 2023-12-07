const COLOR_BLACK = 'BLACK';
const COLOR_WHITE = 'WHITE';
const CTX_FONT = '45px Arial';

class GameRender {
    constructor(canvasRef, gameElement) {
        this.gameElement = gameElement;
        this.cvs = canvasRef.current;
        this.ctx = canvasRef.current.getContext('2d');
        this.leftPaddle = this.initPaddle(gameElement.paddleList[0]);
        this.rightPaddle = this.initPaddle(gameElement.paddleList[1]);
        this.ball = this.initBall(gameElement.ballList[0]);
    }


    initPaddle = (paddle) => {
        return new Paddle(
            (paddle.posX * this.cvs.width) / 100,
            (paddle.posY * this.cvs.height) / 100,
            (paddle.width * this.cvs.width) / 100,
            (paddle.height * this.cvs.height) / 100
        );
    }

    initBall = (ball) => {
        return new Ball(
            (ball.posX * this.cvs.width) / 100,
            (ball.posY * this.cvs.height) / 100,
            (ball.radius * ((this.cvs.width + this.cvs.height) / 2)) / 100
        );
    }

    render() {
        this.drawPaddle(0, 0, this.cvs.width, this.cvs.height, COLOR_BLACK);
        this.drawScore(this.gameElement.leftScore, this.cvs.width / 4, this.cvs.height / 5, COLOR_WHITE);
        this.drawScore(
            this.gameElement.rightScore,
            (3 * this.cvs.width) / 4,
            this.cvs.height / 5,
            COLOR_WHITE,
        );
        this.drawNet();
        this.drawPaddle(
            this.leftPaddle.x,
            this.leftPaddle.y,
            this.leftPaddle.width,
            this.leftPaddle.height,
            COLOR_WHITE,
        );
        this.drawPaddle(
            this.rightPaddle.x,
            this.rightPaddle.y,
            this.rightPaddle.width,
            this.rightPaddle.height,
            COLOR_WHITE,
        );
        this.drawBall(this.ball.x, this.ball.y, this.ball.radius, COLOR_WHITE);
    }

    drawBall(x, y, radius, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawNet() {
        for (let i = 0; i < this.cvs.height; i += 15) {
            this.drawPaddle(this.net.x, this.net.y + i, this.net.width, this.net.height, this.net.color);
        }
    }

    drawScore(score, x, y, color) {
        this.ctx.fillStyle = color
        this.ctx.font = CTX_FONT;
        this.ctx.fillText(score.toString(), x, y);
    }

    drawPaddle(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    game() {
        this.render();
    }
}

class Paddle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}