export class AudioManager{
    constructor(){
        this.audioIcon = document.createElement('div');
        this.audioIcon.classList.add('Icon');
        this.audioIcon.textContent = '▶';
     
 
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

            this.audioIcon.textContent = '||';    
            this.audio.play();

        }
        else{
            this.audioIcon.textContent = '▶';   
            this.audio.pause();
        }
    }
}