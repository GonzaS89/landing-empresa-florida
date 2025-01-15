import React from 'react';
import { Fotogaleria } from '../Minicomponentes/Fotogaleria';
import { Carousel } from 'flowbite-react';
import { Element } from 'react-scroll';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImgRec1 from '/img-consultas/recuerdos1.jpeg'
import ImgRec2 from '/img-consultas/recuerdos2.jpeg'
import ImgRec3 from '/img-consultas/recuerdos3.jpeg'
import ImgRec4 from '/img-consultas/recuerdos4.jpeg'
import ImgRec5 from '/img-consultas/recuerdos5.jpeg'
import ImgRec6 from '/img-consultas/recuerdos6.jpeg'
import ImgRec7 from '/img-consultas/recuerdos7.jpeg'
import ImgRec8 from '/img-consultas/recuerdos8.jpeg'
import ImgRec9 from '/img-consultas/recuerdos9.jpg'


export const Galeria = () => {

    const { ref, inView } = useInView({
        triggerOnce:true,
        threshold: 0.3, // Se activa cuando el 50% del elemento está en viewport
      });

    const arrayUrlsGalery = [
        {
            "url" : ImgRec1
        },
        {
            "url" : ImgRec2
        },
        {
            "url" : ImgRec3
        },
        {
            "url" : ImgRec4
        },
        {
            "url" : ImgRec5
        },
        {
            "url" : ImgRec6
        },
        {
            "url" : ImgRec7
        },
        {
            "url" : ImgRec8
        },
        {
            "url" : ImgRec9
        }

    ]

  return (

    <Element name="galeria">
              <div className='bg-rojofuerte py-12 px-8 sm:px-12'>
        <div className="max-w-6xl my-0 mx-auto flex flex-col gap-12 overflow-hidden" ref={ref}>
            <motion.h1 
                initial={{opacity:0 , y:-50}}
                animate={inView ? {opacity:1, y:0} : {}}
                transition={{duration: 1}}
            className='text-4xl xl:text-4xl uppercase font-bold text-white text-center'>Te invitamos a hacer un repaso por nuestra historia</motion.h1>
            <motion.div 
              initial={{opacity:0 , scale:0}}
              animate={inView ? {opacity:1, scale:1} : {}}
              transition={{duration: 1}}
            className='h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px]'>
                <Carousel>
                     {arrayUrlsGalery.map( (element,index) => (
                    <Fotogaleria key={index} url={element.url} index={index}/>
                ))}
                </Carousel>
               
            </motion.div>
        </div>
    </div>
    </Element>
  
  )
}
