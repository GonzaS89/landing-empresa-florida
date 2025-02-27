import { useState, useEffect } from "react";

export const useDefineFeriado = (fecha, mes) => {
  const [feriado, setFeriado] = useState(false);

  useEffect(() => {
    const feriados = {
      0: [1], // Enero 1
      4: [3], // Mayo 3
      11: [24, 25], // Diciembre 24 y 25
    };

    setFeriado(feriados[mes]?.includes(fecha) || false);
  }, [fecha, mes]);

  return { feriado };
};
