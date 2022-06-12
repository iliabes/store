import GenerateSvg from '../../../../global/GenerateSvg/GenerateSvg';
import s from  './WeatherToday.module.sass'



export default function WeatherToday() { 


    return (
      <div className={s.WeatherToday}>
        <div className={s.block_top}>
          <div className={s.block_top_wrapper}>
            <div className={s.taday_temperature}>20°</div>
            <div className={s.day}>Сегодня</div>
          </div>
          <GenerateSvg className={s.weatherImg} id="sun"/>
        </div>
        <div className={s.block_bottom}>
          <div className={s.block_bottom_taim}>Время: 15:09</div>
          <div className={s.block_bottom_town}>Город: Москва</div>
        </div>
      </div>
    );
}