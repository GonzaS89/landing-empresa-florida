import React from 'react';
import { Fotogaleria } from '../Minicomponentes/Fotogaleria';
import { Carousel } from 'flowbite-react';
import { Element } from 'react-scroll';


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
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676825/nmfmi0pionvl68hckavr.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730676826/agexsvv4ptqi5vmiphm5.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730778503/qy9evwxxaruba8yploa6.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730778500/dsuznagy42tpjgg8sfrv.jpg'
        },
        {
            url : 'https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730778501/ihykthbsvsod66c3cqlw.jpg'
        }
    ]

  return (

    <Element name="galeria">
              <div className='galeria-bg py-12 px-8 sm:px-12'>
        <div className="max-w-4xl my-0 mx-auto flex flex-col gap-12">
            <h1 className='text-4xl xl:text-4xl uppercase font-bold text-[#2f89fc] text-center'>Te invitamos a hacer un repaso por nuestra historia</h1>
            <div className='h-[300px] md:h-[400px] lg:h-[450px] xl:h-[450px]'>
                <Carousel>
                     {arrayUrlsGalery.map( (element,index) => (
                    <Fotogaleria url={element.url} index={index} enviarUrl={url}/>
                ))}
                </Carousel>
               
            </div>
        </div>
    </div>
    </Element>
  
  )
}
