import React from 'react';
import { Caract } from '../Minicomponentes/Caract';


export const Nosotros2 = () => {

  return (
    <div className='flex px-8 sm:px-12 xl:px-0 py-12 nosotros-bg'>
      <div className='max-w-7xl my-0 mx-auto flex flex-col gap-12 lg:gap-32'> 
        <h1 className='text-center font-bold text-4xl md:text-5xl text-white md:px-12'>Estos servicios te ofrecemos como empresa</h1>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Caract titulo={'cobertura'} index={0} contenido={'Te contamos que nuestros servicios tienen gran cobertura en localidades del este tucumano. Incluso llegando a 7 de abril (Santiago del Estero)'}/>
            <Caract titulo={'escolares'} index={1} contenido={'Al margen de nuestro amplio listado de servicios diarios, contamos con algunos servicios en establecimientos escolares'}/>
            <Caract titulo={'excursiones'} index={2} contenido={'Mediante un acuerdo que hicimos con la fundacion Miguel Lillo, llevaremos a distintas delegaciones escolares a conocer la cultura de nuestra provincia'}/>
            <Caract titulo={'redes sociales'} refe={''} index={3} contenido={'Tenemos presencia constante en las redes. Allí podés hacernos las consultas o las denuncias que que necesites o creas conveniente'}/>
        </div>
        </div>
    </div>
  )
}
