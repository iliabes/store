import s from  './WeatherTodoayInfo.module.sass'
import WeatherTodayItem from './weatherTodayItem/weatherTodayItem';
import { Weather } from '../../../../store/type';


export interface Item {
  id: string,
  item: string,
  value: string
}



interface Props{
  weather: Weather
}

interface obj{
  description? : string
}


export default function WeatherTodoayInfo({weather}:Props) { 







  


  
const fellLike:any = weather.main.feels_like
const pressure:any = weather.main.pressure
let precipitation:any = 0
weather.weather?.forEach((i:obj)=>{precipitation = i.description})
const wind:any = weather.wind?.speed




let arr:Item[] = [
  {
    id:'temperature',
    item: 'Температура',
    value: `20° - ощущается как ${Math.floor(fellLike)}°`
  },
  {
    id:'pressure',
    item: 'Давление ',
    value: `${pressure} мм ртутного столба - нормальное`
  },
  {
    id:'precipitation',
    item: 'Осадки',
    value: precipitation
  },
  {
    id:'wind',
    item: 'Ветер',
    value: `${wind} м/с юго-запад - легкий ветер`,
  }
]





    return (
      <>
      <div className={s.WeatherTodoayInfo}>
      <div className={s.background_transparent}></div>
        {arr.map((elem: Item)=> (<WeatherTodayItem key={elem.value} item={elem}/>) )}
      
      </div> 
      </>

    );

}

      
    