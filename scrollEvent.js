export class ScrollEvent{
    constructor(sectionArr){
        this.SectionArr = sectionArr; 
        window.addEventListener('wheel', this.wheelEvent.bind(this));

        this.wheelDir = true;
    }

    wheelEvent(data){
        const wheelVal = data.wheelDelta;
        if(wheelVal < 0){
            this.wheelDir = true;
        }
        else{
            this.wheelDir = false;
        }
        console.log(this.wheelDir);
    }
}