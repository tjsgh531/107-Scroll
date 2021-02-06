import{
    Bubble
}from './bubble.js';

export class Background{
    constructor(){
        this.bubbles = [];
        this.maxBubbleNum = 30;
        this.createSpeed = 1000;
        
        this.createBubble();
        
    }
    createBubble(){
        for(let i = 0 ; i < this.maxBubbleNum; i++){
            const item = new Bubble();
            this.bubbles.push(item);
        }

        requestAnimationFrame(this.moveBubble.bind(this));
    }



    moveBubble(t){
        let idx = Math.floor(t/this.createSpeed);
        if(t > this.createSpeed * (this.maxBubbleNum-1)){
            idx = this.maxBubbleNum - 1;
        }
        for(let i = 0 ; i <= idx; i++){
            this.bubbles[i].animate();
            if(!this.bubbles[i].isAppear){
                this.bubbles[i].reset();
            }
        }
        requestAnimationFrame(this.moveBubble.bind(this));
    }

}