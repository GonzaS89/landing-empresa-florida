import { useState, useEffect } from "react";

export const useReturnDestinos = (localidad) => {
  const destinosMap = {
    "la florida": [
      "la florida", "w. posse", "alderetes", "banda del río salí", "s. m. de tucumán", 
      "el paraíso", "cevil pozo", "colonia 4 (luisiana)", "fortín", "el talar", "colonia media agua"
    ],
    "w. posse": [
      "cevil pozo", "banda del río salí", "s. m. de tucumán", "la florida", 
      "el paraíso", "colonia 4 (luisiana)", "fortín"
    ],
    "el paraíso": [
      "la florida", "w. posse", "cevil pozo", "banda del río salí", "s. m. de tucumán"
    ],
    "colonia 4 (luisiana)": [
      "la florida", "el paraíso", "w. posse", "cevil pozo", "banda del río salí", "s. m. de tucumán"
    ],
    "los ralos": [
      "los ralos", "esquina llona", "cruz alta", "colonia media agua", "las cejas", 
      "cevil pozo", "banda del río salí", "s. m. de tucumán", "7 de abril"
    ],
    "cruz alta": [
      "cruz alta", "los ralos", "cevil pozo", "banda del río salí", "s. m. de tucumán"
    ],
    "el talar": [
      "la florida", "colonia 4 (luisiana)", "alderetes", "banda del río salí", "s. m. de tucumán"
    ],
    "fortín": [
      "w. posse", "el paraíso", "alderetes", "el talar", "la florida", "banda del río salí", "s. m. de tucumán"
    ],
    "cevil pozo": [
      "los ralos", "las cejas", "w. posse", "el paraíso", "la florida", "colonia 4 (luisiana)", "fortín"
    ],
    "fila de la orilla": [
      "w. posse", "el paraíso", "la florida", "cevil pozo", "banda del río salí", "s. m. de tucumán"
    ],
    "fila del medio": [
      "w. posse", "cevil pozo", "banda del río salí", "s. m. de tucumán"
    ],
    "las cejas": [
      "las cejas", "los ralos", "colonia media agua", "esquina llona", "cevil pozo", 
      "banda del río salí", "s. m. de tucumán"
    ],
    "7 de abril": [
      "banda del río salí", "s. m. de tucumán", "cevil pozo", "colonia media agua", "esquina llona"
    ],
    "s. m. de tucumán": [
      "la florida", "w. posse", "los ralos", "cevil pozo", "el paraíso", "alderetes", 
      "el talar", "banda del río salí", "fila del medio", "fila de la orilla", "fortín", 
      "colonia 4 (luisiana)", "7 de abril", "las cejas", "la marta", "finca mayo"
    ],
    "alderetes": [
      "la florida", "el talar", "fortín", "colonia 4 (luisiana)", "la marta", "finca mayo"
    ],
    "banda del río salí": [
      "la florida", "el paraíso", "w. posse", "fortín", "alderetes", "colonia 4 (luisiana)"
    ],
    "alabama": [
      "los ralos", "cevil pozo", "finca mayo", "banda del río salí", "s. m. de tucumán"
    ],
    "finca mayo": [
      "los ralos", "cevil pozo", "la florida", "el talar", "alderetes", "colonia media agua", 
      "esquina llona", "banda del río salí", "s. m. de tucumán"
    ],
    "colonia media agua": [
      "los ralos", "cevil pozo", "finca mayo", "banda del río salí", "s. m. de tucumán", 
      "la florida", "fila del medio", "fila de la orilla", "w. posse", "el paraíso", 
      "las cejas", "7 de abril"
    ],
    "esquina llona": [
      "los ralos", "cevil pozo", "finca mayo", "banda del río salí", "s. m. de tucumán", 
      "la florida", "fortín", "colonia 4 (luisiana)", "fila de la orilla", "w. posse", 
      "el paraíso", "las cejas", "7 de abril"
    ],
    "la marta": [ "alderetes", "s. m. de tucumán", "finca mayo" , "banda del río salí" , "cevil pozo" , "los ralos", "colonia media agua", "esquina llona", "la florida", "colonia 4 (luisiana)","alderetes", "el talar" ],
  };

  const [arrayDestinos, setArrayDestinos] = useState([]);

  useEffect(() => {
    if (destinosMap[localidad]) {
      setArrayDestinos(destinosMap[localidad]);
    }
  }, [localidad]);

  return { arrayDestinos };
};