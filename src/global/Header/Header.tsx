import sl from './Header.module.sass'
import Logo from '../../assets/icon/logo.webp';
import DarkMode from '../../assets/icon/darkMode.webp';
import Select from 'react-select'
import GenerateSvg from '../GenerateSvg/GenerateSvg';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



function Header() {
  return (
    <header className={sl.header}>
        <div className={sl.wrapper}>
            <GenerateSvg classname={sl.wrapper}  id={'logo'}/>
            <p>Weather online</p>

        </div>
        <div className={sl.wrapper}>
            <Select options={options} />
            <GenerateSvg classname={sl.wrapper}  id={'darkmode'}/>
        </div>
    </header>
  );
}

export default Header;
