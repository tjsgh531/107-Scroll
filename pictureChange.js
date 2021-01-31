

export class PictureChange{
    constructor(imgNum){
        this.imageSection = document.querySelectorAll('.imageSection');
        this.preImageNum = imgNum;
        this.imageNum = imgNum;
        this.centerChildNum = 0;
    }
    getImageNum(imgNum){
        this.imageNum = imgNum;

        if(this.imageNum !== this.preImageNum){
            this.changePicture();
            this.preImageNum = this.imageNum;
        }
    }
    changePicture(){
        this.centerChildNum = this.imageNum % 8;
        
        for(let i =0 ; i < 5 ; i++){
            this.imageSection[this.centerChildNum].style.backgroundImage =`url('./image/${this.imageNum}.jpg)`;
        }
    }
}