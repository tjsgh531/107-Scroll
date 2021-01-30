

export class PictureRotate{
    constructor(){        
        this.imageSection = document.querySelectorAll('.imageSection');
        this.centerPos = {
            centerX : document.body.clientWidth/2,
            centerY : document.body.clientHeight/2,
        }
        this.radius = 300;

        this.imageNum = 0;
        this.scrollValue = 0;
        this.isScroll = false;

        this.init();
        window.addEventListener('wheel',this.wheelEvent.bind(this));
    }
    
    init(){
        let deg;
        for(let i = 0 ;  i < this.imageSection.length; i++){
            deg = (45 * i/180)*Math.PI;
            this.imageSection[i].style.left =`${this.centerPos.centerX + Math.cos(deg) * this.radius}px`;
            this.imageSection[i].style.top =`${this.centerPos.centerY + Math.sin(deg) * this.radius}px`;
        }
    }

    wheelEvent(data){
        console.log(data.wheelDelta);
    }
}