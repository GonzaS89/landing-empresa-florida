import React, {forwardRef} from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export const Caract = forwardRef((props, ref) => {

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,  // Se ejecuta cada vez que el componente entra/sale
    threshold: 0.3,      // El componente se considera visible cuando el 50% está en vista
  });

    const returnIcon = val => {
        if(val === 'cobertura'){return <FaMapMarkedAlt className=' text-5xl xl:text-6xl text-gray-700'/>}
        else if(val === 'escolares'){return <FaBusAlt className=' text-5xl xl:text-6xl text-gray-700'/>}
        else if(val === 'excursiones'){return <FaChildren className=' text-5xl xl:text-6xl text-gray-700'/>}
        else{return <BiSolidLike className=' text-5xl xl:text-6xl text-gray-700'/>}
    }


  return (
    <motion.div 
    ref={(node) => {
      // Combinamos el ref del padre con el ref de `useInView`
      if (ref) ref.current = node;
      inViewRef(node);
    }}
    initial={{ opacity: 0, x: -100 }}
    animate={{
      opacity: inView ? 1 : 0,  // Si está visible, opacidad es 1, si no es 0
      x: inView ? 0 : 100,      // Si está visible, posición a 0, si no a 100 (fuera de vista)
    }}
    transition={{ duration: 0.5 , delay: (props.index * .25)}}
    className={`flex flex-col items-center justify-start px-6 py-4 md:py-8 gap-6 bg-white xl:max-w-auto shadow-2xl shadow-gray-700`}>
            <span className='bg-gray-200 p-6 rounded-full'>{returnIcon(props.titulo)}</span>
            <h2 className='uppercase text-xl md:text-xl font-bold'>{props.titulo}</h2>
            <p className='text-center leading-loose italic text-sm xl:text-base'>{props.contenido}</p>
        </motion.div>
  )
})
