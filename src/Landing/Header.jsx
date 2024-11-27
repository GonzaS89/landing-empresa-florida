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
      <div className={`${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} bg-[#EEEEEE] px-8 fixed top-0 left-0 right-0 z-20 w-full`}>
        <div className='h-24 xl:h-auto my-0 mx-auto flex'>
          <div className='flex items-center justify-around w-full h-full'>
            <Link to='/' smooth={true} duration={500} offset={-96}>
              <div className='flex h-[70px] lg:h-[80px] cursor-pointer' onClick={() => setIsOpen(false)}>
                <img src={Logo} alt="" />
              </div>
            </Link>
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoCloseSharp className='text-4xl icono-navbar' /> : <IoMenu className='text-4xl icono-navbar' />}
            </div>
            <nav className='h-24 hidden lg:flex'>
              {arraySection.map((section, index) => (
                <div className='relative flex w-32 justify-center items-center h-full group'>
                  <Link key={index} to={section.section} smooth={true} duration={500} offset={-96} className='z-40 lg:text-xl xl:text-2xl uppercase cursor-pointer group-hover:text-white transition-all duration-400 ease-in'>{section.name}</Link>
                  <span className='absolute flex bg-gray-800 w-full h-0 group-hover:h-full transition-all duration-350 ease-out'></span>
                  <span className=' absolute h-[1px] w-0 bg-gray-800'></span>
                </div>

              ))}
            </nav>
          </div>
        </div>
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 200 : 0 }}
          duration={500}
          className='bg-#EEEEEE w-full h-[200px] flex flex-col justify-around items-center overflow-hidden	'>
          {arraySection.map((section, index) => (
            <Link key={index} to={section.section} smooth={true} duration={500} offset={-96} onClick={() => setIsOpen(!isOpen)} className='text-xl uppercase cursor-pointer'>{section.name}</Link>
          ))}
        </motion.nav>
      </div>
    </Element>

  )
}
