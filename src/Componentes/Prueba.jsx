import React from 'react';
import { Carousel } from "flowbite-react";
import Imagen from '../assets/app.png';

export const Prueba = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={Imagen}alt="..." />
        <img src={Imagen}alt="..." />
      </Carousel>
    </div>
  )
}
