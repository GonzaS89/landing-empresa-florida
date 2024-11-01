import React from "react";
import { Carousel } from "flowbite-react";
import { Descripcion } from "../Minicomponentes/Descripcion";
import { DescripcionImg } from "../Minicomponentes/DescripcionImg";

export const Nosotros = () => {
  return (
    <div className="px-8 sm:px-12 xl:px-0 pt-8 bg-rojofuerte">
      <div className="max-w-7xl my-o mx-auto">
        <div className="h-[800px] md:h-[600px]">
          <Carousel slideInterval={10000}>
            <div className="flex flex-col md:flex-row h-full">
              <Descripcion titulo={"Quienes somos"} refe={'blanco'}/>
              <DescripcionImg refe={'somos'}/>
            </div>
            <div className="flex flex-col md:flex-row h-full">
              <Descripcion titulo={"Nuestra historia"} refe={'rojo'}/>
              <DescripcionImg refe={'historia'}/>
            </div>
            <div className="flex flex-col md:flex-row h-full">
              <Descripcion titulo={'Nuestra misión'} refe={'azul'}/>
              <DescripcionImg refe={'mision'}/>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
