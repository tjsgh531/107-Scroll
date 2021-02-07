export class Bubble{
    constructor(){
        this.bubble = document.createElement('div');
        this.bubble.classList.add('bubble');
        document.body.appendChild(this.bubble);

        this.isAppear = true;
        this.xPos =Math.random() * document.body.clientWidth;
        this.yPos = -10;
        this.speed =Math.random()*1.2 + 1;

        this.setPos();
      
    }
    setPos(){
        this.bubble.style.left =`${this.xPos}px`;
        this.bubble.style.top = `${this.yPos}px`;
    }

    animate(){
        this.yPos += this.speed;
        if(this.yPos > document.body.clientHeight + 10){
            this.isAppear = false;
        }
        this.setPos();
    }

    reset(){
        this.xPos =Math.random() * document.body.clientWidth;
        this.yPos = -10;
        this.speed =Math.random() *1.2 + 1;
        this.isAppear = true;
    }
}