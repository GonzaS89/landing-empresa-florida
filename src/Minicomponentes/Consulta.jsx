import React from 'react';
import { BotonHorarios } from './BotonHorarios';
import { BotonAbonos } from './BotonAbonos';


export const Consulta = (props) => {

    const retonarBoton = val => {
        return val === 'hora' ? <BotonHorarios /> : <BotonAbonos />
    }

  return (
    <div className='flex flex-col gap-2 overflow-hidden bg-[#211951] text-white'>
        <div className='flex flex-col gap-4 px-6 py-12'>
            <h2 className='text-2xl uppercase font-bold'>{props.titulo}</h2>
            <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem officiis perspiciatis porro amet maxime cum sunt ab, quas commodi dolor tempora corporis, quia aut distinctio labore minima ducimus. Nostrum.</p>
            {retonarBoton(props.refe)}
        </div>
        <span className={`flex ${props.clase}`}></span>
    </div>
  )
}
