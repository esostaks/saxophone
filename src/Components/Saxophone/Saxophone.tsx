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
      src: "/sounds/cat-meow-1.mp3",
      img: "/images/img-cat-2.png"
    },
    {
      keyCode: 87,
      text: "W",
      src: "/sounds/cat-meow-2.mp3",
      img: "/images/img-cat-1.png"
    },
    {
      keyCode: 69,
      text: "E",
      src: "/sounds/cat-meow-3.mp3",
      img: "/images/img-cat-4.png"
    },
    {
      keyCode: 82,
      text: "R",
      src: "/sounds/cat-meow-4.mp3", 
      img: "/images/img-cat-3.png"
    },
    {
      keyCode: 84,
      text: "T",
      src: "/sounds/cat-meow-5.mp3",
      img: "/images/img-cat-5.png"
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
    }

    return (
        <div className="wrapper">
            <div className="saxoBox">
                <div className={style.main}>
                    <div className={style.keys}>
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
                          src="/images/img-saxophone.png" 
                          alt="saxophone"
                          width="1000"
                          height="1000" />
                        <div className={style.imageWrapper}>
                          {saxoKeys.map((key) => (
                          <img 
                              src={key.img} 
                              key={key.img}
                              className={activeKey === key.text ? 'img__active' : 'img_hidden'}
                              width="350"
                              height="300"
                              alt="cat" />
                          ))}</div>
                        
                    </div>
                </div>
            </div>
          
            </div>  
        
    )
}

export default Saxophone