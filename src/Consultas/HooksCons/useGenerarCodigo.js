
import { useState, useEffect } from "react";
import {
    codigo06,
    codigo08,
    codigo10,
    codigo11,
    codigo12,
    codigo13,
    codigo14,
    codigo15,
    codigo16,
    codigo18,
    codigo20,
    codigo21,
    codigo22,
    codigo24,
    codigo26,
    codigo27,
    codigo30,
    codigo34,
    codigo44
} from "../Data/tarifas";

export const useGenerarCodigo = (origen, destino, via) => {
    const [codigo, setCodigo] = useState();
  
    useEffect(() => {
      const destinos = {
        's. m. de tucumán': {
          'banda del río salí': codigo06,
          'cevil pozo': codigo08,
          'alderetes': codigo08,
          'colonia media agua': codigo10,
          'esquina llona': codigo12,
          'fila del medio': codigo12,
          'fila de la orilla': codigo12,
          'el talar': codigo13,
          'cruz alta': codigo15,
          'el paraíso': codigo18,
          'los ralos': codigo21,
          'la marta': codigo27,
          'las cejas': codigo34,
          '7 de abril': codigo44
        },
        'banda del río salí': {
          's. m. de tucumán': codigo06,
          'colonia media agua': codigo06,
          'fila de la orilla': codigo06,
          'fila del medio': codigo06,
          'w. posse': codigo08,
          'el paraíso': codigo10,
          'los ralos': codigo16,
          'finca mayo': codigo21,
          'la marta': codigo22,
          'las cejas': codigo30,
          '7 de abril': codigo44
        },
        'cevil pozo': {
          'colonia media agua': codigo06,
          'esquina llona': codigo06,
          'fila del medio': codigo06,
          'fila de la orilla': codigo06,
          'cevil pozo': codigo06,
          'w. posse': codigo06,
          's. m. de tucumán': codigo08,
          'el paraíso': codigo10,
          'la florida': codigo13,
          'fortin': codigo13,
          'colonia 4 (luisiana)': codigo13,
          'los ralos': codigo14,
          'finca mayo': codigo21,
          'la marta': codigo22,
          'las cejas': codigo30,
          '7 de abril': codigo44
        },
        'colonia media agua': {
          'banda del río salí': codigo06,
          'cevil pozo': codigo06,
          'w. posse': codigo06,
          'cruz alta': codigo06,
          'el paraíso': codigo08,
          's. m. de tucumán': codigo10,
          'la florida': codigo11,
          'colonia 4 (luisiana)': codigo11,
          'fortin': codigo11,
          'los ralos': codigo12,
          'finca mayo': codigo20,
          'la marta': codigo21,
          'las cejas': codigo30,
          '7 de abril': codigo44
        },
        'la florida': {
          'la florida': codigo06,
          'fortín': codigo06,
          'colonia 4 (luisiana)': codigo06,
          'el paraíso': codigo06,
          'w. posse': codigo06,
          'fila de la orilla': codigo08,
          'esquina llona': codigo08,
          'alderetes': codigo08,
          'el talar': codigo08,
          'colonia media agua': codigo11,
          'cevil pozo': codigo13,
        },
        'el paraíso': {
          'la florida': codigo06,
          'colonia 4 (luisiana)': codigo06,
          'fortín': codigo06,
          'fila de la orilla': codigo06,
          'w. posse': codigo06,
          'colonia media agua': codigo08,
          'cevil pozo': codigo10,
          'banda del río salí': codigo11,
          's. m. de tucumán': codigo21
        },
        'alderetes': {
          'banda del río salí': codigo06,
          'el talar': codigo06,
          's. m. de tucumán': codigo08,
          'la florida': codigo08,
          'fortín': codigo08,
          'colonia 4 (luisiana)': codigo08,
          'finca mayo': codigo20,
          'la marta': codigo21
        },
        'el talar': {
          'la florida': codigo06,
          'alderetes': codigo06,
          'banda del río salí': codigo06,
          's. m. de tucumán': codigo13,
          'finca mayo': codigo16,
          'alabama': codigo16
        },
        'los ralos': {
          'finca mayo': codigo08,
          'cruz alta': codigo10,
          'esquina llona': codigo12,
          'colonia media agua': codigo12,
          'la marta': codigo12,
          'cevil pozo': codigo14,
          'banda del río salí': codigo16,
          's. m. de tucumán': codigo21,
          'las cejas': codigo26,
          '7 de abril': codigo44
        },
        'finca mayo': {
          'finca mayo': codigo06,
          'alabama': codigo06,
          'la marta': codigo06,
          'los ralos': codigo08,
          'la florida': codigo10,
          'fortín': codigo10,
          'el talar': codigo16,
          'alderetes': codigo20,
          'colonia media agua': codigo20,
          'esquina llona': codigo20,
          'banda del río salí': codigo21,
          'cevil pozo': codigo21,
          's. m. de tucumán': codigo24
        },
        'cruz alta': {
          'cevil pozo': codigo06,
          'colonia media agua': codigo06,
          'banda del río salí': codigo08,
          'los ralos': codigo10,
          's. m. de tucumán': codigo15
        },
        'las cejas': {
          'los ralos': codigo24,
          'esquina llona': codigo27,
          'colonia media agua': codigo30,
          'cevil pozo': codigo30,
          'banda del río salí': codigo30,
          's. m. de tucumán': codigo34
        },
        '7 de abril': {
          'los ralos': codigo44,
          'esquina llona': codigo44,
          'colonia media agua': codigo44,
          'cevil pozo': codigo44,
          'banda del río salí': codigo44,
          's. m. de tucumán': codigo44
        }
      };
  
      // Lógica de asignación de código según origen, destino y via
      if (destinos[origen] && destinos[origen][destino]) {
        setCodigo(destinos[origen][destino]);
      } else if (via === 'w. posse') {
        setCodigo(codigo21); // O el valor correcto para este caso
      } else {
        setCodigo(codigo16); // O el valor por defecto
      }
  
    }, [origen, destino, via]);
  
    return { codigo };
  };