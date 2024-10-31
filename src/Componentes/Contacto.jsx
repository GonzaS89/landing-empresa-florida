import React from 'react';
import { Infocontacto } from '../Minicomponentes/Infocontacto';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterPick from '../assets/footer-pick.png'




export const Contacto = () => {
  return (
    <div className="bg-slate-900 md:px-12 pt-12">
      <div className="max-w-7xl my-0 mx-auto flex flex-col sm:items-center md:flex-row">
        <div className=" text-white flex flex-col gap-8 basis-1/2">
          <h1 className='text-center font-terciaria text-6xl'>LOGO</h1>
          <div className='flex flex-col items-center sm:flex-row justify-center gap-12 md:py-8'>
          <div className="flex flex-col gap-8">
            <Infocontacto refe={'dirección'} titulo = {'encontrános en'} contenido={'Amadeo Jacques 1852 - S.M. de Tucumán'} />
            <Infocontacto refe={'horario'} titulo = {'horarios'} contenido={'Lunes-Viernes: 08:00 a 15:00 hrs'} />
            <Infocontacto refe={'teléfono'} titulo = {'contactanos al'} contenido={'(0381) - 4680416'} />
            <Infocontacto refe={'email'} titulo = {'envíanos un mail'} contenido={'empresaflorida@gmail.com'} />
            <div>
            </div>
          </div>
            <div className='flex flex-col gap-8'>
              <h2 className='md:text-lg xl:text-2xl uppercase text-gray-400'>Seguinos en nuestras redes</h2>
              <div className='flex gap-8'>
                <a href="https://www.facebook.com/empresaflorida"><FaFacebookF className='text-5xl transition-all duration-200 hover:text-blue-600 cursor-pointer'/></a>
                <a href="https://www.instagram.com/empresa_florida/?hl=es-la"><FaInstagram className='text-5xl transition-all duration-200 hover:text-fuchsia-600 cursor-pointer'/></a>
              </div>
            </div>
          </div>
        </div>
        <span className='flex justify-centerbasis-1/2 relative'>
          <img src={FooterPick} alt="" className='flex sm:h-[500px] md:h-5/6 object-cover object-left-center drop-shadow-custom md:absolute bottom-0'/>
        </span>
      </div>
    </div>
  )
}
