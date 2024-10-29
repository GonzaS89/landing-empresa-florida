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
            {isOpen ? <IoCloseSharp className='text-4xl text-white'/> : <IoMenu className='text-4xl text-white'/>}
            </div>
        </div>
        <nav className={`bg-rojofuerte w-full flex flex-col justify-around text-white overflow-hidden	 ${menuOpen()}`}>
                <a href="" className='py-2'>Nosotros</a>
                <a href="" className='py-2'>Nosotros</a>
                <a href="" className='py-2'>Nosotros</a>
                <a href="" className='py-2'>Nosotros</a>
           
            </nav>
    </div>
  )
}
