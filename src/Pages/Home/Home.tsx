import s from './Home.module.sass'
import WeatherToday from './components/WeatherToday/WeatherToday';
import WeatherTodoayInfo from './components/WeatherTodoayInfo/WeatherTodayInfo';
import Days from './components/Days/Days';










function Home() {
  return (
    <div  className={s.home}>
      <div className={s.home_wrapper}>
        <WeatherToday/>
        <WeatherTodoayInfo/>
        
      </div>
      <Days/>
    </div>
  );
}

export default Home;
