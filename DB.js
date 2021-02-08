export class DataBase{
    constructor(){
        this.imageNum = 0;
        this.maxImageNum = 345;
        this.imageSection = document.querySelectorAll('.imageSection');

        this.PictureProfile = {
            degArr : [0, 45, 75, 90, 105, 135, -180, -135, -105, -90, -75, -45], /* top,left속성 */
            sizeArr : [1.1, 0.4, 0.3, 0.1, 0, 0, 0, 0, 0, 0.1, 0.3, 0.4],
            zIndex : [10, 5, 2, 1, 0, 0, 0, 0, 0, 1, 2, 5],
            opacity : [1, 0.5, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.5],
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
            posX : -this.stageWidth/11,
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
            if(i== 0){
                this.imageSection[i].firstElementChild.style.border = '5px solid white';
            }
            else{
                this.imageSection[i].firstElementChild.style.border = '';
            }
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

        /*이미지 넣어주는 코드 */
        this.imageInput();
    }

    imageInput(){
        for(let i = 0 ; i < this.imageSection.length; i++){
            /* center의 이미지 다음것들 */
            if(i < 7){
                /* 다음것이 maxImageNum을 넘을 경우 */
                if(this.imageNum + i > this.maxImageNum){
                    this.imageSection[i].firstElementChild.src = '';
                }
                /* 정상적으로 다음 이미지를 가져와야 하는 경우 */
                else{
                
                    this.imageSection[i].firstElementChild.src =`./image/${this.imageNum + i}.jpg`;
                }
            }
            /* center의 이미지 이전 것들 */
            else{
                /* 이전 것이 0보다 작은 경우 */
                if(this.imageNum + i -12 < 0){
                    this.imageSection[i].firstElementChild.src = '';
                }
                /* 정상적으로 이전 이미지를 가져와야 하는 경우 */
                else{
                    this.imageSection[i].firstElementChild.src =`./image/${this.imageNum + i -12}.jpg`;
                }
            }
        }
    }
    
}