import sl from './Header.module.sass'
import Logo from '../../assets/icon/logo.webp';
import DarkMode from '../../assets/icon/darkMode.webp';
import Select from 'react-select'
import GenerateSvg from '../GenerateSvg/GenerateSvg';

const options = [
  { value: 'citi_01', label: 'Tagil' },
  { value: 'citi_01', label: 'Ekat' },
  { value: 'citi_01', label: 'Moskow' }
]

const customStyles = {
  option: (provided:any, state:any) => ({
    ...provided,
    borderBottom: '1px dotted blue  ',
    color: 'black',
    padding: 20,
  }),
  control: (styles  : any) => ({
    ...styles,
    width: '192px',
    height: '40px',
    border: 'none',
    borderRadius: '10px',
    zIndex:100
  }),  
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },

}


const getValue = ()=>{
  console.log('seda')
}

function Header() {
  return (
    <header className={sl.header}>
        <div className={sl.wrapper}>
            <GenerateSvg className={sl.logo}  id={'logo'}/>
            <p>Weather online</p>

        </div>
        <div className={sl.wrapper}>
            <Select  className={sl.select} classNamePrefix='castomSelect' styles={customStyles}  options={options} />
            <GenerateSvg className={sl.dark}   id={'darkmode'}/>
        </div>
    </header>
  );
}

export default Header;
