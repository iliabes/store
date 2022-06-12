import s from  './WeatherTodoayInfo.module.sass'
import WeatherTodayItem from './weatherTodayItem/weatherTodayItem';

export interface Item {
  id: string,
  item: string,
  value: string
}


export default function WeatherTodoayInfo() { 



let arr:Item[] = [
  {
    id:'temperature',
    item: 'Температура',
    value: '20° - ощущается как 17°'
  },
  {
    id:'pressure',
    item: 'Давление ',
    value: '765 мм ртутного столба - нормальное'
  },
  {
    id:'precipitation',
    item: 'Осадки',
    value: 'Без осадков'
  },
  {
    id:'wind',
    item: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер',
  }
]





    return (
      <>
      <div className={s.WeatherTodoayInfo}>
        {arr.map((elem: Item)=> (<WeatherTodayItem key={elem.value} item={elem}/>) )}
      
      </div> 
      </>

    );

}

      
    