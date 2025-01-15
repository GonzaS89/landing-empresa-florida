import React from 'react'
import Portada1 from '/img-consultas/portada1.avif'
import Portada2 from '/img-consultas/portada2.avif'
import Portada3 from '/img-consultas/portada3.avif'

export const Portada = (props) => {

  const renderizarImg = () => {
    if(props.urlimg === 1) {
      return Portada1
    }else if(props.urlimg === 2) {return Portada2}
    else{return Portada3}
  }

  return (
    <div className="h-full relative flex items-center justify-center">
          <div className="max-w-7xl h-3/6 absolute text-white z-20 flex flex-col justify-end gap-10 px-12">
            <h1 className="text-4xl md:text-6xl lg:text-6xl] xl:text-[90px] uppercase filter opacity-0 animation-text1-portada leading-tight">{props.titulo}</h1>
          <p className="md:text-lg xl:text-2xl font-light filter opacity-0 animation-text3-portada">{props.contenido}</p>
          </div>
        <img src={renderizarImg()} alt="" className='h-full object-cover w-full filter brightness-[.25] absolute'/>
        </div>
  )
}
