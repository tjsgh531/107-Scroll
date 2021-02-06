import{
    dataBase
}from './main.js';

export class ScrollEvent{
    constructor(){
        this.SectionArr = dataBase.imageSection; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.canWheel = true;

        //this.changeImage = new ChangeImage(); 
      }

    wheelEvent(data){
        if(this.canWheel){
            this.canWheel = false;
            const wheelValue = data.wheelDelta;
        
            let imageSectiontemp = [...dataBase.imageSection];
            let temp;

            if(wheelValue < 0){
                
                dataBase.imageNum++;
                if(dataBase.imageNum > dataBase.maxImageNum){
                    dataBase.imageNum--;
                }
                else{
                    temp = imageSectiontemp[0];
                    imageSectiontemp.shift();
                    imageSectiontemp.push(temp);
                    dataBase.imageSection = [...imageSectiontemp];
                }
            }

            else if(wheelValue > 0){
                
                dataBase.imageNum--;
                if(dataBase.imageNum < 0){
                    dataBase.imageNum++;
                    console.log(dataBase.imageNum);
                }
                else{
                    temp = imageSectiontemp[dataBase.imageSection.length-1];
                    imageSectiontemp.pop();
                    imageSectiontemp.unshift(temp);
                    dataBase.imageSection = [...imageSectiontemp];
                }
            }  

            dataBase.changeSection();

            setTimeout(() => {
                this.canWheel = true;
            },200);

            console.log(`ImageNum : ${dataBase.imageNum}`)
        }
    }
}