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

        this.wheelEventEnd = true;
        this.isChecking = false;
        this.wheelSpeed = 0;
        this.maxWheelSpeed = 1800;
        this.isSpeedControl = false;
        
        this.init();
        window.addEventListener('wheel',this.wheelEvent.bind(this));

        /*setInterval(()=> {
            console.log(`wheelSpeed : ${this.wheelSpeed}`);
        },500);
        */
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

        /* 0.2초마다 wheelEventEnd를 true로 만듬 */
        /* 이때 wheelEvent가 실행 중이라면 다시 바로 false로 만들것이다. */
        this.wheelEventEnd = false;
        this.checkIsWheelEvent();

        if(!this.isSpeedControl){
            this.isSpeedControl = true;
            this.wheelSpeedControl();
        }

        this.wheelValue  -= data.wheelDelta;
        if(this.wheelValue < 0){
            this.wheelValue = 0;
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

    checkIsWheelEvent(){ 
        if(!this.isChecking){
            this.isChecking = true;    
            setTimeout(() => {
                this.wheelEventEnd = true;
                this.isChecking = false;
            },200);
        }
    }

    wheelSpeedControl(){
        console.log(`wheelEventEnd : ${this.wheelEventEnd}`);
        const speedControlInterval = setInterval(()=> {
            if(this.wheelEventEnd){
                if(this.wheelSpeed > 0){
                    this.wheelSpeed -= 30;
                }
                else{
                    this.isSpeedControl = false;
                    clearInterval(speedControlInterval);
                }
            }
            else{
                console.log('스피드 올려봐');
                this.wheelSpeed +=90;
            }
            console.log(`wheelSpeed : ${this.wheelSpeed}`);
        },50)
        
    }
}