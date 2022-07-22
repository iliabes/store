import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './Days.module.sass'
import { useCustomDispatch } from '../../../../hooks/store';
import {IDayly} from '../../../../store/type'
import { log } from 'console';
import {pushPopUp}  from '../../../../slice/popUpSlice'


interface Props {
  item: IDayly;
}


export default function Day({item}:Props) { 
    let data = new Date(item.dt * 1000)
    const dispath = useCustomDispatch()

    function dispathPupUp(){
      let dataDay = {
        temperature:item.temp.day,
        pressure:item.feels_like.day,
        precipitation:item.feels_like.night,
        wind:item.temp.night,
        show:true,
        day:getDay(data.getDay()),
        icon:getIcon(item.weather[0].main)
      }

      dispath(pushPopUp(dataDay))
      
    }

    function upperCaseFirstLetter(name:string){
     const result = name.charAt(0).toUpperCase() + name.slice(1)
     return result
    }

    function getDay(nm:number){
    
      if(nm === undefined){return 0}
      switch(nm){
        case 1:{
          return 'Понедельник'
        }
        case 2:{
          return 'Вторник'
        }
        case 3:{
          return 'Среда'
        }
        case 4:{
          return 'Четверг'
        }
        case 5:{
          return 'Пятница'
        }
        case 6:{
          return 'Суббота'
        }
        case 0:{
          return 'Воскресенье'
        }
      }
    }

    function getIcon(str:string){
      if(str === undefined){return 0}
      switch(str){
        case 'Snow':{
          return 'snow'
        }
        case 'Clouds':{
          return 'mainly_cloudy'
        }
        case 'Clear':{
          return 'sun'
        }
        case 'Rain':{
          return 'small_rain'
        }

      }
    }

    return (
      <div onClick={dispathPupUp} className={s.week_day}>
      <p className={s.day_day}>{getDay(data.getDay())}</p>
      <GenerateSvg id={getIcon(item.weather[0].main)}/>
      <p className={s.temp_day}>{Math.floor(item.temp.day)}</p>
      <p className={s.temp_night}>{Math.floor(item.temp.night)}</p>
      <p className={s.info}>{upperCaseFirstLetter(item.weather[0].description)}</p>
      </div>
    );
}