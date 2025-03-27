import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-sm text-white';
    const estiloParadaContainer = 'text-sm py-0 w-32 rounded-lg absolute r-0'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className={`${esLocalidad(nombre) ? 'w-40 rounded-md py-1 ' : estiloParadaContainer} bg-slate-900 text-black flex justify-center items-center relative border-groove border-2 overflow-hidden`}
      >
        <p className={`${esLocalidad(nombre) ? 'text-white text-shadow' : estiloParadaTexto} font-thin uppercase font-jockey z-50`}>{nombre}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>
        <img src={`/img-consultas/${nombre}.webp`} alt="" className={`${nombreOrigen || nombreDestino ? 'brightness-[.15]' : 'brightness-[.6]'}   w-full absolute blur-[1px]`}/>
      </div>
    </>
  );
};
