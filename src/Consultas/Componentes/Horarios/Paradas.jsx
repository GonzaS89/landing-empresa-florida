import { motion } from "framer-motion";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";


export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

    const nombreOrigen = nombre === origen;
    const nombreDestino = nombre === destino

  return (

    <>
      <div
        className={` ${nombreOrigenDestino ? 'bg-black text-white' : 'bg-white text-black'} w-40 flex justify-center items-center relative rounded-md py-1 border-groove border-2 overflow-hidden`}
      >
        <p className={`${nombreOrigenDestino ? 'bg-black' : ''} uppercase font-jockey text-[14px] z-50`}>{nombre}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>

        {/* <motion.img 
        initial={{x: nombreOrigen ? 0 : '700%', rotateY: nombreDestino ? 180 : 0}}
        animate={{x:nombreOrigen ? '700%' : 0}}
        transition={{duration: 2, delay: nombreOrigen ? 2 : 2.5, repeat: Infinity}}
        src={`img-consultas/bus.png`} alt=""  className={`${nombreOrigenDestino ? 'flex' : 'hidden'} absolute w-6`}/> */}
      </div>
    </>
  );
};
