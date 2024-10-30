import React from 'react';
import ImagenNosotros from '../IMG/descarga.png';

export const Nosotros = () => {
  return (
    <div className='pt-8 bg-[#F4F6FF]'>
        <div className='max-w-7xl my-o mx-auto flex flex-col md:flex-row'>
            <div className='flex flex-col md:justify-center gap-16 basis-1/2 bg-white px-12'>
                <h1 className='text-4xl lg:text-5xl text-left uppercase text-rojofuerte font-bold'>Quienes somos</h1>
                <p className='md:text-sm xl:text-xl pr-16 leading-loose italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit, iure mollitia nemo similique amet incidunt unde laborum aspernatur dignissimos eveniet alias distinctio ex consectetur quia praesentium facilis ad accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio ea maiores adipisci officiis ut sit. Eius fuga distinctio temporibus cumque, dicta esse repudiandae itaque reiciendis. Repudiandae voluptatem quod illum.</p>
              <button className='bg-rojofuerte hover:bg-gray-800 transition duration-300 ease-in md:py-2 xl:py-4 w-1/2 text-white font-secundaria text-xl xl:text-2xl uppercase'>Ver más</button>
            </div>
            <span className='flex nosotros-img basis-1/2 bg-blue-500'>
              <img src={ImagenNosotros} alt="" className='object-cover'/>
            </span>
        </div>
    </div>
  )
}
