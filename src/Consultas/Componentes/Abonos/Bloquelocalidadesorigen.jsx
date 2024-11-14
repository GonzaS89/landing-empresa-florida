import React from "react";
import { OpcionLocalidad } from "./OpcionLocalidad";
import { useHeight } from "../../HooksCons/useHeight";
import localidades from "../../Data/localidades.json";

export const Bloquelocalidadesorigen = ({ origen, recibirLocalidad }) => {
  const { hLg } = useHeight();

  return (
    <div className={`flex flex-col px-1  ${hLg ? "gap-2" : "gap-1"} w-full`}>
      <h1 className={`${hLg ? "text-2xl" : "text-xl"} text-white font-jockey`}>
        Origen
      </h1>
      <div className="flex  gap-2 overflow-x-scroll">
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
