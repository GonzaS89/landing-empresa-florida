import { useState, useEffect } from 'react';

interface Horario {
  nombre: string;
  valor_salida: number;
  referencia: string;
  recorrido: string[];
}

// Definir el tipo de datos para la respuesta completa (en este caso, solo lunesAViernes)
interface HorariosRespuesta {
  lunesAViernes: Horario[];
  sabado: Horario[];
  domingo: Horario[];
}

export const useFetchHorarios = () => {
  // Usamos `HorariosRespuesta | null` para indicar que el estado puede ser el objeto de respuesta o `null` al principio
  const [horarios, setHorarios] = useState<HorariosRespuesta | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // `loading` es un booleano
  
  // Función para obtener los horarios de manera asíncrona
  const obtenerHorarios = async () => {
    try {
      const resp = await fetch('https://empflorida-servicios.netlify.app/horarios.json');
      const resultado: HorariosRespuesta = await resp.json();  // Esperamos el objeto que contiene "lunesAViernes"
      setHorarios(resultado);  // Actualizamos el estado con los datos obtenidos
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);  // Cambiamos el estado de carga a false cuando se completa
    }
  };

  useEffect(() => {
    obtenerHorarios();  // Llamamos a la función asíncrona cuando el componente se monta
  }, []);  // Se ejecuta solo una vez
  
  return { horarios, loading };  // Devolvemos tanto los horarios como el estado de carga
};
