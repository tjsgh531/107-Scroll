import{
    ScrollEvent
}from './scrollEvent.js';

import{
    PictureProfile,
    imageSection
}from './main.js';

export class SectionPosition{
    constructor(){

        this.imageSection = imageSection;
        this.scrollEvent = new ScrollEvent(this.imageSection);
        this.PicprofileObj = PictureProfile;

        this.init();
    }
    
    init(){
        for(let i = 0 ; i < this.imageSection.length; i++){
            const image = new Image();
            if(i<4){
                image.src =`./image/${i}.jpg`;
            }
            this.imageSection[i].appendChild(image);
        }
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.mainWidth = this.stageWidth * 9/10 ;

        this.picWidth = this.mainWidth * 3/5;
        this.picHeight = this.picWidth * 3/4;
        
        this.centerPos = {
            posX : 0,
            posY : this.stageHeight / 2,
        }

        
        this.radius = this.mainWidth * 3/10;
   

        for(let i = 0 ; i< this.imageSection.length; i++){
            this.imageSection[i].style.transition = 'all 0s linear 0s';
        }

        this.resizeSection();
    }
   
    resizeSection(){
        let deg;
        let x;
        let y;

        for(let i = 0 ; i < this.imageSection.length; i++){
            this.imageSection[i].style.width = `${this.picWidth * this.PicprofileObj.sizeArr[i]}px`;
            this.imageSection[i].style.height = `${this.picHeight * this.PicprofileObj.sizeArr[i]}px`;
            this.imageSection[i].style.zIndex = `${this.PicprofileObj.zIndex[i]}`;
            this.imageSection[i].style.opacity = `${this.PicprofileObj.opacity[i]}`;


            deg = this.PicprofileObj.degArr[i] * Math.PI / 180;
          

            x = this.centerPos.posX + Math.cos(deg) * this.radius ;
            y = this.centerPos.posY + Math.sin(deg) * this.radius - this.picHeight * this.PicprofileObj.sizeArr[i] /2 ;

            this.imageSection[i].style.top = `${y}px`;
            this.imageSection[i].style.left = `${x}px`;
        }
    }

    
}