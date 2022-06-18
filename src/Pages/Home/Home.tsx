import s from './Home.module.sass'
import WeatherToday from './components/WeatherToday/WeatherToday';
import WeatherTodoayInfo from './components/WeatherTodoayInfo/WeatherTodayInfo';
import Days from './components/Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { useEffect, useState } from 'react';
import { fetchCurrentWeather  } from '../../thunk/fetchCurrentWeather';
import axios from 'axios';
import AppCtx from '../../store/context/context';





function Home() {
  let [week , setWeek] = useState(0)

  const dispath = useCustomDispatch()
  const {weather} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))
  let weatherWeek: any = 0
  let arrWeek:any = []

  
  
  useEffect(()=>{
    async function getUser() {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=57.83&units=metric&lon=60.60&lang=ru&exclude=minutely,hourly&appid=2607112734128ccb8b24ee86e9d33c4f');
        weatherWeek = response.data.daily
        // console.log(weatherWeek);
        
      } catch (error) {
        console.error(error);
      }

     for (let index = 0; index < weatherWeek.length; index++) {
          let obj:any = null
          const element:any = weatherWeek[index];
          var data = new Date(element.dt * 1000);
          obj = {
            data:data.getDate(),
            day:data.getDay() + 1,
            temp_day:Math.floor(element.temp.day),
            temp_night:Math.floor(element.temp.night),
            description:element.weather[0].description,
            icon:element.weather[0].main
          }
          console.log(obj.icon)
    
          arrWeek.push(obj)
      //  console.log(arrWeek);
      
     }
    setWeek(arrWeek)

    }
    getUser()
    dispath(fetchCurrentWeather('yekaterinburg'))
    
  },[])




  return (
    <AppCtx.Provider value={week}>
    <div  className={s.home}>
      <div className={s.home_wrapper}>
        <WeatherToday weather={weather} />
        <WeatherTodoayInfo weather={weather}/>
        
      </div>
      <div className={s.home_wrapper}>
      <Days arrWeek={week} />
      </div>
    </div>
    </AppCtx.Provider>
  );
}

export default Home;
// https://api.openweathermap.org/data/2.5/forecast?q=Yekaterinburg&appid=2607112734128ccb8b24ee86e9d33c4f