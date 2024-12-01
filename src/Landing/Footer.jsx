import React from 'react'

export const Footer = () => {

    const date = new Date();
    const año = date.getFullYear()

  return (
    <div className="bg-slate-800 py-12 w-full flex flex-col gap-4 md:flex-row items-center justify-around text-white">
        <h1 className='text-2xl uppercase font-bold'>Empresa Florida Srl - {año}</h1>
        <h2 className='text-2xl uppercase font-bold'>Desarrollo web : <strong>Gonzalo Sinhg</strong></h2>
    </div>
  )
}
