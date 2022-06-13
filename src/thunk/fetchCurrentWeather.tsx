import { WeatherService } from "../services/services"
import { CurrentWeatherSlice } from "../slice/slice"
import { AppDispath } from "../store/store"

export const fetchCurrentWeather = (payload:string)=> {
    return async(dispatch:AppDispath)=>{
        try{
            dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather())
            const res = await WeatherService.getCurrentValue(payload)
            if(res.status === 200){
                dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSucces(res))
            }else{
                dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res))
            }
        }catch(err){
            console.log(err);
            
        }
    }
}