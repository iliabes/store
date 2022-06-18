import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './Days.module.sass'
import { IDayWether } from './Days'

interface Props {
  item: IDayWether;
}



export default function Day({item}:Props) { 

  function upperCaseFirstLetter(name:string){
     const result = name.charAt(0).toUpperCase() + name.slice(1)

     return result
  }


    return (
      <div className={s.day}>
      <p className={s.day_day}>{item.day}</p>
      <p className={s.day_info}>{item.day_info}</p>
      <GenerateSvg id={item.icon_id}/>
      <p className={s.temp_day}>{item.temp_day}</p>
      <p className={s.temp_night}>{item.temp_night}</p>
      <p className={s.info}>{upperCaseFirstLetter(item.info)}</p>
      </div>
    );
}