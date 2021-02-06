export class Bubble{
    constructor(){
        this.bubble = document.createElement('div');
        this.bubble.classList.add('bubble');
        document.body.appendChild(this.bubble);

        this.isAppear = true;
        this.xPos =Math.random() * document.body.clientWidth;
        this.yPos = document.body.clientHeight;
        this.speed =Math.random() + 0.8;

        this.setPos();
      
    }
    setPos(){
        this.bubble.style.left =`${this.xPos}px`;
        this.bubble.style.top = `${this.yPos}px`;
    }

    animate(){
        this.yPos -= this.speed;
        if(this.yPos < -10){
            this.isAppear = false;
        }
        this.setPos();
    }

    reset(){
        this.xPos =Math.random() * document.body.clientWidth;
        this.yPos = document.body.clientHeight;
        this.speed =Math.random() + 0.5;
        this.isAppear = true;
    }
}