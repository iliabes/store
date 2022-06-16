import GenerateSvg from '../../../../../global/GenerateSvg/GenerateSvg';
import style from './weatherTodayItem.module.sass'
import {Item} from '../WeatherTodayInfo'

interface Props {
  item: Item;
}

export default function WeatherTodayItem({item}:Props) { 
  


    return ( 
      <div className={style.weatherTodayItem}>
        <GenerateSvg className='weatherTodayItem' id={item.id}/>
        <p className={style.item}>{item.item}</p>
        <p className={style.value}>{item.value}</p>
      </div>
    );
}