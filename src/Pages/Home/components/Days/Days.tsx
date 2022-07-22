
import s from  './Days.module.sass'
// import Filter from './Filter';
import Day from './Day'
import {IDayly} from '../../../../store/type'

interface Props{
  daily: IDayly[]
}


export default function Days({daily}:Props) {   
    return (
      <div className={s.days_wrapper}>
        <div className={s.background_transparent}></div>
        <div className={s.days}>
          {/* <Filter/> */}
          <div className={s.week_day_wrapper}>
          {daily.map((item:any,index:any)=>(<Day key={index} item={item}/>))}
          </div>
        </div>
      </div> 
    );

  }
  
