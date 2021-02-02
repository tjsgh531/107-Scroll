export class InitSet{
    constructor(){

        this.imageSection = document.querySelectorAll('.imageSection');
        this.PicprofileObj ={
            degArr : [0,45,75,-75,-45],
            sizeArr : [1, 0.5, 0.3, 0.3, 0.5],
            zIndex : [10,5,1,1,5],
        }

            
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

        this.init();
    }
   
    init(){
        let deg;
        let x;
        let y;

        for(let i = 0 ; i < this.imageSection.length; i++){
            const image = new Image();
            image.src =`./image/${i}.jpg`;
            this.imageSection[i].appendChild(image);
            
            this.imageSection[i].style.width = `${this.picWidth * this.PicprofileObj.sizeArr[i]}px`;
            this.imageSection[i].style.height = `${this.picHeight * this.PicprofileObj.sizeArr[i]}px`;
            this.imageSection[i].style.zIndex = `${this.PicprofileObj.zIndex[i]}`;

/* test부분 지워야 할것 */
            let testNum = Math.floor(Math.random() * 100000000);
            this.imageSection[i].style.backgroundColor = `#${testNum.toString(16).padStart(8,0)}`;
/* test부분 지워야 할것 */

            deg = this.PicprofileObj.degArr[i] * Math.PI / 180;
          

            x = this.centerPos.posX + Math.cos(deg) * this.radius ;
            y = this.centerPos.posY + Math.sin(deg) * this.radius - this.picHeight * this.PicprofileObj.sizeArr[i] /2 ;

            this.imageSection[i].style.top = `${y}px`;
            this.imageSection[i].style.left = `${x}px`;
        }
    }

}