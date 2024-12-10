import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Opcionvia } from "./Opcionvia";
import { motion } from "framer-motion";
import { useConfirmacionLocalidad } from "../../HooksCons/useConfirmacionLocalidad";

export const OpcionLocalidadDestino = ({
    nombre,
    enviarLocalidadDestino,
    localidadDestino,
    localidadOrigen,
    enviarVia,
    index
  }) => {

    const [viaElegida, setViaElegida] = useState(null);
  const {localidadClickeada,
    nombreOpcionVia,
    opcionesViasVisibles,
    confirmacionSeleccion} = useConfirmacionLocalidad(localidadOrigen,localidadDestino,nombre)

  const clickearImg = () => {
    enviarLocalidadDestino(nombre);
  };

  const recibirVia = data => {
    setViaElegida(data);
    enviarVia(data);
  };

  return (
    <motion.div 
    initial={{y: '20%', opacity:0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration:.25,  delay: index * .1, ease:'backOut'}}
    onClick={clickearImg} 
    className="flex flex-col items-center">
      <div className='flex items-center justify-center relative overflow-hidden rounded-3xl cursor-pointer  w-[80px] h-[80px] lg:w-[70px] lg:h-[70px] xl:w-[100px] xl:h-[100px]'>
      <img
          src={`/img-consultas/${nombre}.webp`}
          alt=""
          className={`${localidadClickeada ? "filter brightness-50 blur-[1px]" : '' } absolute h-full object-cover`}/>
         <motion.div 
        initial={{opacity: 0, scale:0}}
        animate={{opacity: confirmacionSeleccion ? 1 : 0, scale: confirmacionSeleccion ? 1:0}}
        transition={{duration: .2, ease:'backOut'}}
        className="w-full h-full flex items-center justify-center absolute ">
        <FaCheckCircle
          className='text-4xl z-50'
        />
        </motion.div>
        <div
          className={opcionesViasVisibles ? "flex flex-col gap-2" : "hidden"
          }
        >
          <Opcionvia
            nombre={nombreOpcionVia}
            enviarVia={recibirVia}
            viaElegida={viaElegida}
            localidadDestino={localidadDestino}
          />
          <Opcionvia
            nombre={"w. posse"}
            enviarVia={recibirVia}
            viaElegida={viaElegida}
            localidadDestino={localidadDestino}
          />
        </div>
      </div>
      <p className='text-xs lg:text-sm xl:text-base uppercase text-center font-jockey'>{nombre}</p>
    </motion.div>
  )
}
