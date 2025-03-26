import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParada = 'text-sm';

    const esLocalidad = ciudad => localidades.filter(localidad => localidad.nombre === ciudad) 

  return (

    <>
      <div
        className={` ${nombreOrigenDestino ? 'bg-black text-white' : 'bg-white text-black'} w-40 flex justify-center items-center relative rounded-md py-1 border-groove border-2 overflow-hidden`}
      >
        <p className={`${nombreOrigenDestino ? 'bg-black' : ''} uppercase font-jockey ${esLocalidad ? 'text-[14px]' : 'text-sm'}} z-50`}>{nombre}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>

      </div>
    </>
  );
};
