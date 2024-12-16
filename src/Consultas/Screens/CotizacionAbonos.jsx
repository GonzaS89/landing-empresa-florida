import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useGenerarCodigo } from "../HooksCons/useGenerarCodigo";


export const CotizacionAbonos = ({
  origen,
  destino,
  viajes,
  tarifa,
  via,
}) => {

 
  useEffect(() => {
    if (origen === null) {
        // Redirige a otra URL si miVariable es null
        window.location.href = '/';
    }
}, [origen]);

 const {codigo} = useGenerarCodigo(origen,destino,via)
  const [precioNormal, setPrecioNormal] = useState(0);
  const [precioDescuento, setPrecioDescuento] = useState(0);

  useEffect(() => {
    setPrecioNormal(viajes * codigo)
  },[codigo, viajes])

  useEffect(() => {
    if (origen === 'los ralos' || destino === 'los ralos') {
      if (tarifa === 'social') {
        setPrecioDescuento(precioNormal * 0.33996)
      } else {
        setPrecioDescuento(precioNormal * 0.43999)
      }
    } 
    else if (origen === 'las cejas' || destino === 'las cejas') {
        setPrecioDescuento(precioNormal * 0.43003)
    }
    else if(origen === 'finca mayo' || destino === 'finca mayo'){
      setPrecioDescuento(precioNormal * 0.429847)
    }    
    else if(origen !== 'los ralos' || origen !== 'las cejas' || destino !== 'los ralos' || destino !== 'las cejas'){
      tarifa === 'social' ?
        setPrecioDescuento(precioNormal * 0.3)
        : setPrecioDescuento(precioNormal * 0.4);
    }
  }, [tarifa, precioNormal, origen]);


  return (
    <div className="bg-slate-800 flex justify-center">
      <div className="bg-slate-800 flex flex-col justify-center h-screen gap-4">
      <div className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-4xl md:text-5xl text-white text-center font-jockey">Cotización</h1>
        <div className="bg-slate-950 bg-opacity-25 w-full h-64 relative text-white">
          <div className="flex flex-col justify-between h-full pt-4">
            <div className="flex justify-between items-center px-2">
              <p className="font-jockey md:text-xl basis-2/3 uppercase">
                {viajes} viajes desde <span>{origen} </span>hasta <span>{destino}</span> {via !== null ? `por ${via}` : ''} (tarifa normal)
              </p>

              <p className="font-jockey text-lg md:text-2xl">$ <CountUp start={0} end={precioNormal} duration={1}  separator="."/></p>

            </div>
            <div className="flex justify-between items-center px-2">
              <p className="font-jockey md:text-xl basis-2/3 uppercase">Descuento por tarifa {tarifa}</p>
              <p className="text-lg md:text-2xl font-jockey text-red-600">- $ <CountUp start={0} end={Math.round(precioDescuento)} duration={1} delay={1} separator="."/></p>
            </div>
            <div className="bg-red-700  w-full flex justify-between items-center text-white uppercase h-14 px-2">
            <p className="text-lg md:text-2xl font-jockey">Precio final</p>
            <p className="text-lg md:text-2xl font-jockey">$ <CountUp start={0} end={Math.round(precioNormal - precioDescuento)} duration={1} delay={2} separator="."/></p>
          </div>
          </div>
          
        </div>
      </div>
        <div className="container-info px-6  text-white flex flex-col gap-8">
          <p className="uppercase text-xl md:text-3xl text-center font-jockey">Requisitos para tener tu abono</p>
          <ul className="flex flex-col gap-4">
            <li className="text-left text-lg md:text-2xl font-jockey">TARIFA SOCIAL: numero del DNI</li>
            <li className="text-left text-lg md:text-2xl font-jockey">TARIFA ESTUDIANTIL: constancia de alumno regular y numero del DNI</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};
