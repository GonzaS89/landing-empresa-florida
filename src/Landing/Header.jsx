import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { Element } from "react-scroll";
import { motion } from 'framer-motion';


export const Header = () => {

  const arraySection = [
    {
      "name": "Institución",
      "section": "institucion"
    },
    {
      "name": "Servicios",
      "section": "servicios"
    },
    {
      "name": "Consultas",
      "section": "consultas"
    },
    {
      "name": "Galería",
      "section": "galeria"
    },
    {
      "name": "Contacto",
      "section": "contacto"
    },

  ]

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Añadir el event listener para el scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <Element name='header'>
       <div className={`${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} bg-[#EEEEEE] px-8 fixed z-20 w-full`}>
      <div className='h-24 xl:h-auto xl:py-2 my-0 mx-auto flex'>
        <div className='flex items-center justify-around w-full'>
          <Link to='header' smooth={true} duration={500}>
          <div className='flex h-[70px] lg:h-[80px] cursor-pointer' onClick={()=> setIsOpen(false)}>
            <img src={Logo} alt=""/>
          </div>
          </Link>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl icono-navbar' /> : <IoMenu className='text-4xl icono-navbar' />}
          </div>
          <nav className='navbar-large flex justify-end gap-6 basis-1/2'>
            {arraySection.map( (section,index) => (
              <Link key={index} to={section.section} smooth={true} duration={500} offset={-96} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>{section.name}</Link>
            ))}
          </nav>
        </div>
      </div>
      <motion.nav 
      initial={{height: 0}}
      animate={{height: isOpen ? 200 : 0}}
      duration={500}
      className='bg-#EEEEEE w-full h-[200px] flex flex-col justify-around items-center overflow-hidden	'>
      {arraySection.map( (section,index) => (
              <Link key={index} to={section.section} smooth={true} duration={500} offset={-96} onClick = {()=> setIsOpen(!isOpen)}className='text-xl uppercase cursor-pointer'>{section.name}</Link>
            ))}
      </motion.nav>
    </div>
    </Element>
   
  )
}
