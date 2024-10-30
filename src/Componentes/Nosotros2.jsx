import React from 'react';
import { Caract } from '../Minicomponentes/Caract';
import { CaractImg } from '../Minicomponentes/CaractImg';

export const Nosotros2 = () => {

  return (
    <div className='px-6 py-12 bg-[#F4F6FF]'>
      <div className='max-w-7xl my-0 mx-auto flex flex-col gap-12'> 
        <h1 className='lg:text-5xl uppercase'>Nuestra atención</h1>
      
        <div className='flex flex-col lg:h-[500px] lg:grid grid-cols-4'>
            <CaractImg clase={'nosotros2-img'}/>
            <Caract titulo={'Vía telefónica'} refe={'atencion'}/>
            <CaractImg clase={'nosotros2-img2'}/>
            <Caract titulo={'Vía redes sociales'} refe={''}/>
        </div>
        </div>
    </div>
  )
}
