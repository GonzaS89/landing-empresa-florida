import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-xs'
    const estiloParadaContainer = 'text-white rounded-xs border-1 w-32 bg-slate-950'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className={` ${esLocalidad(nombre) ? ' text-black w-40' : estiloParadaContainer} bg-white flex justify-center items-center relative border-groove border-2 overflow-hidden py-1 rounded-lg`}
      >
        <p className={`${esLocalidad(nombre) ? '' : estiloParadaTexto} text-sm uppercase font-jockey z-50`}>{esLocalidad(nombre) ? nombre : index === 0 ? `desde ${nombre}` : index === (length - 1) ? `hasta ${nombre}` : `por ${nombre}`}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>
      </div>
    </>
  );
};
