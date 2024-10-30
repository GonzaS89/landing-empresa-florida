import React from 'react'
import { Consulta } from '../Minicomponentes/Consulta'

export const Consultas = () => {
  return (
    <div className="bg-[#F4F6FF] py-12">
        <div className="max-w-7xl my-0 mx-auto">
            <h1 className='text-5xl uppercase'>Nuevo sistema de consultas</h1>
            <div className="flex lg:flex-row items-center">
            <span className="flex consulta-img basis-1/2"></span>
            <div className="flex lg:flex-row gap-8 basis-1/2">
                <Consulta titulo={'Horarios'} refe={'hora'}/>
                <Consulta titulo={'Abonos'} refe={'abonos'}/>
            </div>
            </div>
        </div>
    </div>
  )
}
