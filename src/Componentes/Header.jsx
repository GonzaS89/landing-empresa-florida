import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        return isOpen ? 'menuOpen' : 'menuClosed'
    }

  return (
    <div className='bg-rojofuerte px-8'>
        <div className='max-w-7xl h-20 md:h-28 my-0 mx-auto'>
          <div className='flex items-center h-full justify-between'>
          <h1 className='text-white text-2xl xl:text-7xl basis-2/3 font-terciaria'>LOGO</h1>
          <div onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl text-white icono-navbar'/> : <IoMenu className='text-4xl text-white icono-navbar'/>}
            </div>
            <nav className='navbar-large flex justify-between gap-4 basis-1/2'>
              <a href="" className='text-white text-2xl tracking-wider'>Sistema de consultas</a>
              <a href="" className='text-white text-2xl tracking-wider'>Institución</a>
              <a href="" className='text-white text-2xl tracking-wider'>Contacto</a>
            </nav>
          </div>
        </div>
        <nav className={`navbar-small bg-rojofuerte w-full flex flex-col justify-around items-center text-white overflow-hidden	 ${menuOpen()}`}>
                <a href="" className='py-2 uppercase font-bold'>Sistema de consultas</a>
                <a href="" className='py-2 uppercase font-bold'>Institucion</a>
                <a href="" className='py-2 uppercase font-bold'>Contacto</a>
            </nav>
    </div>
  )
}
