import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BotonHorarios } from '../Minicomponentes/BotonHorarios';

export const Portada = () => {
  return (
    <div className='bg-[#F4F6FF] py-12'>
        <div className='max-w-7xl my-0 mx-auto flex flex-col lg:flex-row'>
          <div className=' text-left flex flex-col justify-center py-12 gap-12 w-1/2'>
              <h3 className='uppercase tracking-wide font-semibold'>Lorem ipsum dolor sit amet</h3>
              <h1 className='uppercase text-5xl font-bold'>Lorem, ipsum dolor sit amet consectetur</h1>
              <p className='font-light leading-loose pr-36'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta odio minus, ipsum et dolorum iure dolorem voluptates asperiores quisquam ex expedita facere unde itaque voluptatibus vitae cum? Ut, deleniti.</p>
              <a href="">
              <BotonHorarios />
              </a>
          </div>
          <span className='flex portada-img'></span>
        </div>
    </div>
  )
}
