import React from 'react';
import { Consulta } from '../Minicomponentes/Consulta';

export const Infoconsultas = () => {
  return (
    <div className="consultas-bg px-8 sm:py-12 sm:px-12">
        <div className="max-w-7xl lg:my-0 lg:mx-auto flex flex-col gap-16">
            <h1 className='text-center font-bold text-4xl xl:text-5xl text-white md:px-12'>Actualizamos nuestra sección de consultas para tu comodidad</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Consulta  titulo={'Horarios'} contenido={'Renovamos nuestro sistema de consulta de horarios. Ahora tenés información completa de los recorridos. Asi también el precio del boleto del recorrido en cuestión.'} boton={'Ir a horarios'}/>
            <span className="max-h-[450px] bg-slate-800 sm:max-h-[450px] md:max-h-[650px]">
                <img src="https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730675880/xx4pirkw2wfqavwawvxn.jpg" alt="" className='w-full h-full'/>
            </span>
            <Consulta  titulo={'Abonos'} contenido={'Agregamos una nueva función a la sección de consultas. Ahora podés cotizar tu abono de manera online y saber con anticipación cuando vas a necesitar para adquirirlo.'} boton={'Cotizá tu abono'}/>
            </div>
        
        </div>
    </div>
  )
}
