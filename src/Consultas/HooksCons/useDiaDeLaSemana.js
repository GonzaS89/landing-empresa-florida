import { useEffect, useState } from "react";
import grillanormal from '../Data/grillanormal.json'
export const useDiaDeLaSemana = (val) => {
  const [diaDeLaSemana, setDiaDeLaSemana] = useState(null);

  useEffect(() => {
    switch (val) {
      case "lunesAViernes":
        setDiaDeLaSemana(grillanormal.lunesAViernes);
        break;
      case "sabados":
        setDiaDeLaSemana(grillanormal.sabados);
        break;
      case "domingos":
        setDiaDeLaSemana(grillanormal.domingos);
        break;

      default:
        break;
    }
  }, [val]);

  return { diaDeLaSemana };
};
