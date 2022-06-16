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

