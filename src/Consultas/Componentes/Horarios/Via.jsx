
import React , {useState, useEffect}from 'react'

export const Via = ({viaElegida , destino}) => {

   const mostrarValue = e => {
    viaElegida(e.target.value)
   }

   const [visible, setVisible] = useState(false)

   useEffect(() => {
    (destino === '' || destino === 'ald./alter') ? setVisible(true) : setVisible(false)
   },[destino])

    return (
        <div className={`${visible ? 'flex' : 'hidden'} justify-around`}>
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
