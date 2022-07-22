
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import  CurrentWeatherSliceReduser  from '../slice/slice'
import weekSliceReduser from '../slice/weekSlice'
import popUpSlice from '../slice/popUpSlice'

const rootReducer = combineReducers({
    CurrentWeatherSliceReduser,weekSliceReduser,popUpSlice
  
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
