import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {WeatherWeek} from '../store/type'
 

const initialState: WeatherWeek = {
  daily: [{
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  },
  {
    dt:0,
    temp:{
       day:0,
       night:0
    },
    weather:[
       {
          description:'0',
          main:'clear'
       }
    ],
    feels_like:{
       day:0,
       night:0
    }
  }

    ],
  response:{
    statusText:'string',
    status:0
    },
    isLoading: false
}

export const weekSlice = createSlice({
    name: 'current_weather_week',
    initialState,
    reducers: {
      weekLoading(state) {
        state.isLoading = true
      },
      weekSucces(state, action: PayloadAction<AxiosResponse<WeatherWeek>>) {
        
        
        state.daily = action.payload.data.daily
        state.isLoading = false
        state.response = {
          status:action.payload.status,
          statusText:action.payload.statusText
        }
        
        
      },
      weekError(state, action: PayloadAction<AxiosResponse<WeatherWeek>>) {
        state.isLoading = false
        state.response = {
          status:action.payload.status,
          statusText:action.payload.statusText
        }
      },
    },
  })





  export const {weekLoading, weekSucces,weekError} = weekSlice.actions
  export default weekSlice.reducer