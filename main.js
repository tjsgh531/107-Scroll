import{
    SectionPosition
}from './sectionPosition.js';

export let imageNum = 0;
export const PictureProfile = {
    degArr : [0,45,75,100,-75,-45,-100],
    sizeArr : [1, 0.5, 0.3, 0.1, 0.3, 0.5, 0.1],
    zIndex : [10, 5, 1, 0, 1, 5, 0],
    opacity : [1, 0.5, 0.3, 0.0, 0.3, 0.5, 0.0],
}
export let imageSection = document.querySelectorAll('.imageSection');

class Main{
    constructor(){
        window.addEventListener('click', () => {
            alert('잠시대기');
        })
        window.addEventListener('resize',this.resize.bind(this));

        this.sectionPosition = new SectionPosition();
        
        this.resize();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.sectionPosition.resize(this.stageWidth, this.stageHeight);
    }
}
window.onload = () => {
    new Main();
};