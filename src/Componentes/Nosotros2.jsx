import React from 'react';
import { Caract } from '../Minicomponentes/Caract';


export const Nosotros2 = () => {

  return (
    <div className='flex px-6 py-12 nosotros-bg'>
      <div className='max-w-7xl my-0 mx-auto flex flex-col gap-32 mt-36 lg:px-6'> 
        <div className='flex flex-col xl:h-[500px] md:grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
            <Caract titulo={'Vía telefónica'} refe={'atencion'} index={0}/>
            <Caract titulo={'Vía redes sociales'} refe={''} index={1}/>
            <Caract titulo={'Vía telefónica'} refe={'atencion'} index={2}/>
            <Caract titulo={'Vía redes sociales'} refe={''} index={3}/>
        </div>
        </div>
    </div>
  )
}
