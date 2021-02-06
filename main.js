import{
    DataBase
}from './DB.js';

import{
    SectionPosition
}from './sectionPosition.js';

import{
    ScrollEvent
}from './scrollEvent.js';

import{
    Background
}from './Backgorund.js';

export const dataBase = new DataBase(); 

class Main{
    constructor(){
        this.dataBase = new DataBase();
        window.addEventListener('click', () => {
            alert('잠시대기');
        })
        window.addEventListener('resize',this.resize.bind(this));

        this.sectionPosition = new SectionPosition();
        this.background = new Background();
        this.scrollEvent = new ScrollEvent();
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