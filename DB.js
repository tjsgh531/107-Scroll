export class DataBase{
    constructor(){
        this.imageNum = 0;
        this.imageSection = document.querySelectorAll('.imageSection');

        this.PictureProfile = {
            degArr : [0,45,75,100,-100,-75,-45], /* top,left속성 */
            sizeArr : [1, 0.5, 0.3, 0.1, 0.1, 0.3, 0.5],
            zIndex : [10, 5, 1, 0, 0, 1, 5],
            opacity : [1, 0.5, 0.3, 0.0, 0.0, 0.3, 0.5],
        }
        this.transitionSpeed = [300, 150, 100];
    }

    changeSection(){
     
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.mainWidth = this.stageWidth * 9/10 ;

        this.picWidth = this.mainWidth * 3/5;
        this.picHeight = this.picWidth * 3/4;
        
        this.centerPos = {
            posX : 0,
            posY : this.stageHeight / 2,
        }
    
        this.radius = this.mainWidth * 3/10;
    
        for(let i = 0 ; i< this.imageSection.length; i++){
            this.imageSection[i].style.transition = 'all 0.3s linear 0s';
        }

        let deg;
        let x;
        let y;

        for(let i = 0 ; i < this.imageSection.length; i++){
            this.imageSection[i].style.width = `${this.picWidth * this.PictureProfile.sizeArr[i]}px`;
            this.imageSection[i].style.height = `${this.picHeight * this.PictureProfile.sizeArr[i]}px`;
            this.imageSection[i].style.zIndex = `${this.PictureProfile.zIndex[i]}`;
            this.imageSection[i].style.opacity = `${this.PictureProfile.opacity[i]}`;

            deg = this.PictureProfile.degArr[i] * Math.PI / 180;

            x = this.centerPos.posX + Math.cos(deg) * this.radius ;
            y = this.centerPos.posY + Math.sin(deg) * this.radius - this.picHeight * this.PictureProfile.sizeArr[i] /2 ;

            this.imageSection[i].style.top = `${y}px`;
            this.imageSection[i].style.left = `${x}px`;
        }
    }
    
}