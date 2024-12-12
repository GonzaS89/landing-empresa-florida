import React from 'react';
import { HiLocationMarker } from "react-icons/hi";

export const Extremorecorrido = ({nombre}) => {
  return (
    <div className={`flex ${nombre === 'inicio de recorrido' ? 'flex-col-reverse' : 'flex-col'} items-center justify-start`}>
        <HiLocationMarker className='text-3xl z-50 '/>
        <p className='text-xs uppercase font-jockey'>{nombre}</p>
    </div>
  )
}
