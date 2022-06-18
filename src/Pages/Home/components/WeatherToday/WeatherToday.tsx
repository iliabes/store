import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './WeatherToday.module.sass'
import {Weather} from '../../../../store/type'

interface Props{
  weather: Weather
}




export default function WeatherToday({ weather }:Props) { 
  const now = new Date();
  let min: string | number = now.getMinutes()
  if(min < 10){min = '0' + min}
  const hour = now.getHours()

  
    return (
      <div className={s.WeatherToday}>
        <div className={s.background_transparent}></div>
        <div className={s.block_top}>
          <div className={s.block_top_wrapper}>
            <div className={s.taday_temperature}>{Math.floor(weather.main.temp)}</div>
            <div className={s.day}>Сегодня</div>
          </div>
          <GenerateSvg className={s.weatherImg} id="sun"/>
        </div>
        <div className={s.block_bottom}>
          <div className={s.block_bottom_taim}>Время: <p className={s.time}>{hour +':' +min}</p></div>
          <div className={s.block_bottom_town}>Город: <p className={s.town}>Нижний Тагил</p></div>
        </div>
      </div>
    );
}