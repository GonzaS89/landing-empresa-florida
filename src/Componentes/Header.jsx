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
        <div className='h-24 my-0 mx-auto flex'>
          <div className='flex items-center justify-between w-full'>
          <div className='flex h-[70px]'>
            <img src={Logo} alt="" className='justify-stretch'/>
          </div>
          <div onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl icono-navbar'/> : <IoMenu className='text-4xl icono-navbar'/>}
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
