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
    <div className={`${returnBg(props.titulo)} h-[550px] flex flex-col justify-center items-start px-12 gap-8 sm:gap-10`}>
        <h2 className={`${returnTextColor(props.titulo)} text-3xl sm:text-4xl uppercase font-bold`}>{props.titulo}</h2>
        <p className={`${returnTextColor(props.titulo)} italic`}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <button className={`${returnButtonStyle(props.titulo)} min-w-44 p-4 uppercase font-bold text-xl font-secundaria tracking-wider`}>{props.boton}</button>
    </div>
  )
}
