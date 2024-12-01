import React from 'react'

export const Footer = () => {

    const date = new Date();
    const fecha = date.getDate()
    const año = date.getFullYear()

  return (
    <div className="bg-[eeeeeee] py-10 w-full flex items-center justify-center">
        <h1 className='text-2xl uppercase font-bold'>Empresa Florida Srl - {año}</h1>
    </div>
  )
}
