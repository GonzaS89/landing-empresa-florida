import React, { useEffect, useState, forwardRef } from "react";
import { Paradas } from "./Paradas";
import { useEstadoservicio } from "../../HooksCons/useEstadoservicio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Horario = forwardRef(
  (
    {
      horaSalida,
      recorrido,
      nombre,
      origen,
      destino,
      horaDeReferencia,
      codigo,
      diaAuto,
      grilla
    },
    ref
  ) => {

    const { ref: inViewRef, inView } = useInView({
      triggerOnce: false,  // Se ejecuta cada vez que el componente entra/sale
      threshold: .9,      // El componente se considera visible cuando el 50% está en vista
    });

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
      <motion.div
      ref={(node) => {
        // Combinamos el ref del padre con el ref de `useInView`
        if (ref) ref.current = node;
        inViewRef(node);
      }}
      initial={{ scale: 0.75, filter: "brightness(.5)" }}
      animate={{
        scale: inView ? 1 : 0.75,  // Si está visible, opacidad es 1, si no es 0
        filter: inView ? "brightness(1)" : "brightness(.25)"
      }}
      transition={{ duration: .5 , ease:"backInOut"}}
      >
        <div
        className="flex min-h-[500px] text-white w-[320px] border-2 rounded-2xl"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center h-auto bg-[#EE4E4E] basis-[30%] rounded-tl-xl rounded-bl-xl">
          <p className="font-jockey text-5xl text-shadow">
            {darFormatoHoraMinuto(horas)}
          </p>
          <p className="font-jockey text-5xl text-shadow">
            {darFormatoHoraMinuto(minutos)}
          </p>
          <h3 className="font-jockey text-3xl text-shadow">HRS</h3>
        </div>
        <div className="bg-[#242e48] basis-[70%] rounded-tr-xl rounded-br-xl flex flex-col justify-between">
          <div className="flex flex-col items-center gap-2 border-b-2 border-gray-500 py-4">
            <p className="font-jockey text-lg uppercase">{diaAuto ? 'Estado del servicio' : `grilla de ${grilla}`}</p>
            <p className={`${estado === 'Inactivo' ? 'text-red-700 text-lg ' : 'text-white text-base px-4'} font-jockey text-center uppercase text-sm`}>{diaAuto ? estado : ''}</p>
          </div>
          <div className="relative w-full flex justify-center">
          {/* <img src={require('../Iconos/divider.png')} alt="" className="divisor-horario"/> */}
          <span className="w-1 bg-white h-40 absolute"></span>
            <div className="flex flex-col items-center gap-2">
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
          <p className="text-center font-jockey text-xl border-t-2 border-gray-500 py-4 uppercase">boleto $ {codigo}</p>
        </div>
      </div>
      </motion.div>
      
    );
  }
);
