import React from 'react'

export const Consulta = (props) => {

    const returnBg = val => {
        return val === 'Horarios' ? 
        'bg-white' : 'bg-rojofuerte'
    }

    const returnTextColor = val => {
        return val === 'Horarios' ? 
        '' : 'text-white'
    }

    const returnButtonStyle = val => {
        return val === 'Horarios' ?
        'bg-rojofuerte text-white' : 'bg-white text-rojofuerte'
    }

  return (
    <div className={`${returnBg(props.titulo)} md:h-[550px] lg:h-auto flex flex-col justify-center lg:justify-evenly items-start py-8 px-8 pr-16 gap-8  md:gap-10 lg:gap-4 xl:gap-2`}>
        <h2 className={`${returnTextColor(props.titulo)} text-3xl xl:text-4xl uppercase font-bold`}>{props.titulo}</h2>
        <p className={`${returnTextColor(props.titulo)} italic xl:text-xl`}>{props.contenido}</p>
        <button className={`${returnButtonStyle(props.titulo)} min-w-44 p-2 lg:p-4 xl:p-6 uppercase font-bold xl:text-2xl font-secundaria tracking-wider hover:bg-slate-800 hover:text-white transition-all duration-300`}>{props.boton}</button>
    </div>
  )
}
