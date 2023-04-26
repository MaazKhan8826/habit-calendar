import React,{useState, useContext} from "react";
import {userContext} from './App.jsx'

let days = []

for(let i=1;i<=30;i++){
    days.push({"day":i,"cross":false})
}

export default function Days(){
    const calData = useContext(userContext)
    const {cal,delCal,crossDay} = calData
    const {id, habits, days} = cal

    return (<>
        {days.map(day => {
                return <div 
                    key={day.day} 
                    className={day.cross?'text-gray-900 relative font-semibold text-lg cursor-pointer m-1 grid bg-gray-100 w-10 h-10 text-center rounded-3xl place-items-center':'text-gray-50 hover:bg-pink-600 relative font-semibold text-lg cursor-pointer m-1 grid bg-gray-900 w-10 h-10 text-center rounded-3xl place-items-center'}
                    onClick={()=>crossDay(day.day,id)}
                    >
                {day.cross?<div className="w-1 h-full rotate-45 bg-pink-600 absolute z-10"></div>:null}
                {day.day}
                </div>
        })}
    </>)
}
{/* <div className="w-1 h-full rotate-45 bg-gray-900 absolute z-10"></div> */}