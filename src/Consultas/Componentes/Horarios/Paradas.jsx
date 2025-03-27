import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-xs'
    const estiloParadaContainer = 'text-white bg-slate-800 rounded-xs border-1'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className={` ${nombreOrigenDestino ? 'bg-white text-black' : esLocalidad(nombre) ? 'bg-white text-black' : estiloParadaContainer} w-40 flex justify-center items-center relative border-groove border-2 overflow-hidden py-1 rounded-lg`}
      >
        <p className={`${esLocalidad(nombre) ? '' : estiloParadaTexto} text-sm uppercase font-jockey z-50`}>{esLocalidad(nombre) ? nombre : index === 0 ? `desde ${nombre}` : index === (length - 1) ? `hasta ${nombre}` : `por ${nombre}`}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>
      </div>
    </>
  );
};
