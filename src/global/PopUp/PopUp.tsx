import GenerateSvg from '../GenerateSvg/GenerateSvg';
import './PopUp.sass'
import { useCustomSelector } from '../../hooks/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushPopUp } from '../../slice/popUpSlice';

export default function PopUp() { 
    console.log('spop');
    let dispath = useDispatch()
    const {popUpData} = useCustomSelector((state)=>(state.popUpSlice))
    let [show, setShow] = useState(popUpData.show)
    console.log('show',show,popUpData.show);
    if(popUpData.show != show){
        setShow(popUpData.show)
    }
    


    function hide(){
        let data = {
            temperature:0,
            pressure:0,
            precipitation:0,
            wind:0,
            show:false
          }
          console.log(data)
          dispath(pushPopUp(data))
    }

let arr:any[] = [
  {
    id:'temperature',
    item: 'Температура',
    value: `20° - ощущается как ${Math.floor(0)}°`
  },
  {
    id:'pressure',
    item: 'Давление ',
    value: `${0} мм ртутного столба - нормальное`
  },
  {
    id:'precipitation',
    item: 'Осадки',
    value: 0
  },
  {
    id:'wind',
    item: 'Ветер',
    value: `${0} м/с юго-запад - легкий ветер`,
  }
]





        return (
            <>
            <div className={show === true ? 'PopUp' : 'PopUp PopUpNone'}>
            <div className='background_transparent'></div>
            <button className='btn-popup' onClick={hide}>x  </button>
              <div className="popup-top-cont">
                <p className='title-day'>{popUpData.day}</p>
                
              </div>
              <div className='item'>
                  <div className="title-item-cont">
                  <GenerateSvg id='temperature'/>
                  <p className='title-item'>Температура</p>
                  </div>
                  <p className='item-text'>{Math.floor(popUpData.temperature)}</p>
              </div>
              <div className='item'>
                  <div className="title-item-cont">
                    <GenerateSvg id='pressure'/>
                    <p className='title-item'>Давление</p>
                  </div>
                  <p className='item-text'>{Math.floor(popUpData.precipitation)}</p>
              </div>
              <div className='item'>
                  <div className="title-item-cont">
                    <GenerateSvg id='precipitation'/>
                    <p className='title-item'>Осадки</p>
                  </div>
                  <GenerateSvg id={popUpData.icon}/>
              </div>
              <div className='item'>
              <div className="title-item-cont">
                    <GenerateSvg id='wind'/>
                    <p className='title-item'>Ветер</p>
                  </div>
                  <p className='item-text'>{Math.floor(popUpData.wind)}</p>
              </div>
      
              
            </div> 
            </>
      
          );



}

      
    