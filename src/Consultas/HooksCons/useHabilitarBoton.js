import { useEffect, useState } from "react";
export const useHabilitarBoton = (origen, destino, via) => {
  const [esValido, setEsValido] = useState(false);

  useEffect(() => {
    const esDestinoValido = ["s. m. de tucumán", "banda del río salí"].includes(destino);
    const esOrigenValido = ["s. m. de tucumán", "banda del río salí"].includes(origen);
    const floridaFortinCol4 = ["la florida", "fortín", "colonia 4 (luisiana)"];

    const esFloridaFortinCol4Destino = floridaFortinCol4.includes(destino);
    const esFloridaFortinCol4Origen = floridaFortinCol4.includes(origen);

    const esFormularioCompleto = origen !== null && destino !== null && via !== null;

    // Si las condiciones para la validación se cumplen
    if (
      (esOrigenValido && esFloridaFortinCol4Destino) ||
      (esDestinoValido && esFloridaFortinCol4Origen)
    ) {
      setEsValido(esFormularioCompleto);
    } else {
      setEsValido(origen !== null && destino !== null);
    }

  }, [origen, destino, via]);

  return { esValido };
};