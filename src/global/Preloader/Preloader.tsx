import './Preloader.sass'
import { useState } from 'react';
import { useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader"


export default function Preloader() { 
    let [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(()=>{setLoading(false)},1000)
      },[]);

    return (
        <div  className={loading ? "preloader preloader-show" : "preloader preloader-hide" }>
          <PacmanLoader color='gold'  loading={loading} size={25} margin={2} />
        </div>
    );
}