 export type Weather = {
     main: {
         temp: number
         feels_like?: number,
         pressure?:number
     },
     weather?: [
        {
           id: string,
           main: string,
           description: string,
           icon: string
        }
      ],
     wind?:{
        speed:number
     }
 } 



export interface IDayly {
   dt:number,
   temp:{
      day:number,
      night:number
   },
   weather:[
      {
         description:string,
         main:string
      }
   ],
   feels_like:{
      day:number,
      night:number
   },

}


 export type WeatherWeek = {
     daily:IDayly[]
     response?:{
      statusText:string,
      status:number
     },
     isLoading: boolean
 } 


 export interface popUp {
   popUp:{
      temperature:number,
      pressure:number
      precipitation:number,
      wind:number,
      show:boolean
      day:string,
      icon:string
   }
 }