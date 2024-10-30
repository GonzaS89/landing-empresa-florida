import React from 'react';
import { FcAssistant } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";

export const Caract = (props) => {

    const returnIcon = val => {
        return val === 'atencion' ? 
        <FcAssistant className='text-7xl'/> : 
        <FcMultipleDevices className='text-7xl'/>
    }

    const returnBg = val => {
      return val === 'atencion' ? 'bg-[#10375C]' : 'bg-rojofuerte'
    }

  return (
    <div className={`flex flex-col items-center justify-around px-6 py-6 gap-8 ${returnBg(props.refe)} text-white`}>
            <span>{returnIcon(props.refe)}</span>
            <h2 className='uppercase text-2xl font-bold'>{props.titulo}</h2>
            <p className='text-lg lg:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum corrupti placeat, cumque deserunt quam iste eius aut quos maxime. Asperiores veniam voluptate mollitia, officiis nostrum consequatur voluptas neque molestias.</p>
        </div>
  )
}
