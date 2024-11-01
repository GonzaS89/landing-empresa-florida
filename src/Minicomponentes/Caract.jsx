import React from 'react';
import { FcAssistant } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import { IoIosPhonePortrait } from "react-icons/io";



export const Caract = (props) => {

    const returnIcon = val => {
        return val === 'atencion' ? 
        <FcAssistant className='text-7xl'/> : 
        <FcMultipleDevices className='text-7xl'/>
    }

    const returnBg = val => {
      return val === 'atencion' ? 'bg-[#10375C]' : 'bg-rojofuerte'
    }

    const returnAnimation = i => {
      return i % 2 !== 0 ? 'xl:-translate-y-16' : ''
  }

  return (
    <div className={`flex flex-col items-center ${returnAnimation(props.index)} justify-around px-6 py-4 gap-2 bg-white xl:max-w-auto`}>
            <span className='bg-gray-200 p-6 rounded-full'><IoIosPhonePortrait className='text-6xl text-gray-700'/></span>
            <h2 className='uppercase text-2xl font-bold'>{props.titulo}</h2>
            <p className='text-center leading-loose italic lg:text-sm xl:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum corrupti placeat, cumque deserunt quam iste eius aut quos maxime. Asperiores veniam voluptate mollitia</p>
        </div>
  )
}
