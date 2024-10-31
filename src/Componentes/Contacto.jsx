import React from 'react';
import { Infocontacto } from '../Minicomponentes/Infocontacto';


export const Contacto = () => {
  return (
    <div className="bg-slate-900">
        <div className="flex p-12">
            <div className=" text-white flex flex-col py-12 items-center gap-8">
                
                <h1 className='font-terciaria text-5xl'>Contactáte con nosotros</h1>
                
                <div className="grid grid-cols-2">
                    <Infocontacto titulo={'teléfono'} contenido={'(0381) - 4680416'}/>
                    <Infocontacto titulo={'dirección'} contenido={'Amadeo Jacques 1852'}/>
                    <Infocontacto titulo={'email'} contenido={'empresaflorida@gmail.com'}/>
                    <div>
    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
