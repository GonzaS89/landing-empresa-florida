import React from 'react'

export const Descripcion = (props) => {

  return (
    <div className='flex flex-col md:justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-16 basis-1/2 h-auto bg-white px-6 sm:px-10 py-6 sm:py-8 md:py-10'>
                <h1 className='text-3xl sm:text-4xl xl:text-5xl text-left uppercase text-rojofuerte font-bold'>{props.titulo}</h1>
                <p className='text-sm md:text-base xl:text-xl lg:pr-16 leading-relaxed sm:leading-loose italic text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit, iure mollitia nemo similique amet incidunt unde laborum aspernatur dignissimos eveniet alias distinctio ex consectetur quia praesentium facilis ad accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio ea maiores adipisci officiis ut sit. Eius fuga distinctio temporibus cumque, dicta esse repudiandae itaque reiciendis. Repudiandae voluptatem quod illum.</p>
              {/* <button className='bg-rojofuerte hover:bg-gray-800 transition duration-300 ease-in py-2 sm:py-4 xl:py-4 w-1/2 text-white font-secundaria text-xl xl:text-2xl uppercase'>Ver más</button> */}
            </div>
  )
}
