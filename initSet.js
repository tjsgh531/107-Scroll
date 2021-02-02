export class InitSet{
    constructor(stageWidth, stageHeight){

        this.imageSection = document.querySelectorAll('.imageSection');

        this.resize(stageWidth,stageHeight);

        this.init();
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.mainWidth = this.stageWidth * 9/10 ;

        this.picWidth = this.mainWidth * 3/5;
        this.picHeight = this.picWidth * 3/4;

        this.centerPos = {
            posX : 0,
            posY : this.stageHeight / 2,
        }

        this.radius = this.mainWidth * 3/10;
    }
   
    init(){
        let deg;
        let x;
        let y;

        for(let i = 0 ; i < this.imageSection.length; i++){
            this.imageSection[i].style.width = `${this.picWidth}px`;
            this.imageSection[i].style.height = `${this.picHeight}px`;
            deg = i;
            if(i > 0){
                deg = i * (30 * 1/i) / 180 * Math.PI;
            }

            x = this.centerPos.posX + Math.cos(deg) * this.radius;
            y = this.centerPos.posY + Math.sin(deg) * this.radius - this.picHeight/2;

            this.imageSection[i].style.top = `${y}px`;
            this.imageSection[i].style.left = `${x}px`;
        }
    }

}