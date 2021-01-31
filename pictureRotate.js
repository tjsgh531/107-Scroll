import{
    PictureChange
}from './pictureChange.js';

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
 
        this.isSpeedControl = false;
        this.wheelSpeed = 0;
        this.maxWheelSpeed = 1000;
        this.wheelDirection;
        this.wheelReverseDir = false;
        this.transitionSpeed = 0.8;

        this.init();
        window.addEventListener('wheel',this.wheelEvent.bind(this));

        this.pictureChange = new PictureChange(this.imageNum,this.transitionSpeed);  
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
        this.checkIsWheelEvent(data.wheelDelta);

        if(!this.isSpeedControl){
            this.isSpeedControl = true;
            this.wheelSpeedControl();
        }

        if(!this.wheelEventEnd){
            this.wheelValue  -= data.wheelDelta;
            if(this.wheelValue < 0){
                this.wheelValue = 0;
            }
            

            this.imageNum = Math.floor(this.wheelValue / 600);

            if(this.preImageNum !== this.imageNum){
                this.pictureChange.getImageNum(this.imageNum);

                if(this.preImageNum < this.imageNum){
                    this.switchRegular();
                }
                
                else if(this.preImageNum > this.imageNum){
                    this.switchReverse();
                }
            }
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

    checkIsWheelEvent(wheelDir){ 
        if(!this.isChecking){
            this.isChecking = true;
           /* 휠 방향이 변했는지 체크하는 부분 */
            if(this.wheelDirection !== null && this.wheelDirection !== wheelDir){
                this.wheelReverseDir = true;
            }
            else{
                this.wheelReverseDir = false;
            }
            this.wheelDirection = wheelDir;
            
            /* 0.2초 뒤 체킹을 false로 바꿈 만약 wheel중이라면 바로 true로 다시 바뀜 */
            setTimeout(() => {
                this.wheelEventEnd = true;
                this.isChecking = false;
            },200);
        }
    }

    wheelSpeedControl(){
        const speedControlInterval = setInterval(()=> {
            if(this.wheelReverseDir){
                this.wheelSpeed = 0;
            }

            if(this.wheelEventEnd){
                if(this.wheelSpeed > 0){
                    this.wheelSpeed -= 30;
                    this.UpdateTransitionSpeed();
                }
                else{
                    this.isSpeedControl = false;
                    clearInterval(speedControlInterval);
                }
            }

            else{
                if(this.maxWheelSpeed > this.wheelSpeed){
                    if(this.wheelSpeed < 600){
                        this.wheelSpeed +=800;
                    }
                    else{
                        this.wheelSpeed +=100;
                    }
                }
                this.UpdateTransitionSpeed();

            }
        },30)
    }

    UpdateTransitionSpeed(){

        if(this.wheelSpeed < 250){
            this.transitionSpeed = 0.8;
        }
        else{
            this.transitionSpeed =  400/ this.wheelSpeed;
        }

        for(let i = 0 ; i < this.imageSection.length; i++){ 
            this.imageSection[i].style.transition = `all ${this.transitionSpeed}s linear 0s`;
        }

        for(let i = 0 ; i < this.pictureChange.images.length; i++){
            this.pictureChange.images[i].style.transition = `all ${this.transitionSpeed}s linear 0s`;
        }
    }
}