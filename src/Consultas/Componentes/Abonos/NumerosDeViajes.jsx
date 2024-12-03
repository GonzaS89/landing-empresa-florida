import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const NumerosDeViajes = ({
  numero,
  enviarNumViaje,
  viajesIngresados,
  inputFocus,
}) => {
  const [opcionSelec, setOpcionSelec] = useState(false);

  const clickEnNumViaje = () => {
    enviarNumViaje(parseInt(numero));
  };

  useEffect(() => {
    numero === viajesIngresados && viajesIngresados !== null
      ? setOpcionSelec(true)
      : setOpcionSelec(false);
      inputFocus && setOpcionSelec(false)
  }, [viajesIngresados, inputFocus, numero]);

  return (
    <div
      className={`${opcionSelec ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'} w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] text-2xl rounded-full  grid place-items-center relative font-jockey xl:text-3xl cursor-pointer`}
      onClick={clickEnNumViaje}
    >
      {numero}
      <motion.div
        initial={{scale:0}}
        animate={{scale: opcionSelec ? 1 : 0}}
        transition={{duration: 1,  ease:'backOut'}}
        className={opcionSelec ? 'text-lg xl:text-2xl absolute -top-1 right-0' : 'hidden'}
      >
      <FaCheckCircle />
      </motion.div>
    </div>
  );
};
