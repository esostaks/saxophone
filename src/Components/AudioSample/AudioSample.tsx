import { useState, useRef } from 'react';
import style from '../AudioSample/AudioSample.module.scss'




const AudioSample = () => {

    const [isPlaying, setIsPlaying] = useState(false);

  const audioElement = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioElement.current) {
      audioElement.current = new Audio("/sounds/sample.mp3");
    }

    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }

    setIsPlaying(!isPlaying);
  };

    return (
        <div>
        <button className={style.button} onClick={toggleAudio}>CLICK ME</button>
      </div>
    )

   
}

export default AudioSample