import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-sm';
    const estiloParadaContainer = 'text-sm py-0 w-32 rounded-lg absolute r-0'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className='text-white flex flex-col relative w-40 h-[35px] z-50'
      >
        <p className={`${esLocalidad(nombre) ? '' : estiloParadaTexto} text-xs text-white bg-slate-900 rounded-lg px-1 font-thin uppercase font-jockey z-50 absolute left-[-15px] top-[-10px]`}>{nombre}</p>
        {nombre === origen || destino === nombre}
        {/* <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/> */}
        <div className="w-40 bg-white h-full border-2 absolute">
          <img src={`/img-consultas/${nombre}.webp`} alt=""  className="h-full w-full object-fill"/>
        </div>
      </div>
    </>
  );
};
