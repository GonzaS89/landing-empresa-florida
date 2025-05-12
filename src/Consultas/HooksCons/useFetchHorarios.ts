import { useState, useEffect } from 'react';

export const useFetchHorarios = () => {
  const [horarios, setHorarios] = useState(null);
  const [loading, setLoading] = useState(true);

  const obtenerHorarios = async () => {
    try {
      const resp = await fetch('https://70236255.netlify.app/horarios.json');
      const resultado = await resp.json(); 
      setHorarios(resultado);
    } catch (error) {
      console.error("Error al obtener horarios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerHorarios();
  }, []);
  
  return { horarios, loading };
};
