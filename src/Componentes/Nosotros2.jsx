import React from 'react';
import { Caract } from '../Minicomponentes/Caract';


export const Nosotros2 = () => {

  return (
    <div className='flex px-6 py-12 nosotros-bg h-[800px]'>
      <div className='max-w-7xl my-0 mx-auto flex flex-col gap-24'> 
        <h1 className='lg:text-5xl uppercase'>Nuestra atención</h1>
        <div className='flex flex-col lg:h-[500px] md:grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
            <Caract titulo={'Vía telefónica'} refe={'atencion'}/>
            <Caract titulo={'Vía redes sociales'} refe={''}/>
            <Caract titulo={'Vía telefónica'} refe={'atencion'}/>
            <Caract titulo={'Vía redes sociales'} refe={''}/>
        </div>
        </div>
    </div>
  )
}
