/* 휠 스피드 부분을 보강 해야합니다. */

export class PictureRotate{
    constructor(){        
        this.imageSection = document.querySelectorAll('.imageSection');
        this.centerPos = {
            centerX : -300,
            centerY : document.body.clientHeight/2 - 300,
        }
        this.radius = document.body.clientWidth /2;

        this.imageNum = 0;
        this.preImageNum = 0;
        this.wheelValue = 0;

        this.isChecking = false;
        this.wheelSpeed = 0;
        this.transitionSpeed = 1 ;

        this.wheelEventEnd = true;
        
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

        this.wheelSpeed -= data.wheelDelta;
        
        if(!this.isChecking){
            this.initWheelSpeed();
        }
        

        this.imageNum = Math.floor(this.wheelValue / 840);

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

    /*휠 속도가 빠르면 transition스피드도 빨라지게하는 메소드*/
    initWheelSpeed(){
        this.isChecking = ture;
        setTimeout( () => {
           if(this.wheelSpeed != 0){
               const decentWheelSpeed = setInterval(()=>{
                   if(this.wheelSpeed > 0){
                        this.wheelSpeed -= 120;
                   }
                   else{
                       clearInterval(decentWheelSpeed);
                   }
               },300);
           }
            this.isChecking = false;
        },1000);
        
    }
}