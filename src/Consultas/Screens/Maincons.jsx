import React, {useState, useEffect} from 'react';
import { useHeight } from '../HooksCons/useHeight';
import { Bloquelocalidadesorigen } from '../Componentes/Abonos/Bloquelocalidadesorigen';
import { Bloquelocalidadesdestino } from '../Componentes/Abonos/Bloquelocalidadesdestino';
import { Containerviajestarifas } from '../Componentes/Abonos/Containerviajestarifas';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Maincons = ({enviarParametrosAbonos}) => {
    useEffect(() => {
        // Función que maneja la acción de retroceder
        const handleBackButton = (event) => {
            // Redirigir a una URL específica cuando se presiona el botón de "back"
            window.location.href = '/';
        };
    
        // Añadir el listener al evento popstate
        window.addEventListener('popstate', handleBackButton);
    
        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [botonDisponible, setBotonDisponible] = useState(false);
  const [via, setVia] = useState(null);

  useEffect(() => { tarifaElegida ? setBotonDisponible(true) : setBotonDisponible(false); }, [tarifaElegida]);

  const recibirLocalidad = (localidad) => { setLocalidadOrigen(localidad); };
  const recibirLocalidadDestino = (localidad) => { setLocalidadDestino(localidad); };
  const recibirVia = via => { setVia(via) }

  useEffect(() => {
    setVia(null)
  }, [localidadDestino])

  const recibirTarifaElegida = tarifa => { setTarifaElegida(tarifa) }
  const recibirViajesIngresados = viajes => { setViajesIngresados(viajes) }

    const {hLg} = useHeight()

  return (
    <div className='flex justify-center bg-black w-full'>
      <div className="bg-slate-800 w-full lg:max-w-3xl">
    <div className={`overflow-hidden text-white flex flex-col  items-center h-screen-dvh pt-6  h-screen  w-full relative ${hLg ? 'gap-6' : 'gap-2'}`}>
      <h1 className='uppercase  font-jockey text-2xl'>Calculá el precio de tu abono</h1>
      <Bloquelocalidadesorigen origen={localidadOrigen} recibirLocalidad={recibirLocalidad}/>
      <Bloquelocalidadesdestino origen={localidadOrigen} destino={localidadDestino} recibirVia={recibirVia} recibirLocalidadDestino={recibirLocalidadDestino} />
      <Containerviajestarifas enviarTarifaElegida={recibirTarifaElegida} enviarViajesIngresados={recibirViajesIngresados} destino={localidadDestino} />
     <Link to='/cotizacion'>
     <motion.div 
           initial= {{y: '100%'}}
           animate={{y: botonDisponible ? 0 : '100%'}}
           transition={{duration: .5, ease:'easeInOut'}}
           className={`${botonDisponible ?  'bg-red-700' : 'bg-gray-600'} uppercase py-4  text-3xl absolute bottom-0 left-0 w-full flex items-center justify-center font-jockey`}
           onClick={() => enviarParametrosAbonos(localidadOrigen, localidadDestino, viajesIngresados, tarifaElegida, via)}>calcular</motion.div>
     </Link>
    </div>
  </div>
    </div>
    
  )
}
