import { useEffect, useState } from "react";
import grillanormal from '../Data/grillanormal.json'
import grillavacaciones from '../Data/grillavacaciones.json'
export const useDiaDeLaSemana = (val) => {
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

  useEffect(() => {
    // Usamos val como clave directamente para acceder al objeto grillavacaciones
    if (grillavacaciones[val]) {
      setDiaDeLaSemana(grillavacaciones[val]);
    }
  }, [val]);

  return { diaDeLaSemana };
};