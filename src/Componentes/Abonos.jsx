import React from 'react'
import { BotonAbonos } from '../Minicomponentes/BotonAbonos'

export const Nosotros = () => {
  return (
    <div className="bg-[#212121] py-12 px-16">
        <div className="max-w-7xl my-0 mx-auto flex flex-col lg:flex-row-reverse">
            <div className="flex flex-col gap-8 text-white text-left basis-1/2 px-12">
                <h3 className="uppercase -tracking-tighter text-lg font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus</h3>
                <h1 className="text-5xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex dolorem adipisci facilis. Assumenda voluptatum laboriosam enim, placeat quia maiores tenetur dolor consequatur, libero cum mollitia magni aperiam voluptatem ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae quibusdam consequatur, repellendus necessitatibus nulla blanditiis officiis voluptatem</p>
                <a href="">
                    <BotonAbonos />
                </a>
            </div>
            <span className="flex abonos-img basis-1/2"></span>
        </div>
    </div>
  )
}
