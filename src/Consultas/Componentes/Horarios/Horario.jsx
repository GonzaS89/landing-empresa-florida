import React, { useEffect, useState, forwardRef } from "react";
import { Paradas } from "./Paradas";
import { useEstadoservicio } from "../../HooksCons/useEstadoservicio";
import { motion } from "framer-motion";

export const Horario = forwardRef(
  (
    {
      horaSalida,
      recorrido,
      nombre,
      index,
      indiceDeBusqueda,
      origen,
      destino,
      horaDeReferencia,
      codigo,
      diaAuto,
      grilla
    },
    ref
  ) => {
    const [minutosDif, setMinutosDif] = useState(null);
    const [horaSalidaEnMinutos, setHoraSalidaEnMInutos] = useState(null);
    const [lengthRecorrido, setLengthRecorrido] = useState(null);
    const [horas, setHoras] = useState(null);
    const [minutos, setMinutos] = useState(null)

    useEffect(() => {
      setHoraSalidaEnMInutos(
        Math.trunc(horaSalida) * 60 +
          (horaSalida - Math.trunc(horaSalida)) * 100
      );
      setMinutosDif(Math.round(horaSalidaEnMinutos - horaDeReferencia));
      setLengthRecorrido(recorrido.length);
    }, [
      horaSalida,
      horaSalidaEnMinutos,
      horaDeReferencia,
      recorrido,
    ]);

    useEffect(()=> {
        let partes = nombre.split(":");
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);
        
        setHoras(horas);setMinutos(minutos)
    },[nombre]);

    const darFormatoHoraMinuto = elemento => {
      return elemento < 10 ? `0${elemento}` : elemento
    }

    const {estado} = useEstadoservicio(minutosDif)


    return (
      <div
        className="flex h-auto text-white w-[300px] border-2 rounded-2xl"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center h-auto bg-[#EE4E4E] basis-[30%] rounded-tl-xl rounded-bl-xl">
          <p className="font-jockey text-5xl text-shadow">
            {darFormatoHoraMinuto(horas)}
          </p>
          <p className="font-jockey text-5xl text-shadow">
            {darFormatoHoraMinuto(minutos)}
          </p>
          <h3 className="font-jockey text-4xl text-shadow">HRS</h3>
        </div>
        <div className="bg-[#242e48] basis-[70%] rounded-tr-xl rounded-br-xl">
          <div className="flex flex-col items-center gap-2 border-b-2 border-gray-500 py-4">
            <p className="font-jockey text-lg uppercase">{diaAuto ? 'Estado del servicio' : `grilla de ${grilla}`}</p>
            <p className={`${estado === 'Inactivo' ? 'text-red-700 text-lg ' : 'text-white text-base'} font-jockey text-center uppercase`}>{diaAuto ? estado : ''}</p>
          </div>
          <div className="container-recorrido">
          {/* <img src={require('../Iconos/divider.png')} alt="" className="divisor-horario"/> */}
            <div className="flex flex-col items-center gap-2 my-4">
              {recorrido.map((parada, index) => (
                <Paradas
                  key={index}
                  nombre={parada}
                  index={recorrido.indexOf(parada)}
                  length={lengthRecorrido}
                  origen={origen}
                  destino={destino}
                />
              ))}
            </div>
          </div>
          <p className="text-center font-jockey text-xl border-t-2 border-gray-500 py-4">BOLETO $ {codigo}</p>
        </div>
      </div>
    );
  }
);
