import React, { useEffect, useState } from 'react'
import { NumerosDeViajes } from './NumerosDeViajes';
import {Tipodetarifa} from './Tipodetarifa';
import { motion } from 'framer-motion';
import { useHeight } from '../../HooksCons/useHeight';

export const Containerviajestarifas = ({enviarViajesIngresados , enviarTarifaElegida, destino }) => {

    const [viajesIngresados, setViajesIngresados] = useState(null);
    const [tarifaElegida, setTarifaElegida] = useState(null);
    const [inputFocus, setInputFocus] = useState(null);
    const [inputOnBlur, setInputOnBlur] = useState(null)

    const recibirNumViaje = (viajes) => {
        setViajesIngresados(viajes);
        setInputFocus(false);
        setInputOnBlur(false)
      };

      const recibirNumViajeInput = e => {
        setViajesIngresados(parseInt(e.target.value));
      };

      const recibirTarifa = (tarifa) => {
        setTarifaElegida(tarifa);
        enviarTarifaElegida(tarifa)
      };

      useEffect(() => {
        enviarViajesIngresados(viajesIngresados)
      },[viajesIngresados,enviarViajesIngresados])

const {hLg} = useHeight()


  return (
    <div className='px-2 flex flex-col gap-4 w-full'>
          <motion.div
           initial={{x: '120%'}}
           animate = {{x: destino !== null ? 0 : '120%'}}
           transition={{duration: .5 , ease: 'easeInOut'}}
          className={`flex flex-col items-start ${hLg ? 'gap-4' : 'gap-2'}`}>
            <h1 className='text-xl font-jockey'>Cantidad de viajes</h1>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <NumerosDeViajes
                  numero={8}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={16}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={22}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
                <NumerosDeViajes
                  numero={44}
                  enviarNumViaje={recibirNumViaje}
                  viajesIngresados={viajesIngresados}
                  inputFocus={inputFocus}
                />
              </div>
              <div className="absolute right-0 mr-5">
                <input
                  className={`rounded-full w-[50px] h-[50px]  ${!inputOnBlur ? 'bg-black text-white' : 'bg-gray-300 text-black' }  placeholder:font-jockey font-jockey text-center text-2xl`}
                  type="number"
                  placeholder="¿...?"
                  onChange={recibirNumViajeInput}
                  onFocus={() => setInputFocus(true)}
                  onBlur={()=> setInputOnBlur(true)}
                  onClick={()=> setViajesIngresados(null)}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
           initial={{x: '120%'}}
           animate = {{x: viajesIngresados !== null ? 0 : '120%'}}
           transition={{duration: .5 ,  ease: 'easeInOut'}}
          className='flex flex-col items-start w-full gap-2'>
            <h1 className='text-xl font-jockey'>Tipo de tarifa</h1>
            <div className="w-full">
              <div className="flex justify-between">
              <Tipodetarifa
                tarifa={"social"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              <Tipodetarifa
                tarifa={"estudiantil"}
                enviarTarifa={recibirTarifa}
                tarifaElegida={tarifaElegida}
              />
              </div>
            </div>
          </motion.div>
        </div>
  )
}
