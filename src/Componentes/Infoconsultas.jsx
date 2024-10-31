import React from 'react';
import ConsultaImg from '../assets/consulta.jpg'
import { Consulta } from '../Minicomponentes/Consulta';

export const Infoconsultas = () => {
  return (
    <div className="consultas-bg py-12">
        <div className="max-w-7xl my-0 mx-auto flex flex-col gap-16">
            <h1 className='text-center font-terciaria font-bold text-5xl text-white px-12'>Actualizamos nuestra sección de consultas para tu comodidad</h1>
            <div className='flex lg:flex-row flex-wrap justify-center'>
            <span className="w-[400px] h-[550px] bg-white">
                <img src={ConsultaImg} alt="" className='w-full h-full'/>
            </span>
            <Consulta  titulo={'Horarios'} boton={'Ir a horarios'}/>
            <Consulta  titulo={'Abonos'} boton={'Cotizá tu abono'}/>
            </div>
        
        </div>
    </div>
  )
}
