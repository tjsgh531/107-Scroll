import{
    PictureRotate
}from './pictureRotate.js';

class Main{
    constructor(){
        window.addEventListener('resize',this.resize.bind(this));

        this.pictureRotate = new PictureRotate();
        
    
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.pictureRotate.resize(this.stageWidth,this.stageHeight);
    }
}
window.onload = () => {
    new Main();
};