
import { useState,useEffect,useRef } from 'react';


import s from './Background.module.sass'
import img from '../../assets/img/home.webp'
import light from '../../assets/img/light.jpg'
import dark from '../../assets/img/dark.jpg'


interface Ibg{
  backgroundImage:string
  backgroundColor?: string
}

let styleBg:Ibg = {
  backgroundImage: `url(${img});`,

}


export default function Background() : JSX.Element{ 
    let [loading, setLoading] = useState(true);
    const refImg = useRef<HTMLImageElement>(null);
    useEffect(() => {
            

    },[]);




    return (
        <div   id='bg' className={s.Background}>
          <img  src={light} alt="" />
          <img   src={dark} alt="" />
        </div>
    );
}


          {/* <img className={s.img} src={img} alt="image" /> */}