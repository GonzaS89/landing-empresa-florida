import React from 'react';
import { Infocontacto } from '../Minicomponentes/Infocontacto';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../assets/logo.png'

export const Contacto = () => {
  return (
    <div className="bg-slate-900 md:px-12 lg:px-4 pt-6 lg:pt-0">
      <div className="flex flex-col gap-8 sm:items-center lg:flex-row lg:items-end">
        <div className=" text-white flex flex-col justify-around items-center lg:flex-row gap-8 lg:gap-4 basis-2/3 px-4 py-4 lg:pt-2 lg:pb-0">
          <img src={Logo} alt="" className='h-32 w-44 md:h-52 md:w-72 lg:h-32 lg:w-48 xl:h-48 xl:w-56'/>
          <div className='flex flex-col items-center lg:items-start lg:flex-row justify-center lg:justify-start gap-12 md:py-8 lg:py-2'>
          <div className="grid grid-cols-2 lg:flex flex-col gap-4 lg:gap-2 xl:gap-4">
            <Infocontacto refe={'dirección'} titulo = {'encontrános en'} contenido={'Amadeo Jacques 1852 - S.M. de Tucumán'} />
            <Infocontacto refe={'horario'} titulo = {'horarios'} contenido={'Lunes-Viernes: 08:00 a 15:00 hrs'} />
            <Infocontacto refe={'teléfono'} titulo = {'contactanos al'} contenido={'(0381) - 4680416'} />
            <Infocontacto refe={'email'} titulo = {'envíanos un mail'} contenido={'empresaflorida@gmail.com'} />
            <div>
            </div>
          </div>
            <div className='flex flex-col gap-4 items-center lg:items-start'>
              <h2 className='md:text-xl lg:text-sm uppercase text-gray-400'>Seguinos en nuestras redes</h2>
              <div className='flex justify-center gap-4'>
                <a href="https://www.facebook.com/empresaflorida"><FaFacebookF className='text-5xl lg:text-3xl transition-all duration-200 hover:text-blue-600 cursor-pointer'/></a>
                <a href="https://www.instagram.com/empresa_florida/?hl=es-la"><FaInstagram className='text-5xl lg:text-3xl transition-all duration-200 hover:text-fuchsia-600 cursor-pointer'/></a>
              </div>
            </div>
          </div>
        </div>
        <span className='flex justify-center basis-1/2 relative'>
          <img src="https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730669971/zwjh8jnbgocojgdsbkf0.png" alt="" className='flex h-[450px] md:h-[500px] lg:h-[300px] xl:h-[400px] object-cover drop-shadow-custom'/>
        </span>
      </div>
    </div>
  )
}
