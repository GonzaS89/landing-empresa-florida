import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        return isOpen ? 'menuOpen' : 'menuClosed'
    }

  return (
    <div className='bg-[#EEEEEE] px-8'>
        <div className='h-24 my-0 mx-auto flex'>
          <div className='flex items-center justify-between w-full'>
          <div className='flex h-[70px] lg:h-[90px]'>
            <img src={Logo} alt="" className='justify-stretch'/>
          </div>
          <div onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl icono-navbar'/> : <IoMenu className='text-4xl icono-navbar'/>}
            </div>
            <nav className='navbar-large flex justify-end gap-6 basis-1/2'>
              <Link to='institucion' smooth={true} duration={500} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>Institucion</Link>
              <Link to='servicios' smooth={true} duration={500} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>Servicios</Link>
              <Link to='consultas' smooth={true} duration={500} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>Consultas</Link>
              <Link to='galeria' smooth={true} duration={500} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>Galeria</Link>
              <Link to='contacto' smooth={true} duration={500} className='lg:text-xl xl:text-2xl uppercase cursor-pointer'>Contacto</Link>
            </nav>
          </div>
        </div>
        <nav className={`navbar-small bg-#EEEEEE w-full flex flex-col justify-around items-center overflow-hidden	 ${menuOpen()}`}>
        <Link to='institucion' smooth={true} duration={500} className='text-2xl uppercase cursor-pointer'>Institucion</Link>
              <Link to='servicios' smooth={true} duration={500} className='text-2xl uppercase cursor-pointer'>Servicios</Link>
              <Link to='consultas' smooth={true} duration={500} className='text-2xl uppercase cursor-pointer'>Consultas</Link>
              <Link to='galeria' smooth={true} duration={500} className='text-2xl uppercase cursor-pointer'>Galeria</Link>
              <Link to='contacto' smooth={true} duration={500} className='text-2xl uppercase cursor-pointer'>Contacto</Link>
            </nav>
    </div>
  )
}
