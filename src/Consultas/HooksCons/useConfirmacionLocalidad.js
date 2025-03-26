import { useState,useEffect } from "react";

export const useConfirmacionLocalidad = (origen,destino,nombre) => {

    const [localidadClickeada, setLocalidadClickeada] = useState(false);
    const [nombreOpcionVia, setNombreOpcionVia] = useState(null);
    const [opcionesViasVisibles, setOpcionesViasVisibles] = useState(false);
    const [confirmacionSeleccion, setConfirmacionSeleccion] = useState(false);

    useEffect(() => {
        if (destino === nombre) {
          setLocalidadClickeada(true);
          setConfirmacionSeleccion(true);
        } else {
          setLocalidadClickeada(false);
          setConfirmacionSeleccion(false);
        }
    
        
      }, [destino, origen, nombre]);
  return {localidadClickeada,
    nombreOpcionVia,
    opcionesViasVisibles,
    confirmacionSeleccion}
}
