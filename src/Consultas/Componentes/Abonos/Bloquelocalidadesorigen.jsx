import React from 'react';
import { OpcionLocalidad } from './Opcionlocalidad';
import { useHeight } from '../../HooksCons/useHeight';
import localidades from '../../Data/localidades.json'

export const Bloquelocalidadesorigen = ({ origen, recibirLocalidad }) => {

const {hLg} = useHeight()

  return (
    <div className={`flex flex-col px-1 ${hLg ? 'gap-4' : 'gap-2'} w-full`}>
<h1 className={`${hLg ? 'text-2xl' : 'text-xl'} text-left text-white`}>Origen</h1>
    <div className="flex items-start gap-2 overflow-x-scroll">
      {localidades.map((localidad, index) => (
        <OpcionLocalidad
          key={index}
          index={index}
          nombre={localidad.nombre}
          enviarLocalidad={recibirLocalidad}
          localidadOrigen={origen}
        />
      ))}
    </div>
  </div>
  )
}
