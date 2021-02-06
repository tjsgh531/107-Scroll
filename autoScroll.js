export class AutoScroll{
    constructor(){
        this.checkBox = document.getElementById('checkBox');
        console.log(typeof(this.checkBox));
        this.sentence = document.querySelector('#autoScrollSwitch p');
        this.checkBox.addEventListener('click',()=>{
            this.switchStatus = this.checkBox.checked;
            console.log(this.switchStatus);
            if(this.switchStatus){
                this.sentence.textContent = '자동스크롤 ON';
                this.autoScroll();
            }
            else{
                this.sentence.textContent ='자동스크롤 OFF';
                this.stopAutoScroll();
            }
        })
    }

    autoScroll(){
        console.log('autoScroll실행중');
    }

    stopAutoScroll(){
        console.log('stopAutoScroll실행중');
    }
}