
export let imageNum = 0;

export class ScrollEvent{
    constructor(sectionArr){
        this.SectionArr = sectionArr; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.wheelDir = true;
        this.isWheel = false;

        this.curWheelDir = 0;

        setInterval(() => {
            
            if(this.isWheel){
                this.isWheel = false;
            }
            else{
                setTimeout(() => {
                    /* pause */
                },300);
            }
            
        },300);
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


    }
}