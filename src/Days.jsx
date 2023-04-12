import React from "react";

export default function Days(){
    let days = []

    for(let i=1;i<=30;i++){
        days.push(i)
    }

    return (<>
        {days.map(day => {
            return <div className='text-gray-50 text-lg cursor-pointer m-1 grid bg-gray-900 w-10 h-10 text-center rounded-3xl place-items-center'>{day}</div>
        })}
    </>)
}