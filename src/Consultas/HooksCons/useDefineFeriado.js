import  { useEffect, useState } from 'react'

export const useDefineFeriado = (fecha,mes) => {
    
    useEffect(() => {
        setFeriado(mes === 11 && fecha === 25  || mes === 0 && fecha === 1 ? true : false)
    },[fecha,mes])

    const [feriado,setFeriado] = useState(false);

  return {feriado}
}
