import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './Days.module.sass'
import Filter from './Filter';
import Day from './Day'

export interface IDayWether {
  day: string,
  day_info: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  info: string,
  
}

export default function Days() { 




const weather : IDayWether[]= [
  {
    day: 'Сегодня',
    day_info: '28 авг',
    icon_id: 'sun',
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


    return (
      <div className={s.days_wrapper}>
        <div className={s.days}>
          <Filter/>
          <div className={s.days_wrapper}>
          {weather.map((item:IDayWether,index)=>(<Day key={index} item={item}/>))}
          </div>
        </div>
      </div> 
    );
}