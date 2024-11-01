import React from 'react';
import ConsultaImg from '../assets/consulta.jpg'
import { Consulta } from '../Minicomponentes/Consulta';

export const Infoconsultas = () => {
  return (
    <div className="consultas-bg px-8 sm:py-12 sm:px-12">
        <div className="max-w-7xl lg:my-0 lg:mx-auto flex flex-col gap-16">
            <h1 className='text-center font-bold text-4xl md:text-5xl lg:text-6xl text-white md:px-12'>Actualizamos nuestra sección de consultas para tu comodidad</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Consulta  titulo={'Horarios'} boton={'Ir a horarios'}/>
            <span className="max-h-[450px] lg:h-[550px] bg-white sm:max-h-[450px] md:max-h-none">
                <img src={ConsultaImg} alt="" className='w-full h-full'/>
            </span>
            <Consulta  titulo={'Abonos'} boton={'Cotizá tu abono'}/>
            </div>
        
        </div>
    </div>
  )
}
