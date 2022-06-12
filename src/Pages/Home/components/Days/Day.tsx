import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './Days.module.sass'
import { IDayWether } from './Days'

interface Props {
  item: IDayWether;
}



export default function Day({item}:Props) { 
  console.log(item);
  

    return (
      <div className={s.day}>
      <p className={s.day_day}>{item.day}</p>
      <p className={s.day_info}>{item.day_info}</p>
      <GenerateSvg id={item.icon_id}/>
      <p className={s.temp_day}>{item.temp_day}</p>
      <p className={s.temp_night}>{item.temp_night}</p>
      <p className={s.info}>{item.info}</p>
      </div>
    );
}