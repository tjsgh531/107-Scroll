import{
    dataBase
}from './main.js';

export class AutoScroll{
    constructor(){
        this.checkBox = document.getElementById('checkBox');
        this.sentence = document.querySelector('#autoScrollSwitch p');
        this.canAutoScroll = false;
        this.autoScrollTime = 4000;

        this.checkBox.addEventListener('click',this.onClick.bind(this));
    }

    onClick(){
        this.switchStatus = this.checkBox.checked;
 
        if(this.switchStatus){
            this.sentence.textContent = '자동스크롤 ON';
            this.canAutoScroll = true;
            this.isAutoScroll = true;
            this.autoScroll();
        }
        else{
            this.sentence.textContent ='자동스크롤 OFF';
            this.isAutoScroll = false;
            this.stopAutoScroll();
        }
    }

    autoScroll(){
        console.log('autoScroll실행중');

        if(this.canAutoScroll && this.isAutoScroll){
            this.canAutoScroll = false;
            let imageSectiontemp = [...dataBase.imageSection];
            let temp;

            dataBase.imageNum++;
            if(dataBase.imageNum > dataBase.maxImageNum){
                dataBase.imageNum--;
            }
            else{
                temp = imageSectiontemp[0];
                imageSectiontemp.shift();
                imageSectiontemp.push(temp);
                dataBase.imageSection = [...imageSectiontemp];
            }

            dataBase.changeSection();

            setTimeout(() => {
                this.canAutoScroll = true;
                this.autoScroll();
            },this.autoScrollTime);
        }
    }

    stopAutoScroll(){
        console.log('stopAutoScroll실행중');
        this.canAutoScroll = false;
    }
}