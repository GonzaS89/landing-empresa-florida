import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        return isOpen ? 'menuOpen' : 'menuClosed'
    }

  return (
    <div className='flex flex-col'>
        <div className='w-full h-28 flex items-center justify-between text px-8 z-50 bg-rojofuerte'>
            <h1 className='text-white text-3xl'>LOGO</h1>
            <div onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseSharp className='text-4xl text-white icono-navbar'/> : <IoMenu className='text-4xl text-white icono-navbar'/>}
            </div>
            <nav className='navbar-large'>
              <a href="">Sistema de consultas</a>
              <a href="">Institución</a>
              <a href="">Contacto</a>
            </nav>
        </div>
        <nav className={`navbar-small bg-rojofuerte w-full flex flex-col justify-around items-center text-white overflow-hidden	 ${menuOpen()}`}>
                <a href="" className='py-2 uppercase font-bold'>Sistema de consultas</a>
                <a href="" className='py-2 uppercase font-bold'>Institucion</a>
                <a href="" className='py-2 uppercase font-bold'>Contacto</a>
            </nav>
    </div>
  )
}
