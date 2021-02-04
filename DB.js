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
        
    }

    setImageNum(newNum){
        this.imageNum = newNum;
    }

    setSectionArr(newArr){
        
    }
}