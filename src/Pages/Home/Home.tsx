import s from './Home.module.sass'
import WeatherToday from './components/WeatherToday/WeatherToday';
import WeatherTodoayInfo from './components/WeatherTodoayInfo/WeatherTodayInfo';
import Days from './components/Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { useEffect } from 'react';
import { fetchCurrentWeather  } from '../../thunk/fetchCurrentWeather';
import { fetchCurrentWeatherWeek } from '../../thunk/weekThunk';
import PopUp from '../../global/PopUp/PopUp';




function Home() {
  const {weather} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))
  const {daily} = useCustomSelector((state)=>(state.weekSliceReduser))

  
  const dispath = useCustomDispatch()
  useEffect(()=>{
   
    dispath(fetchCurrentWeatherWeek())
    dispath(fetchCurrentWeather('yekaterinburg'))
    
  },[])




  return (
    <>
    <PopUp/>
    <div  className={s.home}>
      <div className={s.home_wrapper}>
        
        <WeatherToday weather={weather} />
        <WeatherTodoayInfo weather={weather}/>
      </div>
      <div className={s.home_wrapper}>
      <Days daily={daily} />
      </div>
    </div>
    </>
  );
}

export default Home;
