

export class PictureChange{
    constructor(imgNum){
        this.imageSection = document.querySelectorAll('.imageSection');
        
        this.preImageNum = imgNum;
        this.imageNum = imgNum;

        this.images = [];
        this.initImageSet();
    }
    initImageSet(){
        for(let i = 0 ; i < this.imageSection.length; i++){
            const item = new Image();
            this.images.push(item);
            this.imageSection[i].appendChild(item);
        }

        for(let i = 0 ; i< 6; i++){
            this.images[i].src =`./image/${i}.jpg`;
        }
    }

    getImageNum(imgNum){
        this.imageNum = imgNum;

        if(this.imageNum !== this.preImageNum){
            this.changePicture();
            this.preImageNum = this.imageNum;
        }
    }

    changePicture(){
        const centerChildNum = this.imageNum % 8;
        const nextChildNum = (this.imageNum + 1) % 8;
        let preChildNum;

        if(this.imageNum -1 >= 0){
            preChildNum = (this.imageNum -1 ) % 8;
        }
        else{
            preChildNum = 7;
        }

        this.images[centerChildNum].src = `./image/${this.imageNum}.jpg`;
        this.images[nextChildNum].src = `./image/${this.imageNum+1}.jpg`;
        
        if(this.imageNum -1 >= 0){
            this.images[preChildNum].src = `./image/${this.imageNum -1}.jpg`;
        }
        else{
            this.images[preChildNum].src = '';
        }
    }
}