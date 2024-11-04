import React from 'react';
import { FcAssistant } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";




export const Caract = (props) => {

    const returnIcon = val => {
        if(val === 'cobertura'){return <FaMapMarkedAlt className='text-6xl text-gray-700'/>}
        else if(val === 'escolares'){return <FaBusAlt className='text-6xl text-gray-700'/>}
        else if(val === 'excursiones'){return <FaChildren className='text-6xl text-gray-700'/>}
        else{return <BiSolidLike className='text-6xl text-gray-700'/>}
    }


    const returnAnimation = i => {
      return i % 2 !== 0 ? 'xl:-translate-y-16' : ''
  }

  return (
    <div className={`flex flex-col items-center ${returnAnimation(props.index)} justify-around px-6 py-4 md:py-8 gap-6 bg-white xl:max-w-auto shadow-2xl shadow-gray-700`}>
            <span className='bg-gray-200 p-6 rounded-full'>{returnIcon(props.titulo)}</span>
            <h2 className='uppercase text-2xl font-bold'>{props.titulo}</h2>
            <p className='text-center leading-loose italic lg:text-lg'>{props.contenido}</p>
        </div>
  )
}
