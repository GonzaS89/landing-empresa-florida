import React from "react";
import { useEffect, useState, useRef } from "react";
import { Horario } from "../Componentes/Horarios/Horario";
import { useGenerarCodigo } from "../HooksCons/useGenerarCodigo";
import { useIndiceBusqueda } from "../HooksCons/useIndiceBusqueda";
import { useHoraReferencia } from "../HooksCons/useHoraReferencia";
import { div } from "framer-motion/client";


const Horarios = ({ grillaDefinitiva, origen, destino, horaAuto, horaManual, via, diaAuto, grilla }) => {

  useEffect(() => {
    if (grillaDefinitiva === null) {
        // Redirige a otra URL si miVariable es null
        window.location.href = '/';
    }
}, [grillaDefinitiva]);

  const [claseNormalizadora, setClaseNormalizadora] = useState(null);
  const {codigo} = useGenerarCodigo(origen,destino,via)
  const {horaDeReferencia} = useHoraReferencia(horaManual,horaAuto)
  const refs = useRef([]);
  const {indiceDeBusqueda} = useIndiceBusqueda(grillaDefinitiva,horaDeReferencia);
   
  useEffect(() => {
    if (refs.current[indiceDeBusqueda]) {
      setTimeout(() => {
        refs.current[indiceDeBusqueda].scrollIntoView({ behavior: 'auto', block: 'center' });
      }, 0);
    }
  }, [indiceDeBusqueda])

  const normalizarResultados = () => {
    setClaseNormalizadora('containerservicio serviciovisibleynormal')
  }
  return (
    <div className="bg-slate-900 flex justify-center ">
         <div className="bg-slate-900 w-full lg:max-w-3xl overflow-scroll container-horarios">
      <div className="container-main-horarios">
        <div className="logo-fondo"></div>
        <div className='container-resultadoshorarios'>
          <div className="flex flex-col gap-2 items-center justify-center w-full py-4" onTouchMove={normalizarResultados}>
          {grillaDefinitiva?.length > 0 &&
            grillaDefinitiva.map((servicio, index) => (
              <Horario
                key={index}
                nombre={servicio.nombre}
                horaSalida={servicio.salida}
                recorrido={servicio.recorrido}
                indiceDeBusqueda={indiceDeBusqueda}
                origen={origen}
                destino={destino}
                index={index}
                codigo={codigo}
                horaDeReferencia={horaDeReferencia}
                claseNormalizadora={claseNormalizadora}
                ref={el => refs.current[index] = el} 
                diaAuto = {diaAuto}
                grilla = {grilla}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Horarios;
