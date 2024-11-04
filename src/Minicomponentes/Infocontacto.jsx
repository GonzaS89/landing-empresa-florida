import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
;


export const Infocontacto = (props) => {

    const returnIcon = val => {
        if(val === 'teléfono'){return <FaPhoneAlt className='md:w-[45px] h-[45px] lg:w-[30px] lg:h-[30px]'/>}
        if(val === 'dirección'){return <FaMapMarkerAlt className='md:w-[45px] h-[45px] lg:w-[30px] lg:h-[30px]'/>}
        if(val === 'horario'){return <FaClock className='md:w-[45px] h-[45px] lg:w-[30px] lg:h-[30px]'/>}
        else{return <FaEnvelopeOpenText className='md:w-[45px] h-[45px] lg:w-[30px] lg:h-[30px]'/>}
    }

  return (
    <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-4">
        {returnIcon(props.refe)}
        <div>
        <h2 className='uppercase text-gray-400 text-center lg:text-left md:text-xl lg:text-base'>{props.titulo}</h2>
          <h3 className='text-center lg:text-left md:text-2xl lg:text-xl uppercase'>{props.contenido}</h3>
        </div>
        </div>
  )
}
