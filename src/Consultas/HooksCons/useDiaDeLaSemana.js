import { useEffect, useState } from "react";;
import { useFetchHorarios } from "./useFetchHorarios";


export const useDiaDeLaSemana = (val) => {
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);
  const { horarios, loading } = useFetchHorarios();  // Obtenemos horarios y estado de carga

  useEffect(() => {
    if (!loading && horarios) {  // Aseguramos que los datos estén cargados antes de continuar
      if (horarios[val]) {
        setDiaDeLaSemana(horarios[val]);
      } else {
        console.log("No se encontraron datos para el valor:", val);
      }
    }
  }, [val, horarios, loading]);  // Dependemos de val, horarios y loading

  return { diaDeLaSemana, loading };  // Devolvemos también el estado de carga
};