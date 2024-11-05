import React from "react";
import { Caract } from "../Minicomponentes/Caract";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Nosotros2 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Se anima una sola vez
    threshold: 0.2, // Se activa cuando el 50% del elemento está en viewport
  });

  return (
    <Element name="servicios">
      <div className="flex px-8 sm:px-12 xl:px-0 py-12 nosotros-bg servicios-container" >
        <div className="max-w-6xl my-0 mx-auto flex flex-col gap-12 lg:gap-12" ref={ref}>
          <motion.h1 
            initial={{opacity:0,y:-200}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{duration: 1}}
          className="text-center font-bold text-3xl md:text-4xl xl:text-4xl uppercase text-white md:px-12 titulo-servicios">
            Estos servicios te ofrecemos como empresa
          </motion.h1>
          <motion.div 
          initial={{opacity:0,x:-200}}
          animate={inView ? {opacity:1, x:0} : {}}
          transition={{duration: 1, delay:.5}}
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:mt-24">
            <Caract
              titulo={"cobertura"}
              index={0}
              contenido={
                "Te contamos que nuestros servicios tienen gran cobertura en localidades del este tucumano. Incluso llegando a Las Cejas y 7 de abril (Santiago del Estero)"
              }
            />
            <Caract
              titulo={"escolares"}
              index={1}
              contenido={
                "Al margen de nuestro amplio listado de servicios diarios, contamos con algunos servicios en establecimientos escolares. Tanto al ingreso como a la salida"
              }
            />
            <Caract
              titulo={"excursiones"}
              index={2}
              contenido={
                "Mediante un acuerdo que hicimos con la fundacion Miguel Lillo, llevaremos a distintas delegaciones escolares a conocer la cultura de nuestra provincia"
              }
            />
            <Caract
              titulo={"redes sociales"}
              refe={""}
              index={3}
              contenido={
                "Tenemos presencia constante en las redes. Allí podés hacernos las consultas o las denuncias que que necesites o creas conveniente para tu comodidad"
              }
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};
