import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Axios, AxiosResponse } from 'axios'
import {Weather} from '../store/type'

type Response = {
    status: number,
    message: ''
}

interface CurrentWeather {
    weather: any,
    isLoading:boolean,
    response: Response
}

const initialState = {
    weather: {},
    isLoading:false,
    response:{
        status: 0,
        message: '',
    } 
}

export const CurrentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
      fetchCurrentWeather(state) {
        state.isLoading = true
      },
      fetchCurrentWeatherSucces(state, action: PayloadAction<AxiosResponse<Weather>>) {
        state.weather = action.payload.data
        state.isLoading = false
        state.response = {
          status:action.payload.status,
          message:action.payload.statusText
        }
      },
      fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
        state.isLoading = false
        state.response = {
          status:action.payload.status,
          message:action.payload.statusText
        }
      },
    },
  })



  export default CurrentWeatherSlice.reducer