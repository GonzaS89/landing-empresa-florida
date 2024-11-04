import React from 'react'

export const Portada = (props) => {
  return (
    <div className="h-full relative flex items-center justify-center">
          <div className="max-w-7xl absolute text-white z-20 flex flex-col gap-10 px-12">
            <h1 className="text-4xl md:text-5xl lg:text-[85px] uppercase filter opacity-0 animation-text1-portada leading-tight">{props.titulo}</h1>
          <p className="md:text-lg lg:text-2xl font-light filter opacity-0 animation-text3-portada">{props.contenido}</p>
          </div>
        <img src={props.urlimg} alt="" className='h-full object-cover w-full filter brightness-[.25] absolute'/>
        </div>
  )
}