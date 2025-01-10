import { useEffect, useState } from "react";
import grillanormal from '../Data/grillanormal.json'
import grillavacaciones from '../Data/grillavacaciones.json'
export const useDiaDeLaSemana = (val) => {
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

  useEffect(() => {
    switch (val) {
      case "lunesAViernes":
        setDiaDeLaSemana(grillavacaciones.lunesAViernes);
        break;
      case "sabados":
        setDiaDeLaSemana(grillavacaciones.sabados);
        break;
      case "domingos":
        setDiaDeLaSemana(grillavacaciones.domingos);
        break;
        case "findeaño":
        setDiaDeLaSemana(grillavacaciones.findeaño);
        break;
        case "añonuevo":
        setDiaDeLaSemana(grillavacaciones.añonuevo);
        break;

      default:
        break;
    }
  }, [val]);

  return { diaDeLaSemana };
};
