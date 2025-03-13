import { useState, useEffect } from 'react';

export const useFetchHorarios = () => {
    const [horarios, setHorarios] = useState(null);
    const [loading, setLoading] = useState(true);  // Estado de carga
  
    // Función para obtener los horarios de manera asíncrona
    const obtenerHorarios = async () => {
      try {
        const resp = await fetch('https://empflorida-servicios.netlify.app/horarios.json');
        const resultado = await resp.json();
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
