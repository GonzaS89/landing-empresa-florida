import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const OpcionLocalidad = ({
    nombre,
    enviarLocalidad,
    localidadOrigen,
    index
  }) => {

    const [localidadClickeada, setLocalidadClickeada] = useState(false);
    const clickearImg = () => {
      enviarLocalidad(nombre);
    };
  
    useEffect(() => {
      localidadOrigen === nombre
        ? setLocalidadClickeada(true)
        : setLocalidadClickeada(false);
    }, [localidadOrigen, nombre]);

  return (
    <motion.div 
    initial={{y: '20%', opacity:0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration:.25,  delay: index * .1, ease:'backOut'}}
   onClick={clickearImg}>
      <div className='flex relative 
      w-[80px] h-[80px] overflow-hidden rounded-3xl cursor-pointer'>
        <img
          src={`public/img-consultas/${nombre}.avif`}
          alt=""
          className={`${localidadClickeada ? "sombrearImg" : '' } absolute h-full`}
        />
        <motion.div 
        initial={{opacity: 0, scale:0}}
        animate={{opacity: localidadClickeada ? 1 : 0, scale: localidadClickeada ? 1:0}}
        transition={{duration: .5, ease:'backOut'}}
        className="w-full h-full flex items-center justify-center">
        <FaCheckCircle
          className='text-4xl z-50'
        />
        </motion.div>
      </div>
      <p className='text-xs uppercase text-white'>{nombre}</p>
    </motion.div>
  )
}
