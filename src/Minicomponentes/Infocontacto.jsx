import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";

export const Infocontacto = (props) => {

    const returnIcon = val => {
        if(val === 'teléfono'){return <GiSmartphone className='text-7xl'/>}
        if(val === 'dirección'){return <HiLocationMarker className='text-7xl'/>}
        else{return <HiOutlineMail className='text-7xl'/>}
    }

  return (
    <div className="flex flex-col items-center gap-2">
        {returnIcon(props.titulo)}
        <h2 className='text-3xl'>{props.titulo}</h2>
        <h3>{props.contenido}</h3>
    </div>
  )
}
