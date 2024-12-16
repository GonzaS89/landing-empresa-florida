import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useHeight } from "../../HooksCons/useHeight";
import { useDefineFeriado } from "../../HooksCons/useDefineFeriado";

export const ContainerHoraDia = ({
  hora,
  minutos,
  dia,
  fecha,
  mes,
  enviarDiaRango,
  enviarDiaManual,
  enviarHoraAutoMin,
  enviarHoraManualMin,
  destino
}) => {
  const [diaRango, setDiaRango] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [horaManualEnMinutos, setHoraManualEnMinutos] = useState(null);
  const [horaAutoEnMinutos, setHoraAutoEnMinutos] = useState();

  const {feriado} = useDefineFeriado(fecha,mes)

  useEffect(() => {
    if(feriado){
      setDiaRango("Feriado")
      enviarDiaRango("domingos")
    }
    else if (dia === 0) {
      setDiaRango("Domingos");
      enviarDiaRango("domingos");
    } else if (dia >= 1 && dia <= 5 && !feriado) {
      setDiaRango("Lunes a viernes");
      enviarDiaRango("lunesAViernes");
    } else if (dia === 6 && !feriado) {
      setDiaRango("Sábados");
      enviarDiaRango("sabados");
    }
  }, [dia, enviarDiaRango]);

  const actualizarHora = () => {
    let horas = parseInt(hora);
    let totalMinutos = horas * 60 + parseInt(minutos);
    enviarHoraAutoMin(totalMinutos);
    setHoraAutoEnMinutos(totalMinutos);
  };

  useEffect(() => {
    if (horaAutoEnMinutos !== null) {
      let horas = parseInt(hora);
      let totalMinutos = horas * 60 + parseInt(minutos);
      enviarHoraAutoMin(totalMinutos);
      setHoraAutoEnMinutos(totalMinutos);
    }
  }, [hora, minutos, horaAutoEnMinutos, enviarHoraAutoMin]);

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setDiaManual(valor);
    enviarDiaRango(null);
    if (valor === "Lunes a viernes") {
      enviarDiaManual("lunesAViernes");
    } else if (valor === "Sábados") {
      enviarDiaManual("sabados");
    } else if (valor === "Domingos") {
      enviarDiaManual("domingos");
    }
  };

  const enviarHoraManual = (e) => {
    let horaStr = e.target.value;
    let partes = horaStr.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let totalMinutos = horas * 60 + minutos;
    enviarHoraManualMin(totalMinutos);
    setHoraManualEnMinutos(totalMinutos);
  };

  const resetearHoraManual = () => {
    setHoraManualEnMinutos(null);
    enviarHoraManualMin(null);
    actualizarHora();
  };
  const desactivarHoraAuto = () => {
    setHoraManualEnMinutos(0);
    enviarHoraAutoMin(null);
    setHoraAutoEnMinutos(null);
  };

  const {hLg} = useHeight()

  

  return (
    <div className={`${hLg ? 'my-2' : ''} px-2 flex flex-col gap-0`}>
      <motion.div 
        initial={{x: '120%'}}
        animate = {{x: destino !== null ? 0 : '120%'}}
        transition={{duration: .5 , ease: 'easeInOut'}}
      className="flex flex-col gap-1 overflow-hidden">
        <h1 className='text-left text-2xl xl:text-4xl font-jockey'>Día de la semana</h1>
        <div 
        className='flex justify-between'>
          <div
            className={`${diaManual === null 
              ?  'bg-gray-200  text-black'  :'bg-gray-200 text-gray-500'} w-36 lg:w-40 xl:w-52 py-[10px] xl:py-[20px] flex justify-center items-center uppercase rounded-md font-jockey md:text-xl`
              
            }
            onClick={() => setDiaManual(null)}
          >
            {diaRango}
          </div>
          <div className='flex items-center justify-center rounded-md relative w-36 lg:w-40 xl:w-52'>
            <div
              className={ `${diaManual === null ? 'text-gray-500' : ' text-black'} absolute uppercase text-base md:text-xl pointer-events-none bg-gray-200 z-50 flex items-center  justify-center rounded-md py-[10px] xl:py-[20px] w-full font-jockey`}
            >
              {diaManual !== null ? diaManual : "Elegí un día"}
              <IoIosArrowForward className="arrow-select absolute right-0" />
            </div>
            <select
              className="w-2/3 text-gray-500"
              name=""
              id=""
              onChange={manejarCambio}
            >
              <option value="" selected={true} disabled={true}>
                Elegí un día
              </option>
              <option value="Lunes a viernes">Lunes a viernes</option>
              <option value="Sábados">Sábados</option>
              <option value="Domingos">Domingos</option>
            </select>
          </div>
        </div>
      </motion.div>
      <motion.div 
         initial={{x: '-120%'}}
         animate = {{x: destino !== null ? 0 : '-120%'}}
         transition={{duration: .5 , delay:.5, ease: 'easeInOut'}}
      className="flex flex-col gap-1">
        <h1 className='text-left text-2xl xl:text-4xl font-jockey'>Hora</h1>
        <div className="flex justify-between">
          <div
            className={`flex items-center justify-center bg-gray-200 w-36 lg:w-40 xl:w-52 xl:py-[20px] rounded-md text-xl md:text-2xl ${horaAutoEnMinutos === null ? 'text-gray-400' : 'text-black'} font-jockey`}
            onClick={resetearHoraManual}
          >
            {hora < 10 ? `0${hora}` : hora}:
            {minutos < 10 ? `0${minutos}` : minutos}
          </div>
          <div className="relative w-36 lg:w-40 xl:w-52 flex justify-center">
            <div
              className={`${horaManualEnMinutos === null ? "" : ""} absolute pointer-events-none w-full flex justify-center items-center bg-gray-100 h-full rounded-md text-gray-500 font-jockey uppercase md:text-xl`}
            >
              Marcá una hora
              <IoIosArrowForward className="absolute right-0" />
            </div>
            <input
              type="time"
              className={`${horaManualEnMinutos === null ? "w-full" : "w-full z-50 text-black"}   w-1/2 flex justify-center font-jockey text-lg text-center rounded-md`}
              onChange={enviarHoraManual}
              onClick={desactivarHoraAuto}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
