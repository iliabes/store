
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import  CurrentWeatherSliceReduser  from '../slice/slice'


const rootReducer = combineReducers({
    CurrentWeatherSliceReduser
})
export const  store = configureStore({ reducer: rootReducer })

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore  = typeof store
export type AppDispath  = AppStore['dispatch']
