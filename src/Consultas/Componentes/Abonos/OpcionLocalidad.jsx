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
    initial={{x: '20%', opacity:0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration:.25,  delay: index * .1, ease:'backOut'}}
   onClick={clickearImg}
   className='flex flex-col'
   >
      <div className='flex relative
      w-[80px] h-[80px] lg:w-[70px] lg:h-[70px] xl:w-[100px] xl:h-[100px] overflow-hidden rounded-3xl cursor-pointer'>
        <img
          src={`/img-consultas/${nombre}.webp`}
          alt=""
          className={`${localidadClickeada ? "filter brightness-50 blur-[1px]" : '' } absolute h-full object-cover`}
        />
        <motion.div 
        initial={{opacity: 0, scale:0}}
        animate={{opacity: localidadClickeada ? 1 : 0, scale: localidadClickeada ? 1:0}}
        transition={{duration: .2, ease:'backOut'}}
        className="w-full h-full flex items-center justify-center">
        <FaCheckCircle
          className='text-4xl z-50'
        />
        </motion.div>
      </div>
      <p className='text-xs lg:text-sm xl:text-base uppercase text-center font-jockey'>{nombre}</p>
    </motion.div>
  )
}
