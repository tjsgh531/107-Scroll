

export class PictureRotate{
    constructor(){        
        this.imageSection = document.querySelectorAll('.imageSection');
        this.centerPos = {
            centerX : document.body.clientWidth/2,
            centerY : document.body.clientHeight/2,
        }
        this.radius = 300;

        this.imageNum = 0;
        this.preImageNum = 0;
        this.wheelValue = 0;
        
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
        this.wheelValue  -= data.wheelDelta;
        if(this.wheelValue < 0){
            this.wheelValue = 0;
        }
        console.log(this.wheelValue);
    
        this.imageNum = Math.floor(this.wheelValue / 840);
        console.log(`imageNum = ${this.imageNum}`);
        if(this.preImageNum < this.imageNum){
            this.switchRegular();
        }
        else if(this.preImageNum > this.imageNum){
            this.switchReverse();
        }

    }

    switchRegular(){
        let deg;
        for(let i = 0 ;  i < this.imageSection.length; i++){
            deg = (45 * (i-this.imageNum)/180)*Math.PI;
            this.imageSection[i].style.left =`${this.centerPos.centerX + Math.cos(deg) * this.radius}px`;
            this.imageSection[i].style.top =`${this.centerPos.centerY + Math.sin(deg) * this.radius}px`;
        }
        this.preImageNum = this.imageNum;
    }

    switchReverse(){
        let deg;
        for(let i = 0 ;  i < this.imageSection.length; i++){
            deg = (45 * (i-this.imageNum)/180)*Math.PI;
            this.imageSection[i].style.left =`${this.centerPos.centerX + Math.cos(deg) * this.radius}px`;
            this.imageSection[i].style.top =`${this.centerPos.centerY + Math.sin(deg) * this.radius}px`;
        }
        this.preImageNum = this.imageNum;
    }

}