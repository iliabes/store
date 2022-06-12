import s from  './Days.module.sass'



export default function Filter() { 

  interface Item{
    value: string
  }

  let arr:Item[] = [
    {
      value: 'На неделю'
    },
    {

      value: 'На месяц'
    },
    {
      value: 'На 10 дней'
    }
  ]






    return (
      <div className={s.filter}>
          <div className={s.filter_wrapper}>
          {arr.map((item: Item,index)=> (<button key={index}  className={s.tab}>{item.value}</button>))}
          </div>
          <button className={s.tab}>Отмена</button>
      </div>
    );
}