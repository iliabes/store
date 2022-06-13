import axios, { Axios, AxiosResponse } from "axios";
import { Weather } from "../store/type";

export class WeatherService {
    static getCurrentValue(city:string):Promise<AxiosResponse<Weather>>{
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2607112734128ccb8b24ee86e9d33c4f`)
    }
}

// return axios.get('https://api.openweathermap.org/data/2.5/weather?q=yekaterinburg&appid=2607112734128ccb8b24ee86e9d33c4f')