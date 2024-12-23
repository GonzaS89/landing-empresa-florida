import { useEffect, useState } from "react";
import { useHora } from "./useHora";

export const useFiltradoHorarios = (origen, destino, listado, via) => {

  const { fecha, mes, } = useHora()
  const [listaHorarios, setListaHorarios] = useState([]);

  useEffect(() => {
    if (listado !== null) {
      const horariosFiltrados = [];
      listado.forEach((horario) => {
        const recorrido = horario.recorrido;
        const salida = horario.salida;
        const incluyeOrigen = recorrido.includes(origen);
        const incluyeDestino = recorrido.includes(destino);
        const indexOrigen = recorrido.indexOf(origen);
        const indexDestino = recorrido.indexOf(destino);

        const feriado24Dic = fecha === 24 && mes === 11;
        const feriado25Dic = fecha === 25 && mes === 11;

        // Caso cuando 'via' es null
        if (via === null) {
          if (origen === destino) {
            if (incluyeOrigen && recorrido.indexOf("s. m. de tucumán") !== 0) {
              if (feriado24Dic) {
                if (salida <= 21.1) {
                  horariosFiltrados.push(horario)
                }
              }
              if (feriado25Dic) {
                if (salida >= 13.55) {
                  horariosFiltrados.push(horario)
                }
              }

              else { horariosFiltrados.push(horario) }
            }
          } else if (
            incluyeOrigen &&
            incluyeDestino &&
            indexOrigen < indexDestino
          ) {
            if (feriado24Dic) {
              if (salida <= 21.1) { horariosFiltrados.push(horario) }
            }
            if (feriado25Dic) {
              if (salida >= 13.55) {
                horariosFiltrados.push(horario)
              }
            }
            else { horariosFiltrados.push(horario) };
          }
        }
        // Caso cuando 'via' es 'w. posse'
        else if (via === "w. posse") {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            recorrido.includes(via) &&
            indexOrigen < indexDestino
          ) {
            if (feriado24Dic) {
              if (salida <= 21.1) { horariosFiltrados.push(horario) }
            } 
            if (feriado25Dic) {
              if (salida >= 13.55) {
                horariosFiltrados.push(horario)
              }
            }
            else { horariosFiltrados.push(horario) };;
          }
        }
        // Caso cuando 'via' no es 'w. posse'
        else {
          if (
            incluyeOrigen &&
            incluyeDestino &&
            !recorrido.includes("w. posse") &&
            indexOrigen < indexDestino
          ) {
            if (feriado24Dic) {
              if (salida <= 21.1) { horariosFiltrados.push(horario) }
            }
            if (feriado25Dic) {
              if (salida >= 13.55) {
                horariosFiltrados.push(horario)
              }
            }
            else { horariosFiltrados.push(horario) };
          }
        }
      });

      // Actualiza el estado solo una vez con los horarios filtrados
      setListaHorarios(horariosFiltrados.sort((a, b) => a.salida - b.salida));
    }
  }, [origen, destino, via, listado]);
  return { listaHorarios }
}
