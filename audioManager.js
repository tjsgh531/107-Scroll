export class AudioManager{
    constructor(){
        this.audioIcon = new Image();
        this.audioIcon.src ='./image/pauseIcon.jpg';
        this.audioIcon.style.display = 'inline-block';
       

        this.audio = document.createElement('audio');
        this.audio.src = '';
        this.audio.loop = true;
        this.audio.play();

        this.isPlaying = true;

        document.getElementById('audioManager').appendChild(this.audio);
        document.getElementById('audioManager').appendChild(this.audioIcon);

        this.audioIcon.addEventListener('click',this.OnClick.bind(this));
    }
    OnClick(){
        this.isPlaying = !this.isPlaying; 
        if(this.isPlaying){
            this.audioIcon.src ='./image/pauseIcon.jpg';
            this.audio.play();

        }
        else{
            this.audioIcon.src ='./image/playIcon.jpg';
            this.audio.pause();
        }
    }
}