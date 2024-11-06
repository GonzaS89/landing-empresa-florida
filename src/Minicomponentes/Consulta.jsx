import React, {forwardRef} from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Consulta = forwardRef((props, ref) => {

    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false,  // Se ejecuta cada vez que el componente entra/sale
        threshold: 0.3,      // El componente se considera visible cuando el 50% está en vista
      });

    const returnBg = val => {
        return val === 'Horarios' ? 
        'bg-white' : 'bg-rojofuerte'
    }

    const returnTextColor = val => {
        return val === 'Horarios' ? 
        '' : 'text-white'
    }

    const returnButtonStyle = val => {
        return val === 'Horarios' ?
        'bg-rojofuerte text-white' : 'bg-white text-rojofuerte'
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
      transition={{ duration: 0.5 , delay: (props.index * 1)}}
    className={`${returnBg(props.titulo)} sm:h-[450px] lg:h-auto flex flex-col justify-center lg:justify-evenly items-start py-8 px-8 pr-16 gap-8  md:gap-10 lg:gap-4 xl:gap-2`}>
        <h2 className={`${returnTextColor(props.titulo)} text-3xl xl:text-3xl uppercase font-bold`}>{props.titulo}</h2>
        <p className={`${returnTextColor(props.titulo)} italic`}>{props.contenido}</p>
        <button className={`${returnButtonStyle(props.titulo)} min-w-44 p-2 md:p-4 uppercase font-bold md:text-lg xl:text-xl font-secundaria tracking-wider hover:bg-slate-800 hover:text-white transition-all duration-300`}>{props.boton}</button>
    </motion.div>
  )
})
