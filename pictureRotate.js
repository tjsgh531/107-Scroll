

export class PictureRotate{
    constructor(){        
        let pictures = [];
        fetch('./image')
            .then((data) => {
               
                console.log(data);
            });
    }
    
}