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

import{
    AutoScroll
}from './autoScroll.js';

import{
    AudioManager
}from './audioManager.js';

export const dataBase = new DataBase(); 

class Main{
    constructor(){

        window.addEventListener('resize',this.resize.bind(this));

        this.sectionPosition = new SectionPosition();
        this.background = new Background();
        this.scrollEvent = new ScrollEvent();
        this.autoScroll = new AutoScroll();
        this.AudioManager = new AudioManager();
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