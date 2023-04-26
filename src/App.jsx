import './App.css';
import react, {useState, createContext, useEffect} from 'react'
import Cal from './Calender'

export const userContext = createContext(null)
let globalCounter = 0
let days = []

for(let i = 1; i<=30; i++){
  days.push(i)
}

function App() {
  const defaultCalendars = localStorage.getItem("calendar")
  const [cals,createCal] = useState(()=>{
    return JSON.parse(localStorage.getItem('calendar')) || []
  })
  const [habit,createHabit] = useState("")
  const [crossed,setCrossed] = useState(false)

  useEffect(() => {localStorage.setItem("calendar", JSON.stringify(cals))},[cals])

  const daysToPush = days.map(day => {
    return {day: day, cross: crossed}
  })

  function crossDay(current,id){
    cals.map(cal => {
      if(cal.id===id){
        cal.days.map(day =>{
          if(day.day === current){
              if(day.cross===false){
                  return day.cross=true
              } else {
                  return day.cross=false
              }
          }
      })
      }
    })
    createCal([...cals])
}

  function deleteCalendar(taskID) {
    console.log('I was run')
    createCal(cals.filter(item => item.id!==taskID))
    console.log(cals)
    console.log(taskID)
  }

  function createCalendar(event){
    event.preventDefault()
    createCal(items => {
      createHabit("")
      return [...items,{id:globalCounter++,habits:habit,days:[...daysToPush]}]
    })
  }

  return (
    <main className="bg-pink-500 h-[100%] text-gray-900 flex flex-col place-items-center">
      <h1 className='p-4 pb-1 text-4xl text-white mb-8 font-bold'>Habit Tracking Calendars</h1>
      <form onSubmit={createCalendar} className='mb-8'>
        <input type='text' className='bg-gray-900 text-lg shadow-xl shadow-pink-800/50 hover:shadow-pink-800/80 mr-3 py-1 rounded text-white' value={habit} required onChange={(event) => createHabit(event.target.value)}></input>
        <button className='rounded bg-gray-100 text-lg shadow-xl shadow-pink-800/50 hover:shadow-pink-800/80 text-black font-semibold px-3 py-1'>Create Calendar</button>
      </form>
        <div>
          {cals.map(cal => {
            return <div className='text-black w-[40vw] flex flex-col place-items-center mb-10' key={cal.id}>
              <userContext.Provider value={{cal,delCal:deleteCalendar, crossDay:crossDay}}>
                <Cal />
              </userContext.Provider>
            </div>
          })}
        </div>
    </main>
  );
}

export default App;
