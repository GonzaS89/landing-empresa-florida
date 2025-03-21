import { useEffect, useState } from 'react';
export const useDescuentoAbonos = (tarifa, precio, origen) => {

    const [precioDescuento, setPrecioDescuento] = useState(0);

    const obtenerDescuento = () => {

        let descuento = 0;

        if (origen === 'los ralos' || origen === 'las cejas') {
            if (tarifa === 'social') {
            descuento = precio * 0.66004
            } else {
            descuento = precio * 0.56001
            }
        } 
        else if (origen === 'las cejas') {
            descuento = precio * 0.56997
        }
        else if(origen === 'finca mayo'){
            descuento = precio * 0.570153
        }    
        else if(origen !== 'los ralos' || origen !== 'las cejas' || origen !== 'finca mayo')
        {
            tarifa === 'social' ?
            descuento = precio * 0.7 : descuento = precio * 0.6
        }
        
        return descuento;
    }
    
    useEffect(() => {
        setPrecioDescuento(obtenerDescuento())
    },[precio])

    

    return{precioDescuento}
}
