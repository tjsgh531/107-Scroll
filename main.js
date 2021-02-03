import{
    InitSet
}from './initSet.js';

class Main{
    constructor(){
        window.addEventListener('click', () => {
            alert('잠시대기');
        })
        window.addEventListener('resize',this.resize.bind(this));

        this.initSet = new InitSet();
        
        this.resize();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.initSet.resize(this.stageWidth, this.stageHeight);
    }
}
window.onload = () => {
    new Main();
};