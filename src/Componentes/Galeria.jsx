import React from 'react';
import { Fotogaleria } from '../Minicomponentes/Fotogaleria';


export const Galeria = () => {

    const arrayUrlsGalery = [
        {
            url : 'https://img.freepik.com/foto-gratis/barra-desinfectante-mujer-tiro-medio_23-2148989588.jpg?semt=ais_siglip'
        },
        {
            url : 'https://img.freepik.com/foto-gratis/mujer-cabello-rizado-viajando-bus_23-2148753448.jpg?semt=ais_siglip'
        },
        {
            url : 'https://img.freepik.com/foto-gratis/cerca-pasajero-autobus_23-2148989568.jpg?semt=ais_siglip'
        },
        {
            url : 'https://img.freepik.com/foto-gratis/interior-autobus-urbano-rieles-sujecion-amarillos_181624-26096.jpg?semt=ais_siglip'
        },
        {
            url : 'https://img.freepik.com/foto-gratis/tarjeta-explotacion-mujer-cerca_23-2148989575.jpg?semt=ais_siglip'
        },
        {
            url : 'https://img.freepik.com/foto-gratis/interior-transporte-publico-autobuses_53876-63446.jpg?semt=ais_siglip'
        },
        {
            "url" : 'https://img.freepik.com/foto-gratis/mujer-vista-lateral-esperando-autobus_23-2148753441.jpg?semt=ais_siglip'
        }
    ]

  return (
    <div className='galeria-bg py-24 px-8 sm:px-12'>
        <div className="max-w-7xl my-0 mx-auto flex flex-col gap-12">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f89fc] text-center'>Galeria</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1'>
                {arrayUrlsGalery.map( (element,index) => (
                    <Fotogaleria url={element.url} index={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}
