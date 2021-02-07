export class AudioManager{
    constructor(){
        this.audioIcon = new Image();
        this.audioIcon.src ='./image/playIcon.png';
 
        this.audioIcon.style.display = 'inline-block';

        this.audio = document.createElement('audio');
        this.audio.src = './BGM/BGM.mp3';
        this.audio.loop = true;

        this.isPlaying = false;

        document.getElementById('audioManager').appendChild(this.audio);
        document.getElementById('audioManager').appendChild(this.audioIcon);

        this.audioIcon.addEventListener('click',this.OnClick.bind(this));
    }
    OnClick(){
        this.isPlaying = !this.isPlaying; 
        if(this.isPlaying){
            this.audioIcon.src ='./image/pauseIcon.png';
            this.audio.play();

        }
        else{
            this.audioIcon.src ='./image/playIcon.png';
            this.audio.pause();
        }
    }
}