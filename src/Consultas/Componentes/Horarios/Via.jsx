import React from 'react'

export const Via = ({viaElegida}) => {

   const mostrarValue = e => {
    viaElegida(e.target.value)
   }

    return (
        <div className='flex justify-around'>
            <div className='flex items-center gap-4'>
              <input type="radio" name="vias" id="" value="w. posse" className='scale-150' onChange={mostrarValue} color='red'/>
                <label className='uppercase font-jockey'>w. posse</label>
            </div>
            <div className='flex items-center gap-4'>
            <input type="radio" name="vias" id="" value="ald./alter" className='scale-150' onChange={mostrarValue}/>
                <label className='uppercase font-jockey'>ald.alter</label>
            </div>
        </div>
    )
}
