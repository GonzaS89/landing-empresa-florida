import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-sm'
    const estiloParadaContainer = 'text-sm py-0 w-32 rounded-lg'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className={` ${nombreOrigenDestino ? 'bg-black text-white' : 'bg-white text-black'} ${esLocalidad(nombre) ? 'w-40 rounded-md py-1 ' : estiloParadaContainer} flex justify-center items-center relative border-groove border-2 overflow-hidden`}
      >
        <p className={`${nombreOrigenDestino ? 'bg-black' : ''} ${esLocalidad(nombre) ? '' : estiloParadaTexto} uppercase font-jockey z-50`}>{nombre}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>
      </div>
    </>
  );
};
