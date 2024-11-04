import React from 'react'

export const Fotogaleria = ({url , enviarUrl}) => {


  return (
    <div className="h-48 cursor-pointer" onClick={()=> enviarUrl(url)}>
        <img src={url} alt="" className='w-full h-full object-fill'/>
    </div>
)
}
