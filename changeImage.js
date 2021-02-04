
import{
    dataBase
}from './main.js';

export class ChangeImage{
    constructor(){
        this.oneTimePlay = true;
        this.maxImageNum = 100;
    }

    Change(wheelSpeed,wheelDir){

        /* imageNum 설정 */
        this.changeVal = 0;
        if(wheelDir){
            this.changeVal =  Math.floor(wheelSpeed /2);
        }
        else{
            this.changeVal =  -Math.floor(wheelSpeed /2);
        }
        /* */

        this.changeCenterImage();

        if(this.oneTimePlay){
            this.oneTimePlay= false;
            this.changeCenterSection(wheelDir);
        }
       
    }

    changeCenterImage(){
        dataBase.imageNum += this.changeVal;

        if(dataBase.imageNum < 0){
            dataBase.imageNum = 0;
        }
        else if(dataBase.imageNum > this.maxImageNum){
            dataBase.imageNum = this.maxImageNum;
        }
    }

    changeCenterSection(wheelDir){
        const centerSectionNum = dataBase.imageNum % 7;
        const curCenterSectionNum = dataBase.imageSection[0].dataset.sectionnum;
      
        let imageSectiontemp = [...dataBase.imageSection];
        let temp;

        /*transitionspeed 설정 */
        let gap = centerSectionNum - curCenterSectionNum;
        let transitionSpeed;
        if(gap <2){
            transitionSpeed = dataBase.transitionSpeed[0];
        }
        else if(gap < 3){
            transitionSpeed = dataBase.transitionSpeed[1];
        }
        else{
            transitionSpeed = dataBase.transitionSpeed[2];
        }
        /* */

        if(centerSectionNum != curCenterSectionNum){
            console.log(`centerSectionNum : ${centerSectionNum} | curCenterSectionNum : ${curCenterSectionNum}`);
            if(wheelDir){
                temp = imageSectiontemp[0];
                imageSectiontemp.shift();
                imageSectiontemp.push(temp);
                dataBase.imageSection = [...imageSectiontemp];
            }
            else{
                temp = imageSectiontemp[6];
                imageSectiontemp.pop();
                imageSectiontemp.unshift(temp);
                dataBase.imageSection = [...imageSectiontemp];
            }  

            dataBase.changeSection();

            setTimeout(()=>{
                /* 잠깐대기 */
                this.changeCenterSection(wheelDir);
            },transitionSpeed);
        }
        else{
            this.oneTimePlay = true;
            return;
        }

        console.log(dataBase.imageSection[0].dataset.sectionnum);
    }
}