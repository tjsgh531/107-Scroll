
export let imageNum = 0;

export class ScrollEvent{
    constructor(sectionArr){
        this.SectionArr = sectionArr; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.wheelDir = true;
        this.wheelSpeed = 0;

        this.curWheelDir;
        this.curWheelVal = 0;

        this.maxImageNum = 100;

     
        const update = setInterval(() => {
            
            if(this.wheelDir){
                if(imageNum < this.maxImageNum){
                    imageNum += Math.floor(this.wheelSpeed / 2);
                }
            }
            else{
                if(imageNum > 0){
                    imageNum -= Math.floor(this.wheelSpeed / 2);
                }
            }
            console.log(`wheelSpeed : ${this.wheelSpeed} / imageNum : ${imageNum}`);
        },200);
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
            },100);
            
        });
        wheelItem.then(()=>{
                this.wheelSpeed--;
        })

    }
}