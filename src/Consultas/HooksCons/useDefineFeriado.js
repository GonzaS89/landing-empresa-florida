import  { useEffect, useState } from 'react'

export const useDefineFeriado = (fecha,mes) => {
    
    useEffect(() => {
          if(mes === 11) {
            if(fecha === 24 || fecha === 25){
              setFeriado(true)
            }
          }
          else if (mes === 0 && fecha === 1){
            setFeriado(true)
          }else{setFeriado(false)}
    },[fecha,mes])

    const [feriado,setFeriado] = useState(false);

  return {feriado}
}
