import { useEffect, useState } from 'react';
export const useDescuentoAbonos = (tarifa, precio, origen) => {

    const [precioDescuento, setPrecioDescuento] = useState(0);

    const obtenerDescuento = () => {

        let descuento = 0;

        if (origen === 'los ralos' || origen === 'las cejas') {
            if (tarifa === 'social') {
            descuento = precio * 0.33996
            } else {
            descuento = precio * 0.43999
            }
        } 
        else if (origen === 'las cejas') {
            descuento = precio * 0.43003
        }
        else if(origen === 'finca mayo'){
            descuento = precio * 0.429847
        }    
        else if(origen !== 'los ralos' || origen !== 'las cejas' || origen !== 'finca mayo')
        {
            tarifa === 'social' ?
            descuento = precio * 0.3 : descuento = precio * 0.4
        }
        return descuento;
    }
    
    useEffect(() => {
        setPrecioDescuento(obtenerDescuento())
    },[tarifa,precio,origen])

    return{precioDescuento}
}
