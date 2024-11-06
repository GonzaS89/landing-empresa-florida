import React from "react";
import { Carousel } from "flowbite-react";
import { Descripcion } from "../Minicomponentes/Descripcion";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Nosotros = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, // Se anima una sola vez
    threshold: 0.3, // Se activa cuando el 50% del elemento está en viewport
  });

  return (
    <Element name="institucion">
      <div className="px-8 pt-8 bg-rojofuerte overflow-hidden" ref={ref}>
        <div className="max-w-6xl my-o mx-auto flex flex-col items-center gap-12">
          <motion.h1 
          initial={{opacity:0 , y:-50}}
          animate={inView ? {opacity:1, y:0} : {}}
          transition={{duration: 1}}
          className="text-white text-3xl md:text-4xl font-bold uppercase">
            Institución
          </motion.h1>
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
            <motion.div 
            initial={{ opacity: 0, x: -500, scale:0 }}
            animate={inView ? { opacity: 1, x: 0,scale:1 } : {}}
            transition={{ duration: 1, delay:.3 }}
            className="flex items-center relative w-full h-[450px] md:h-[550px] lg:h-[450px] xl:h-[450px] lg:w-1/2 xl:w-5/12">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-azulclaro flex rounded-2xl"></div>
              <div className="z-30 h-5/6 lg:h-full bg-white w-5/6 my-0 mx-auto rounded-2xl flex flex-col">
                <Carousel
                  slide={false}
                  leftControl={
                    <button className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 filter opacity-25">
                      <FaHandPointLeft className="h-4 w-4 lg:w-8 lg:h-8" />
                    </button>
                  }
                  rightControl={
                    <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 filter opacity-25">
                      <FaHandPointRight className="h-4 w- lg:w-8 lg:h-8" />
                    </button>
                  }
                >
                  <Descripcion titulo={"Nuestra historia"} contenido={'El recorrido inicial y original de la firma fue el tramo que une la ciudad de San Miguel de Tucumán con la localidad de Florida. Al recorrido inicial que era la línea San Miguel de Tucumán- Florida se fueron incorporando otros tramos'}/>
                  <Descripcion titulo={"Nuestra historia"} />
                  <Descripcion titulo={"Nuestra historia"} />
                </Carousel>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-azulclaro rounded-2xl"></div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 500,scale:0}}
            animate={inView ? { opacity: 1, x: 0,scale:1} : {}}
            transition={{ duration: 1, delay: .5 }}
            className="w-1/2 xl:w-7/12 rounded-2xl md:h-[500px] xl:h-[550px] carousel-imgs">
              {/* <img src="https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730436494/x78krvtel9ferbilid0z.jpg" alt="" className="h-5/6"/>
        <img src="" alt="" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};
