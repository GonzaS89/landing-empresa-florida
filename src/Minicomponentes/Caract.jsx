import React from 'react';import { FcBusinesswoman } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";

export const Caract = (props) => {

    const returnIcon = val => {
        return val === 'atencion' ? 
        <FcBusinesswoman className='text-7xl'/> : 
        <FcShipped className='text-7xl'/>
    }
  return (
    <div className='flex flex-col items-center px-6 py-6 gap-8 bg-[#10375C] text-white'>
            <span>{returnIcon(props.refe)}</span>
            <h2 className='uppercase text-2xl font-bold'>{props.titulo}</h2>
            <p className='text-lg font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum corrupti placeat, cumque deserunt quam iste eius aut quos maxime. Asperiores veniam voluptate mollitia, officiis nostrum consequatur voluptas neque molestias.</p>
        </div>
  )
}
