import React from 'react';
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export const Consulta = (props) => {

    const returnIcon = val => {
        return val === 'hora' ? 
        <AiOutlineFieldTime className='text-white text-[100px]'/> : 
        <FaMoneyCheckDollar className='text-white text-[100px]' />
    }

    const returnImg = val => {
        return val === 'hora' ? 
        'horarios-img' : 'abonos-img'
        
    }

  return (
    <div className='flex flex-col justify-evenly items-center w-[320px] bg-white relative py-4 px-4 rounded-b-3xl shadow-slate-700 shadow-2xl gap-4'>
        <span className={`rounded-full flex ${returnImg(props.refe)} border-rojofuerte border-8`}></span>
        <h2 className='text-2xl font-bold'>{props.titulo}</h2>
        <ul>
            <li className='tracking-widest py-2 pl-2'>Fiabilidad</li>
            <li className='tracking-widest py-2 pl-2'>Precio del boleto incluido</li>
            <li className='tracking-widest py-2 pl-2'>Más puntos de parada</li>
            <li className='tracking-widest py-2 pl-2'>Recorridos completos</li>
        </ul>
    </div>
  )
}
