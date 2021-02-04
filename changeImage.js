
import{
    dataBase
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
        console.log(`imageNum : ${dataBase.imageNum}`);
        dataBase.imageNum+=this.changeVal;
        if(dataBase.imageNum < 0){
            dataBase.imageNum = 0;
        }
        else if(dataBase.imageNum > this.maxImageNum){
            dataBase.imageNum = this.maxImageNum;
        }
    }

    changeCenterSectionNum(wheelDir){
        const centerSectionNum = dataBase.imageNum % 7;
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