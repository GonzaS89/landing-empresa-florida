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
    <div className={`${returnBg(props.titulo)} h-[550px] w-[400px] flex flex-col justify-center items-start px-12 gap-8`}>
        <h2 className={`${returnTextColor(props.titulo)} text-4xl uppercase font-bold`}>{props.titulo}</h2>
        <p className={`${returnTextColor(props.titulo)} italic`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni, nisi voluptates adipisci possimus accusantium et dolores</p>
        <button className={`${returnButtonStyle(props.titulo)} min-w-44 p-4 uppercase font-bold text-lg font-secundaria tracking-wider`}>{props.boton}</button>
    </div>
  )
}
