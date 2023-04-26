import './App.css';
import react, {useState, useContext} from 'react'
import Cal from './Calender'

let globalCounter = 0
let habitCount = 0

function App() {
  const [cals,createCal] = useState([])
  const [habit,createHabit] = useState("")

  const deleteCalendar = (taskID) => {
    createCal(cals.filter(item => item.id!==taskID))
  }

  function createCalendar(event){
    event.preventDefault()
    createCal(items => {
      createHabit("")
      return [...items,{id:globalCounter++,habits:habit}]
    })
    console.log(globalCounter)
  }

  return (
    <main className="bg-pink-500 h-[100vh] text-gray-900 flex flex-col place-items-center">
      <h1 className='p-4 pb-1 text-4xl text-white mb-8 font-bold'>Habit Tracking Calendars</h1>
      <form onSubmit={createCalendar} className='mb-8'>
        <input type='text' className='bg-gray-900 text-lg shadow-xl shadow-pink-800/50 hover:shadow-pink-800/80 mr-3 py-1 rounded text-white' value={habit} required onChange={(event) => createHabit(event.target.value)}></input>
        <button className='rounded bg-gray-100 text-lg shadow-xl shadow-pink-800/50 hover:shadow-pink-800/80 text-black font-semibold px-3 py-1'>Create Calendar</button>
      </form>
        <div>
          {cals.map(cal => {
            return <div className='text-black w-[40vw] flex flex-col place-items-center mb-10' key={cal.id}>
              <Cal name={cal.habits} id={cal.id} delCal = {deleteCalendar} />
            </div>
          })}
        </div>
    </main>
  );
}

export default App;
