
import { AppDispath } from "../store/store"
import axios from 'axios';
import {weekLoading, weekSucces,weekError} from '../slice/weekSlice'

async function  getWeek(){
    const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=57.83&units=metric&lon=60.60&lang=ru&exclude=minutely,hourly&appid=2607112734128ccb8b24ee86e9d33c4f')

    return response

    }
    
    // https://api.openweathermap.org/data/2.5/onecall?lat=57.83&units=metric&lon=60.60&lang=ru&exclude=minutely,hourly&appid=483e600f73b57747534a60e204f1b14f
export const fetchCurrentWeatherWeek = ()=> {
    return async(dispatch:AppDispath)=>{
        
        let response = await getWeek()

        try{
            dispatch(weekLoading())
        
            if(response.status === 200){
                dispatch(weekSucces(response))
            }else{
                dispatch(weekError(response))
            }
        }catch(err){
            console.log(err);
            
        }
    }
}


