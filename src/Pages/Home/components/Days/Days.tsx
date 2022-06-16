import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './Days.module.sass'
import Filter from './Filter';
import Day from './Day'
import {Weather} from '../../../../store/type'
import { useContext, useEffect, useState } from 'react';
import AppCtx from '../../../../store/context/context'

interface Props{
  weather: Weather
}

export interface IDayWether {
  day: any,
  day_info: any,
  icon_id: any,
  temp_day: any,
  temp_night: any,
  info: any,
  
}

export default function Days(arrWeek:any) { 
  let [week,setWeek] = useState(0)
  let appContext = useContext(AppCtx);




console.log()
  useEffect(()=>{
    if(appContext != 0){
      setWeek(1)
    }
  })

  

  
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
      case 7:{
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

let wetherTest:any = [
  {
    day: 'Пт',
    day_info: '28 авг',
    icon_id: 'rain',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно',
  },
  {
    day: 'Завтра',
    day_info: '29 авг',
    icon_id: 'small_rain_sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь и солнце',
  },
  {
    day: 'Ср',
    day_info: '30 авг',
    icon_id: 'small_rain',
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь',
  },
  {
    day: 'Чт',
    day_info: '28 авг',
    icon_id: 'mainly_cloudy',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно',
  },
  {
    day: 'Пт',
    day_info: '28 авг',
    icon_id: 'rain',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно',
  },
  {
    day: 'Сб',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно',
  },
  {
    day: 'Вс',
    day_info: '28 авг',
    icon_id: 'sun',
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно',
  }
]

console.log(getIcon(appContext[0].icon),'icon');



  if(week === 1){
    const weather : IDayWether[]= [
      {
        day: getDay(appContext[0].day) ,
        day_info: appContext[0].data +' авг',
        icon_id: getIcon(appContext[0].icon),
        temp_day: '+'+ appContext[0].temp_day,
        temp_night: '+' + appContext[0].temp_night,
        info: appContext[0].description,
      },
      {
        day: getDay(appContext[1].day) ,
        day_info: appContext[1].data +' авг',
        icon_id: getIcon(appContext[1].icon),
        temp_day: '+'+ appContext[1].temp_day,
        temp_night: '+' + appContext[1].temp_night,
        info: appContext[1].description,
      },
      {
        day: getDay(appContext[2].day) ,
        day_info: appContext[2].data +' авг',
        icon_id: getIcon(appContext[2].icon),
        temp_day: '+'+ appContext[2].temp_day,
        temp_night: '+' + appContext[2].temp_night,
        info: appContext[2].description,
      },
      {
        day: getDay(appContext[3].day) ,
        day_info: appContext[4].data +' авг',
        icon_id: getIcon(appContext[3].icon),
        temp_day: '+'+ appContext[3].temp_day,
        temp_night: '+' + appContext[3].temp_night,
        info: appContext[3].description,
      },
      {
        day: getDay(appContext[4].day) ,
        day_info: appContext[4].data +' авг',
        icon_id: getIcon(appContext[4].icon),
        temp_day: '+'+ appContext[4].temp_day,
        temp_night: '+' + appContext[4].temp_night,
        info: appContext[4].description,
      },
      {
        day: getDay(appContext[5].day) ,
        day_info: appContext[5].data +' авг',
        icon_id: getIcon(appContext[5].icon),
        temp_day: '+'+ appContext[5].temp_day,
        temp_night: '+' + appContext[5].temp_night,
        info: appContext[5].description,
      },
      {
        day: getDay(appContext[6].day) ,
        day_info: appContext[6].data +' авг',
        icon_id: getIcon(appContext[6].icon),
        temp_day: '+'+ appContext[6].temp_day,
        temp_night: '+' + appContext[6].temp_night,
        info: appContext[6].description,
      },
    ]
    return (
      <div className={s.days_wrapper}>
        <div className={s.background_transparent}></div>
        <div className={s.days}>
          <Filter/>
          <div className={s.days_days_wrapper}>
          {weather.map((item:IDayWether,index)=>(<Day key={index} item={item}/>))}
          </div>
        </div>
      </div> 
    );
  }else{
    return (
      <div className={s.days_wrapper}>
        <div className={s.background_transparent}></div>
        <div className={s.days}>
          <Filter/>
          <div className={s.days_days_wrapper}>
          {wetherTest.map((item:IDayWether,index:any)=>(<Day key={index} item={item}/>))}
          </div>
        </div>
      </div> 
    );
}
  }
  
