import { useState, useEffect } from "react";

export const useDefineFeriado = (fecha, mes) => {
  const [feriado, setFeriado] = useState(false);

  useEffect(() => {
    const feriados = {
      0: [1], // Enero 1
      2: [3,4,24], // Marzo 3
      3:[2],
      11: [24, 25], // Diciembre 24 y 25
    };

    setFeriado(feriados[mes]?.includes(fecha) || false);
  }, [fecha, mes]);

  return { feriado };
};
