import React from 'react';
import Historia from '../assets/historia.jpg';
import Somos from '../assets/somos.jpg';
import Mision from '../assets/mision.jpg';

export const DescripcionImg = (props) => {

    const returnImg = val => {
        if(val === 'historia'){return Historia}
        else if (val === 'somos') {return Somos}
        else {return Mision}

    }

  return (
    <div className="flex basis-1/2 bg-blue-500 h-[500px]">
    <img src={returnImg(props.refe)} alt="" className="object-cover h-full w-full" />
  </div>
  )
}
