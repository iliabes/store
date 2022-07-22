import sl from './Header.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg';
import { useEffect, useState } from 'react';







function Header() {
  let [theme, setTheme] = useState('light')

  const darkMode = ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')

  }

  useEffect(()=>{
    const root = document.querySelector(':root') as HTMLElement
    root.style.setProperty('--bg-default',`var(--bg-${theme})`)
    root.style.setProperty('--shadow-default',`var(--shadow-${theme})`)
    root.style.setProperty('--img-default',`var(--img-${theme})`)
    root.style.setProperty('--color-default',`var(--color-${theme})`)
    root.style.setProperty('--icon-default',`var(--icon-${theme})`) 
    root.style.setProperty('--colorTitle-default',`var(--colorTitle-${theme})`)
  },[theme])

  return (
    <header className={sl.header}>
        <div className={sl.wrapper}>
            <GenerateSvg className={sl.logo}  id={'logo'}/>
            <p>Weather online</p>

        </div>
        <div className={sl.wrapper}>
            <div onClick={darkMode} className={sl.dark_mode}>
            <GenerateSvg  className={sl.dark}   id={'darkmode'}/>
            </div>
        </div>
    </header>
  );
}

export default Header;
