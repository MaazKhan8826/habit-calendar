import React from "react";
import Days from "./Days";

export default function Cal(props){
    const {name} = props

    return (
        <div className='bg-gray-100 rounded-lg w-full flex flex-col shadow-xl shadow-pink-900/50 place-items-center hover:shadow-pink-900/80'>
           <h1 className="font-semibold text-4xl my-2">{name}</h1>
           <div className="grid grid-cols-10 w-full place-items-center px-4 pb-3 pt-2">
            <Days />
           </div>
        </div>
    )
}