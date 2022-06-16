import axios, { Axios, AxiosResponse } from "axios";
import { Weather } from "../store/type";
import { api } from "../axios";


export class WeatherService {
    static getCurrentValue(city:string):Promise<AxiosResponse<Weather>>{
    
        
        return api.get<Weather>(`/weather?q=${city}`)
    }
}

export class WeatherServiceWeek {
    static getCurrentValue(city:string):Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(`/forecast?q=${city}`)
    }
}
