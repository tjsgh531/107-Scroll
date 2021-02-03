
export let imageNum = 0;

export class ScrollEvent{
    constructor(sectionArr){
        this.SectionArr = sectionArr; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.wheelDir = true;
        this.isWheel = false;

        this.curWheelDir;
        this.curWheelVal = 0;


     
        setInterval(() => {
          
            if(this.isWheel){
         
                    clearTimeout(this.checking);
                    this.checking = setTimeout(() => {
                        this.isWheel =false;
                        console.log('2');
                    },1000);
                
            }
        },200);
      }

    wheelEvent(data){
        const wheelVal = data.wheelDelta;
        this.isWheel = true;
       
        if(wheelVal < 0){
            this.wheelDir = true;
        }
        else{
            this.wheelDir = false;
        }

        this.curWheelVal -= wheelVal;
    }
}