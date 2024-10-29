import React from 'react'
import { Consulta } from '../Minicomponentes/Consulta'

export const Consultas = () => {
  return (
    <div className='bg-[#F4F6FF] pt-12'>
        <div className='flex flex-col px-6 gap-12'>
            <h1 className='text-4xl uppercase text-center'>Nuevo sistema de consultas</h1>
            <div className='flex flex-col'>
                <Consulta titulo = {'Consulta de horarios'} clase = {'horarios-img'} refe = {'hora'}/>
                <Consulta titulo = {'Cotizador de abonos'} clase = {'abonos-img'} refe = {'abonos'}/>
            </div>
        </div>
    </div>
  )
}
