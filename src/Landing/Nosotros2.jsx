import React, { useRef } from "react";
import { Caract } from "../Minicomponentes/Caract";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export const Nosotros2 = () => {

  const childRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce:true ,// Se anima una sola vez
    threshold: 0.3, // Se activa cuando el 50% del elemento está en viewport
  });

  return (
    <Element name="servicios">
      <div className="flex px-8 sm:px-12 xl:px-0 py-12 nosotros-bg servicios-container" >
        <div className="max-w-6xl my-0 mx-auto flex flex-col gap-12 lg:gap-12 overflow-hidden" ref={ref}>
          <motion.h1 
          initial={{opacity:0, y:50}}
          animate={{opacity: inView ? 1 : 0, y: inView ? 0 : -50}}
          transition={{duration:.75}}
          className='text-center font-bold text-3xl md:text-4xl uppercase text-white md:px-12 titulo-servicios'>
            Estos servicios te ofrecemos como empresa
          </motion.h1>
          <div 
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Caract
              titulo={"cobertura"}
              index={0}
              contenido={
                "Te contamos que nuestros servicios tienen gran cobertura en localidades del este tucumano. Incluso llegando a Las Cejas y 7 de abril"
              }
              ref={childRef}
            />
            <Caract
              titulo={"escolares"}
              index={1}
              contenido={
                "Al margen de nuestro amplio listado de servicios diarios, contamos con algunos servicios en establecimientos escolares. Tanto al ingreso como a la salida"
              }
              ref={childRef}
            />
            <Caract
              titulo={"excursiones"}
              index={2}
              contenido={
                "Mediante un acuerdo que hicimos con la fundacion Miguel Lillo, llevaremos a distintas delegaciones escolares a conocer la cultura de nuestra provincia"
              }
              ref={childRef}
            />
            <Caract
              titulo={"redes sociales"}
              refe={""}
              index={3}
              contenido={
                "Tenemos presencia constante en las redes. Allí podés hacernos las consultas o las denuncias que que necesites o creas conveniente para tu comodidad"
              }
              ref={childRef}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};
