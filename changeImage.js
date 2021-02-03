import{
    imageNum
}from './main.js';
import{
    imageSection
}from './main.js';

export class ChangeImage{
    constructor(){
        
        this.maxImageNum = 100;
        this.transitionSpeed = 0;
    }

    Change(wheelSpeed,wheelDir){
        
        this.transitionSpeed = Math.floor(1500/wheelSpeed);
        console.log(this.transitionSpeed);
        this.changeVal = 0;

        if(wheelDir){
            this.changeVal =  Math.floor(wheelSpeed /2)
        }
        else{
            this.changeVal =  -Math.floor(wheelSpeed /2)
        }

        this.changeCenterImageNum();
        this.changeCenterSectionNum(wheelDir);
        this.changeImage();

        
    }

    changeCenterImageNum(){
        console.log(`imageNum : ${imageNum}`);
        imageNum +=this.changeVal;
        if(imageNum < 0){
            imageNume = 0;
        }
        else if(imageNum > this.maxImageNum){
            imageNum = this.maxImageNum;
        }
    }

    changeCenterSectionNum(wheelDir){
        const centerSectionNum = imageNum % 7;
        const curCenterSectionNum = imageSection[0].dataset.SectionNum;
        if(centerSectionNum !== curCenterSectionNum){
          if(wheelDir){
              setInterval(()=>{

              },this.transitionSpeed)
          }  
        }
    }

    changeImage(){

    }
}