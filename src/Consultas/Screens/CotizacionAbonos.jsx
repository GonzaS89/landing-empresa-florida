import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useGenerarCodigo } from "../HooksCons/useGenerarCodigo";
import { useDescuentoAbonos } from "../HooksCons/useDescuentoAbonos";
import { IoCashSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";

export const CotizacionAbonos = ({ origen, destino, viajes, tarifa, via }) => {
  useEffect(() => {
    if (origen === null) {
      // Redirige a otra URL si la variable es null
      window.location.href = "/";
    }
  }, [origen]);

  const [precioNormal, setPrecioNormal] = useState(0);
  const { codigo } = useGenerarCodigo(origen, destino, via);
  const { precioDescuento } = useDescuentoAbonos(tarifa, precioNormal, origen);

  useEffect(() => {
    setPrecioNormal(viajes * codigo);
  }, [codigo, viajes]);

  return (
    <div className="bg-slate-800 flex justify-center relative text-white text-center">
      <img
        src={`/img-consultas/fondoabonos.webp`}
        alt=""
        className="z-10 flex absolute h-full object-center blur-sm"
      />
      <div className="bg-[#0F082C] flex flex-col justify-between h-screen gap-4 z-30 opacity-85 w-full">
        <div className="flex flex-col justify-between md:gap-8 items-center h-full py-8">
          <img src={`/img-consultas/logo.webp`} alt="" className="z-50 w-36" />
          <h1 className="text-3xl md:text-5xl text-white text-center font-londrina px-4 uppercase">
            El precio de tu abono es:
          </h1>
          <div className="text-white text-center flex flex-col gap-4">
            <CountUp
              start={0}
              end={precioDescuento}
              duration={1}
              separator="."
              decimals={2}
              decimal=","
              prefix="$"
            >
              {({ countUpRef }) => (
                <h2
                  className="text-6xl md:text-7xl text-center font-londrina"
                  ref={countUpRef}
                />
              )}
            </CountUp>
            <p className="font-londrina uppercase px-4">
              {viajes} viajes desde {origen} hasta {destino} <br /> {via ? `por ${via} con tarifa ${tarifa} ` : `con tarifa ${tarifa}`} 
                 
            </p>
          </div>
          <p className="uppercase font-londrina text-xl">
            Vigencia de compra: 02/03 al 14/03
          </p>
          <div className="flex w-full text-left gap-4 px-4">
            <div className="basis-1/2">
              <h3 className="uppercase font-londrina text-xl">
                Formas de pago
              </h3>
              <ul className="list-disc list-inside flex flex-col">
                <li className="font-londrina flex items-center gap-2">
                  Tarjetas de débito
                  <FaCreditCard className="text-xl" />
                </li>
                <li className="font-londrina flex items-center gap-2">
                  Efectivo <IoCashSharp className="text-xl" />
                </li>
              </ul>
            </div>
            <div className="basis-1/2">
              <h3 className="uppercase font-londrina text-xl">Requisítos</h3>
              <ul className="flex flex-col list-none">
                <li className="font-londrina list-none">
                  <span className="uppercase">Estudiantíl: </span>Constancia de
                  inscripción y copia del DNI
                </li>
                <li className="font-londrina list-none">
                  <span className="uppercase">Social: </span>Copia del DNI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
