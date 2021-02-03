import{
    ChangeImage
}from './changeImage.js';


export class ScrollEvent{
    constructor(sectionArr){
        this.SectionArr = sectionArr; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.wheelDir = true;
        this.wheelSpeed = 0;

        this.curWheelDir;
        this.curWheelVal = 0;

        this.maxImageNum = 100;

        this.changeImage = new ChangeImage(); 
      }

    wheelEvent(data){
        const wheelItem = new Promise((resolve) => {
            const wheelVal = data.wheelDelta;
            this.wheelSpeed ++;
            
            if(wheelVal < 0){
                this.wheelDir = true;
            }
            else{
                this.wheelDir = false;
            }
    
            this.curWheelVal -= wheelVal;

            setTimeout(()=> {
                resolve();
            },200);
            
        });
        wheelItem.then(()=>{
            /* 이부분에 휠값에따라 ()변하게하는 메소드 넣기 */
            console.log(this.wheelSpeed);
            this.changeImage.Change(this.wheelSpeed, this.wheelDir);
            /* 이부분에 */

            this.wheelSpeed--;
        })

    }
}