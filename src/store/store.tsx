
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import  CurrentWeatherSliceReduser  from '../slice/slice'
import weekReduser from '../slice/weekSlice'


const rootReducer = combineReducers({
    CurrentWeatherSliceReduser,
  
})
export const  store = configureStore({ 
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})




export type RootState  = ReturnType<typeof rootReducer>
export type AppStore  = typeof store
export type AppDispath  = AppStore['dispatch']
