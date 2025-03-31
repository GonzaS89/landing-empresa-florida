import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import localidades from '../../Data/localidades.json'
import { motion } from "framer-motion";


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino;

    const estiloParadaTexto = 'text-xs'

    const esLocalidad = ciudad => localidades.some(localidad => localidad.nombre === ciudad);


  return (

    <>
      <div
        className={`${esLocalidad(nombre) ? 'text-black w-40 bg-white' : 'text-white rounded-xs border-1 px-4 bg-zinc-600'} ${nombreOrigen || nombreDestino ? 'bg-zinc-800 text-white' : ''} flex justify-center items-center relative border-groove border-2 overflow-hidden py-[2px] rounded-lg`}
      >
        <p className={`${esLocalidad(nombre) ? '' : estiloParadaTexto} ${nombreOrigen || nombreDestino ? 'bg-zinc-800' : ''} text-sm uppercase font-jockey z-50 text-center`}>{esLocalidad(nombre) ? nombre : index === 0 ? `desde ${nombre}` : index === (length - 1) ? `hasta ${nombre}` : `por ${nombre}`}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>
        <motion.img 
        initial={{ x: nombreOrigen ? 0 : 100, rotateY: nombreOrigen ? 0 : 180 }}
        animate={{ x: nombreOrigen ? 125 : 0 }}
        transition={{ duration: 2 , repeat: Infinity, delay: nombreDestino ? 1 : 0 }}
        src={`/img-consultas/bus.png`} alt="" 
        className={`${nombreOrigen || nombreDestino ? 'flex' : 'hidden'} absolute w-8 h-5`}/>
      </div>
    </>
  );
};
