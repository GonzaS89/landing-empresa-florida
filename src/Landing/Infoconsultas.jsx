import React, {useRef} from "react";
import { Consulta } from "../Minicomponentes/Consulta";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImgConsulta from '/img-consultas/consulta.jpg'

export const Infoconsultas = () => {

  const childRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce:true,
    threshold: 0.3, // Se activa cuando el 50% del elemento está en viewport
  });

  return (
    <Element name="consultas">
      <div className="consultas-bg px-8 py-12 sm:px-12">
        <div className="max-w-6xl lg:my-0 lg:mx-auto flex flex-col gap-16 overflow-hidden" ref={ref}>
          <motion.h1 
           initial={{opacity:0 , y:-200}}
           animate={inView ? {opacity:1, y:0} : {}}
           transition={{duration: 1}}
          className="text-center font-bold text-4xl xl:text-4xl uppercase text-white md:px-12">
            Actualizamos nuestra sección de consultas para tu comodidad
          </motion.h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Consulta
              titulo={"Horarios"}
              ref={childRef}
              contenido={
                "Renovamos nuestro sistema de consulta de horarios. Ahora tenés información completa de los recorridos. Asi también el precio del boleto del recorrido en cuestión."
              }
              boton={"Ir a horarios"}
              index={0}
            />
            <motion.span 
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,  // Si está visible, opacidad es 1, si no es 0
              x: inView ? 0 : 100,      // Si está visible, posición a 0, si no a 100 (fuera de vista)
            }}
            transition={{ duration: 0.5 , delay: .5}}
            className="max-h-[450px] bg-slate-800 sm:max-h-[450px]">
              <img
                src={ImgConsulta}
                alt=""
                className="w-full h-full"
              />
            </motion.span>
            <Consulta
              titulo={"Abonos"}
              contenido={
                "Agregamos una nueva función a la sección de consultas. Ahora podés cotizar tu abono de manera online y saber con anticipación cuanto vas a necesitar para adquirirlo."
              }
              boton={"Cotizá tu abono"}
              index={1}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};
