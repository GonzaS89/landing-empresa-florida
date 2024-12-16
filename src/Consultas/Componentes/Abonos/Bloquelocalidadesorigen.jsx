import React from "react";
import { OpcionLocalidad } from "./OpcionLocalidad";
import { useHeight } from "../../HooksCons/useHeight";
import localidades from "../../Data/localidades.json";
import { PiHandPointingDuotone } from "react-icons/pi";

export const Bloquelocalidadesorigen = ({ origen, recibirLocalidad }) => {
  const { hLg } = useHeight();

  return (
    <div className={`flex flex-col px-1  ${hLg ? "gap-2" : "gap-1"} w-full`}>
      <h1 className='text-white text-2xl xl:text-4xl font-jockey'>
        Origen
      </h1>
      <div className="flex gap-2 overflow-x-scroll container-paradas relative">
        <div className="w-full flex items-center justify-center">
        <PiHandPointingDuotone  className="absolute text-white text-3xl z-50"/>
        </div>
    
        {localidades.map((localidad, index) => (
          <OpcionLocalidad
            key={index}
            index={index}
            nombre={localidad.nombre}
            enviarLocalidad={recibirLocalidad}
            localidadOrigen={origen}
          />
        ))}
      </div>
    </div>
  );
};
