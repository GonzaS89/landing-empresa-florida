import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerHoraDia } from "../Componentes/Horarios/ContainerHoraDia";
import { Bloquelocalidadesorigen } from "../Componentes/Abonos/Bloquelocalidadesorigen";
import { Bloquelocalidadesdestino } from "../Componentes/Abonos/Bloquelocalidadesdestino";
import { Via } from "../Componentes/Horarios/Via";
import { useHabilitarBoton } from "../HooksCons/useHabilitarBoton";
import { useHora } from "../HooksCons/useHora";
import { useDiaDeLaSemana } from "../HooksCons/useDiaDeLaSemana";
import { useFiltradoHorarios } from "../HooksCons/useFiltradoHorarios";
import { useHeight } from "../HooksCons/useHeight";
import { motion } from "framer-motion";

export const Mainhorarios = ({ enviarParametrosHorarios }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleBackButton = (event) => {
      window.location.href = "/";
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const { hLg } = useHeight;
  const { minutos, hora, dia, fecha, mes } = useHora();
  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);
  const [horaManualMin, setHoraManualMin] = useState(null);
  const [horaAutoMin, setHoraAutoMin] = useState(null);
  const [cargando, setCargando] = useState(false);
  const { esValido } = useHabilitarBoton(localidadOrigen, localidadDestino, via);

  useEffect(() => {
    esValido && setBotonDisponible(esValido);
  }, [esValido]);

  const recibirLocalidad = (localidad) => setLocalidadOrigen(localidad);
  const recibirLocalidadDestino = (localidad) => setLocalidadDestino(localidad);
  const recibirVia = (via) => setVia(via);

  const [diaAuto, setDiaAuto] = useState(null);
  const [diaManual, setDiaManual] = useState(null);
  const [rangoDias, setRangoDias] = useState(null);

  useEffect(() => {
    setRangoDias(diaManual !== null ? diaManual : diaAuto);
  }, [diaAuto, diaManual]);

  const { diaDeLaSemana } = useDiaDeLaSemana(rangoDias);
  const { listaHorarios } = useFiltradoHorarios(localidadOrigen, localidadDestino, diaDeLaSemana, via);

  useEffect(() => {
    setVia(null);
  }, [localidadDestino]);

  const recibirHoraAutoMin = (hora) => setHoraAutoMin(hora);
  const recibirHoraManualMin = (hora) => setHoraManualMin(hora);

  const handleClick = async () => {
    setCargando(true);
    await new Promise((resolve) => setTimeout(resolve, 750));
    enviarParametrosHorarios(
      localidadOrigen,
      localidadDestino,
      via,
      listaHorarios,
      horaAutoMin,
      horaManualMin,
      diaAuto,
      diaManual
    );
    setCargando(false);
    navigate("/horarios");
  };

  return (
    <div className="w-full bg-slate-800 flex justify-center relative">
      <img src={`/img-consultas/horarios.webp`} alt="" className="absolute h-full object-cover"/>
      <span className="bg-slate-900 bg-opacity-90 absolute w-full h-full"></span>
      <div className="flex justify-center w-full sm:max-w-xl z-50">
        <div className={`overflow-hidden text-white flex flex-col pt-6 h-screen w-full lg:max-w-xl relative ${hLg ? "gap-6" : "gap-2"}`}>
          <h1 className="uppercase text-3xl xl:text-[40px] text-center font-jockey">Consulta de horarios</h1>
          <Bloquelocalidadesorigen origen={localidadOrigen} recibirLocalidad={recibirLocalidad} />
          <Bloquelocalidadesdestino origen={localidadOrigen} destino={localidadDestino} recibirLocalidadDestino={recibirLocalidadDestino} />
          <Via viaElegida={recibirVia} destino={localidadDestino} origen={localidadOrigen} />
          <ContainerHoraDia
            hora={hora}
            minutos={minutos}
            dia={dia}
            fecha={fecha}
            mes={mes}
            enviarDiaRango={setDiaAuto}
            enviarDiaManual={setDiaManual}
            enviarHoraAutoMin={recibirHoraAutoMin}
            enviarHoraManualMin={recibirHoraManualMin}
            destino={localidadDestino}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: botonDisponible ? 0 : "100%" }}
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
            className={`${botonDisponible ? "bg-red-700" : "bg-gray-600"} absolute py-4 lg:py-2 xl:py-4 text-3xl uppercase bottom-0 w-full font-jockey text-center cursor-pointer`}
            onClick={!cargando ? handleClick : null}
          >
            {cargando ? "Cargando horarios ..." : "Consultar"}
          </motion.div>
        </div>
      </div>
    </div>
  );
};