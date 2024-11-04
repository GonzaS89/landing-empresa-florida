import React from 'react';
import { Fotogaleria } from '../Minicomponentes/Fotogaleria';


export const Galeria = ({url}) => {

    const arrayUrlsGalery = [
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676509/bspoqmczpockqwmm8zte.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676508/vippj82nqkrd4fajpigk.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676507/bax1q7fysxflqfuhmpbd.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676506/zkub7pakp3hdeh2inksb.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676506/arhnwlwgvpknraojexk5.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676831/nkqifdmhqcajrhmr297n.jpg'
        },
        {
            "url" : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676825/nmfmi0pionvl68hckavr.jpg'
        },
        {
            "url" : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676826/agexsvv4ptqi5vmiphm5.jpg'
        }
    ]

  return (
    <div className='galeria-bg py-12 px-8 sm:px-12'>
        <div className="max-w-7xl my-0 mx-auto flex flex-col gap-12">
            <h1 className='text-4xl xl:text-5xl font-bold text-[#2f89fc] text-center'>Te invitamos a hacer un repaso por nuestra historia</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
                {arrayUrlsGalery.map( (element,index) => (
                    <Fotogaleria url={element.url} index={index} enviarUrl={url}/>
                ))}
            </div>
        </div>
    </div>
  )
}
