import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Logo from '../assets/logo.png'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        return isOpen ? 'menuOpen' : 'menuClosed'
    }

  return (
    <div className='bg-[#EEEEEE] px-8'>
        <div className='px-12 md:h-24 md:h-36 my-0 mx-auto'>
          <div className='flex items-center h-full justify-between'>
          <div className='flex h-4/5'>
            <img src={Logo} alt=""/>
          </div>
          <div onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl text-white icono-navbar'/> : <IoMenu className='text-4xl text-white icono-navbar'/>}
            </div>
            <nav className='navbar-large flex justify-center gap-6 basis-1/2'>
              <a href="" className='text-2xl uppercase'>Institucion</a>
              <a href="" className='text-2xl uppercase'>Novedades</a>
            </nav>
          </div>
        </div>
        <nav className={`navbar-small bg-#EEEEEE w-full flex flex-col justify-around items-center overflow-hidden	 ${menuOpen()}`}>
                <a href="" className='py-2 uppercase font-bold'>Sistema de consultas</a>
                <a href="" className='py-2 uppercase font-bold'>Institucion</a>
                <a href="" className='py-2 uppercase font-bold'>Contacto</a>
            </nav>
    </div>
  )
}
