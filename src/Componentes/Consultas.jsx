import React from 'react'
import { Consulta } from '../Minicomponentes/Consulta'

export const Consultas = () => {
  return (
    <div className='px-6 py-12'>
        <div className='flex flex-col gap-12'>
            <h1 className='uppercase text-3xl font-bold text-center'>Nuevo sistema de Consultas</h1>
            <div>   
                <Consulta titulo={'Consulta de horarios'} img={'horarios-img'} boton={'Consultar horarios'}/>
                <Consulta titulo={'Cotizador de abonos'} img={'abonos-img'} boton={'Cotizar mi abono'}/>
            </div>
        </div>
    </div>
  )
}
