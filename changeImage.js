import{
    imageNum
}from './main.js';

export class ChangeImage{
    constructor(){
        
        this.imgNum = imageNum;
        this.maxImageNum = 100;
    }
    Change(wheelSpeed,wheelDir){
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
}