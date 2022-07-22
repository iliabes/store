import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { popUp } from '../store/type'
import {WeatherWeek} from '../store/type'
 
const initialState = {
   popUpData:{
      temperature:0,
      pressure:0,
      precipitation:0,
      wind:0,
      show:false,
      day:'Понедельник',
      icon:'sun'
   }
}

export const popUpSlice = createSlice({
    name: 'current_weather_week',
    initialState,
    reducers: {
      pushPopUp(state,action: any) {
        console.log('action',action.payload)
        state.popUpData = action.payload
      }

    }
  })





  export const {pushPopUp} = popUpSlice.actions
  export default popUpSlice.reducer