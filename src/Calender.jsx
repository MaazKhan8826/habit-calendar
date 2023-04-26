import React, {useContext} from "react";
import Days from "./Days";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {userContext} from './App.jsx'

export default function Cal(){
    const calData = useContext(userContext)
    const {cal,delCal} = calData
    const {id, habits, days} = cal

    return (
        <div className='bg-gray-100 rounded-lg w-full flex flex-col shadow-xl shadow-pink-900/50 place-items-center hover:shadow-pink-900/80'>
                <h1 className="font-semibold text-4xl my-2 relative w-full text-center">
                    {habits}
                    <FontAwesomeIcon icon={faTrash} onClick={() => delCal(id)} className="text-pink-600 absolute top-1 right-4 text-xl [tab-index:1] cursor-pointer" />
                </h1>
           <div className="grid grid-cols-10 w-full place-items-center px-4 pb-3 pt-2">
            <Days />
           </div>
        </div>
    )
}