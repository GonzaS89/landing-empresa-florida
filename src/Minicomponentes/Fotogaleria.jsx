import React from 'react';

export const Fotogaleria = ({url}) => {

  return (
    <div className="h-full cursor-pointer">
        <img src={url} alt="" className='w-full h-full'/>
    </div>
)
}
