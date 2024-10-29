import React from 'react'

export const Consulta = (props) => {
  return (
    <div className='bg-[#F4F6FF]'>
        <div className='flex flex-col gap-6 px-8 py-6 font-semibold'>
            <h2 className='uppercase text-2xl font-bold'>{props.titulo}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit alias perspiciatis rem eum sequi dignissimos repellat tempora adipisci officia, vero, atque illo aliquam officiis sit harum tenetur laboriosam fugiat.</p>
            <button className='bg-[#10375C] text-white font-normal uppercase py-4 font-principal rounded-2xl'>{props.boton}</button>
        </div>
        <span className={`${props.img} flex`}></span>
    </div>
  )
}
