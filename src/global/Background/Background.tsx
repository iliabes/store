
import { useState,useEffect,useRef } from 'react';


import s from './Background.module.sass'
import img from '../../assets/img/home.webp'


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
          <img ref={refImg}  src={img} alt="" />
        </div>
    );
}


          {/* <img className={s.img} src={img} alt="image" /> */}