import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
;


export const Infocontacto = (props) => {

    const returnIcon = val => {
        if(val === 'teléfono'){return <FaPhoneAlt className='w-[40px] h-[40px]'/>}
        if(val === 'dirección'){return <FaMapMarkerAlt className='w-[40px] h-[40px]'/>}
        if(val === 'horario'){return <FaClock className='w-[40px] h-[40px]'/>}
        else{return <FaEnvelopeOpenText className='w-[40px] h-[40px]'/>}
    }

  return (
    <div className="flex items-center gap-4">
        {returnIcon(props.refe)}
        <div>
        <h2 className='uppercase text-gray-400 md:text-lg xl:text-2xl'>{props.titulo}</h2>
          <h3 className='xl:text-lg uppercase'>{props.contenido}</h3>
        </div>
        </div>
  )
}
