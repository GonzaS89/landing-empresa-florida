import React from 'react';
import { OpcionLocalidadDestino } from './OpcionLocalidadDestino';
import { useReturnDestinos } from '../../HooksCons/useReturnDestinos';
import { useHeight } from '../../HooksCons/useHeight';
import { motion } from 'framer-motion';

export const Bloquelocalidadesdestino = ({ origen, destino, recibirVia, recibirLocalidadDestino }) => {

    const { arrayDestinos } = useReturnDestinos(origen) 

    const {hLg} = useHeight();

  return (
    <div className='flex flex-col px-1 w-full'>
    <motion.h1 
    initial={{opacity:0}}
    animate={{opacity: origen !== null ? 1 : 0}}
    transition={{duration: .5}}
    className='text-left text-2xl md:text-4xl font-jockey'>Destino</motion.h1>
    <div className="flex items-start gap-2 uppercase text-sm overflow-x-scroll container-paradas">
      {arrayDestinos?.length > 0 && 
        arrayDestinos.map((localidad, index) => (
          <OpcionLocalidadDestino
            key={index}
            index={index}
            nombre={localidad}
            enviarLocalidadDestino={recibirLocalidadDestino}
            localidadDestino={destino}
            localidadOrigen={origen}
            enviarVia={recibirVia}
          />
        ))}
    </div>
  </div>
  )
}
