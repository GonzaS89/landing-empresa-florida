import React from 'react';
import Logo from '../assets/logo.png';
import { BiSolidRightArrow } from "react-icons/bi";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export const Footer = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Se anima una sola vez
    threshold: 0.7, // Se activa cuando el 50% del elemento está en viewport
  });

    const date = new Date();
    const año = date.getFullYear()

  return (
    <div className="bg-gray-100 py-8 lg:py-12 w-full flex flex-col gap-4 md:flex-row items-center justify-around text-slate-900 shadow-xl" ref={ref}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
      <img src={Logo} alt="" className='w-28 lg:w-36'/>
      <h1 className='text-lg lg:text-2xl uppercase font-bold'>Empresa Florida Srl - {año}</h1>
      </div>
      
        <span className='flex items-center gap-1 text-base text-center font-medium lg:text-2xl'>
          <h3 className='uppercase'>desarrollo web</h3>
          <BiSolidRightArrow className='text-2xl'/>
          <div className='overflow-hidden px-1'>
          <motion.h2 
          initial={{x:'-100%'}}
          animate={{x:inView ? 0 : '-100%', transition:{duration:1, easing: 'backOut'}}}

          className='italic underline text-blue-950 uppercase'>Sinhg Gonzalo</motion.h2>
          </div>
          
        </span>
    </div>
  )
}
