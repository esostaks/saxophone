import { useEffect, useState } from "react";
import style from '../Saxophone/Saxophone.module.scss'

type SaxoKeys = {
    keyCode: number,
    text: string,
    src: string,
    img: string 
  }
  
  const saxoKeys: SaxoKeys[] = [
    {
      keyCode: 81,
      text: "Q",
      src: "src/assets/sounds/cat-meow-1.mp3",
      img: "src/assets/images/img-cat-2.png"
    },
    {
      keyCode: 87,
      text: "W",
      src: "src/assets/sounds/cat-meow-2.wav",
      img: "src/assets/images/img-cat-1.png"
    },
    {
      keyCode: 69,
      text: "E",
      src: "src/assets/sounds/cat-meow-3.wav",
      img: "src/assets/images/img-cat-4.png"
    },
    {
      keyCode: 82,
      text: "R",
      src: "src/assets/sounds/cat-meow-4.wav", 
      img: "src/assets/images/img-cat-3.png"
    },
    {
      keyCode: 84,
      text: "T",
      src: "src/assets/sounds/cat-meow-5.wav",
      img: "src/assets/images/img-cat-5.png"
    },
  ];

  

const Saxophone = () => {

  

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            playSound(event.key.toUpperCase())
        })
      })

    const [activeKey, setActiveKey] = useState('')  

    const playSound = (selector: string) => {
       const audio = document.getElementById(selector) as any
        audio.play()
        setActiveKey(selector)
        console.log(activeKey)
    }

    return (
        <div className="wrapper">
            <div className="saxoBox">
                <div className={style.imageWrapper}>
                  {saxoKeys.map((key) => (
                    <img 
                    src={key.img} 
                    key={key.img}
                    className={activeKey === key.text ? 'img__active' : 'img_hidden'}
                    width="350"
                    height="300"
                    alt="cat" />
                  ))}
                </div>
                <div className="main">
                    <div className="keys">
                        {saxoKeys.map((key) => (
                            <button 
                                onClick={ () => {playSound(key.text)}}
                                key={key.src}
                                className="key" 
                                id={key.src}>
                                {key.text}
                                <audio 
                                    className="audio" 
                                    id={key.text} 
                                    src={key.src}>
                                </audio>
                            </button>
                        ))}
                    </div>
                    <div className={style.saxophone}>
                        <img 
                        className={style.saxo_img} 
                        src="src/assets/images/img-saxophone.png" 
                        alt="saxophone"
                        width="1000"
                        height="1000" />
                    </div>
                </div>
            </div>
          
            </div>  
        
    )
}

export default Saxophone