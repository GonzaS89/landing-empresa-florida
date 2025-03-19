export const useDescuentoAbonos = (tarifa, precio, origen) => {
    let precioDescuento = 0;
    if (origen === 'los ralos' || origen === 'las cejas') {
        if (tarifa === 'social') {
        precioDescuento = precio * 0.33996;
        } else {
        precioDescuento = precio * 0.43999;
        }
    } 
    else if (origen === 'las cejas') {
        precioDescuento = precio * 0.43003;
    }
    else if(origen === 'finca mayo'){
        precioDescuento = precio * 0.429847;
    }    
    else {
        tarifa === 'social' ?
        precioDescuento = precio * 0.3
        : precioDescuento = precio * 0.4;
    }
    return {precioDescuento};
}
