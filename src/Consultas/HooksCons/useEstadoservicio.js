import { useEffect, useState } from "react";

export const useEstadoservicio = (minutos) => {
  const [estado, setEstado] = useState();

  useEffect(() => {
    let newEstado = '';

    if (minutos < -90 || minutos > 120) {
      newEstado = 'Inactivo';
    } else if (minutos < -60) {
      newEstado = 'Inició recorrido hace más de una hora';
    } else if (minutos < -30) {
      newEstado = 'Inició recorrido hace media hora';
    } else if (minutos >= -30 && minutos < 0) {
      newEstado = `Inició recorrido hace ${Math.abs(minutos)} minutos`;
    } else if (minutos === 0) {
      newEstado = "Está iniciando recorrido";
    } else if (minutos <= 3) {
      newEstado = "Pronto iniciará su recorrido";
    } else if (minutos < 60) {
      newEstado = `Iniciará su recorrido en ${minutos} minutos`;
    } else if (minutos === 60) {
      newEstado = "Iniciará recorrido en una hora";
    } else if (minutos <= 90) {
      newEstado = "Iniciará su recorrido en poco más de una hora";
    } else if (minutos < 120) {
      newEstado = "Iniciará su recorrido en poco menos de dos horas";
    }

    setEstado(newEstado);
  }, [minutos]);

  return { estado };
};
