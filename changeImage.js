import{
    imageNum
}from './main.js';

export class ChangeImage{
    constructor(){
        
        this.imgNum = imageNum;
        this.maxImageNum = 100;
        this.transitionSpeed = 0;
    }

    Change(wheelSpeed,wheelDir){
        this.changeCenterImageNum(wheelSpeed,wheelDir);
        this.changeCenterSectionNum();

    }

    changeCenterImageNum(){
        const changeVal = Math.floor(wheelSpeed /2);
        if(wheelDir){
            if(this.imgNum < this.maxImageNum){
                imageNum += changeVal;
                if(imageNum > this.maxImageNum){
                    imageNum = this.maxImageNum;
                }
            }
        }
        else{
            if(this.imgNum > 0){
                imageNum -= changeVal;
                if(imageNum < 0){
                    imageNum = 0;
                }
            }
        }
    }

    changeCenterSectionNum(){
        for()
    }
}