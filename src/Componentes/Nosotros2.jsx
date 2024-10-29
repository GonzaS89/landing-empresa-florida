import React from 'react';
import { Caract } from '../Minicomponentes/Caract';
import { CaractImg } from '../Minicomponentes/CaractImg';

export const Nosotros2 = () => {

  return (
    <div className='px-6'>
        <div className='flex flex-col gap-8'>
            <CaractImg clase={'nosotros2-img'}/>
            <Caract titulo={'Nuestra atención'} refe={'atencion'}/>
            <CaractImg clase={'nosotros2-img2'}/>
            <Caract titulo={'Emergencias'} refe={''}/>
        </div>
    </div>
  )
}
