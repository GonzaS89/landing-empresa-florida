import React from 'react'

export const Descripcion = (props) => {

  return (
    <div className='flex flex-col justify-start items-start gap-4 md:gap-8 lg:gap-8 xl:gap-10 basis-1/2 h-full bg-white px-6 sm:px-10 lg:px-12 py-6 sm:py-8 md:py-10'>
                <h1 className='text-2xl md:text-3xl uppercase text-rojofuerte font-bold'>{props.titulo}</h1>
                <p className='text-[13px] md:text-lg lg:text-base xl:text-base lg:leading-relaxed md:leading-loose italic'>{props.contenido}</p>
              {/* <button className='bg-rojofuerte hover:bg-gray-800 transition duration-300 ease-in py-2 sm:py-4 xl:py-4 w-1/2 text-white font-secundaria text-xl xl:text-2xl uppercase'>Ver más</button> */}
            </div>
  )
}
