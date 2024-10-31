import React from 'react';
import ConsultaImg from '../assets/consulta.jpg'
import { Consulta } from '../Minicomponentes/Consulta';

export const Infoconsultas = () => {
  return (
    <div className="consultas-bg py-12 md:px-12">
        <div className="max-w-7xl lg:my-0 lg:mx-auto flex flex-col gap-16">
            <h1 className='text-center font-bold md:text-4xl lg:text-6xl text-white md:px-12'>Actualizamos nuestra sección de consultas para tu comodidad</h1>
            <div className='flex md:grid md:grid-cols-2 lg:grid-cols-3'>
            <span className="h-[550px] bg-white">
                <img src={ConsultaImg} alt="" className='w-full h-full'/>
            </span>
            <Consulta  titulo={'Horarios'} boton={'Ir a horarios'}/>
            <Consulta  titulo={'Abonos'} boton={'Cotizá tu abono'}/>
            </div>
        
        </div>
    </div>
  )
}
