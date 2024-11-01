import React from 'react';
import { Caract } from '../Minicomponentes/Caract';


export const Nosotros2 = () => {

  return (
    <div className='flex px-8 sm:px-12 xl:px-0 py-12 nosotros-bg'>
      <div className='max-w-7xl my-0 mx-auto flex flex-col gap-32 mt-36'> 
        <div className='flex flex-col sm:h-[500px] xl:h-[450px] md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Caract titulo={'Vía telefónica'} refe={'atencion'} index={0}/>
            <Caract titulo={'Vía redes sociales'} refe={''} index={1}/>
            <Caract titulo={'Vía telefónica'} refe={'atencion'} index={2}/>
            <Caract titulo={'Vía redes sociales'} refe={''} index={3}/>
        </div>
        </div>
    </div>
  )
}
