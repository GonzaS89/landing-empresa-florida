import React from 'react'

export const Fotogaleria = ({url , enviarUrl}) => {


  return (
    <div className="h-full cursor-pointer" onClick={()=> enviarUrl(url)}>
        <img src={url} alt="" className='w-full h-full'/>
    </div>
)
}
