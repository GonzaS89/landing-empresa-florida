
import React, { useState, useEffect } from 'react'

export const Via = ({ viaElegida, origen ,destino }) => {

    const mostrarValue = e => { viaElegida(e.target.value) }

    const [visible, setVisible] = useState(false);

    const localidades = ['la florida','fortín','colonia 4 (luisiana)']
    const localidades2 = ['banda del río salí','s. m. de tucumán']

    
    useEffect(() => {
        const origenDestinoValido = 
            (localidades.includes(origen) && localidades2.includes(destino)) ||
            (localidades2.includes(origen) && localidades.includes(destino));
    
        setVisible(origenDestinoValido);
    }, [destino, origen, localidades, localidades2]);

    return (
        <div className={`${visible ? 'flex' : 'hidden'} justify-around w-full`}>
            <div className='flex items-center gap-4'>
                <input type="radio" name="vias" id="" value="w. posse" className='scale-150' onChange={mostrarValue} color='red' />
                <label className='uppercase font-jockey'>w. posse</label>
            </div>
            <div className='flex items-center gap-4'>
                <input type="radio" name="vias" id="" value="ald./alter" className='scale-150' onChange={mostrarValue} />
                <label className='uppercase font-jockey'>ald./alter</label>
            </div>
        </div>
    )
}
