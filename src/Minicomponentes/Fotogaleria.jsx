import React from 'react'

export const Fotogaleria = (props) => {

    // const returnGridColumn = i => {
    //     return i === 0  || i === 5 ? 
    //     'col-span-2 object-top' : ''
    // }

  return (<img src={props.url} alt="" className='w-full h-48 object-cover'/>)
}
