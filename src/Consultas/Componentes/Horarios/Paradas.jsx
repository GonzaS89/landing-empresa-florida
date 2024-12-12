import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
export const Paradas = ({ nombre, index, length, origen, destino }) => {

    const nombreOrigenDestino = nombre === origen || nombre === destino;

  return (

    <>
      <div
        className={` ${nombreOrigenDestino ? 'bg-black text-white' : 'bg-white text-black'} w-40 flex justify-center items-center relative rounded-md py-1 border-groove border-2`}
      >
        <p className="uppercase font-jockey text-[14px]">{nombre}</p>
        {nombre === origen || destino === nombre}
        <BsCheckCircleFill className={nombreOrigenDestino ? ' absolute left-1' : 'hidden'}/>

        {/* <img src={require('../Iconos/autobus.png')} alt="" className={definirClaseIconoBus(origen,destino)}/> */}
      </div>
    </>
  );
};
