import React from "react";
import { Carousel } from "flowbite-react";
import { Descripcion } from "../Minicomponentes/Descripcion";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

export const Nosotros = () => {
  return (
    <div className="px-8 pt-8 bg-rojofuerte">
      <div className="max-w-7xl my-o mx-auto flex flex-col items-center gap-12">
      <h1 className="text-white text-4xl md:text-4xl xl:text-5xl font-bold">Institución</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
        <div className="flex items-center relative w-full h-[450px] md:h-[550px] lg:h-[450px] xl:h-[550px] lg:w-1/2 xl:w-5/12">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-azulclaro flex rounded-2xl"></div>
            <div className="z-30 h-5/6 lg:h-full bg-white w-5/6 my-0 mx-auto rounded-2xl flex flex-col ">
            <Carousel slide={false} leftControl={
              <button
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 filter opacity-25"
            ><FaHandPointLeft className='w-8 h-8'/></button>
            }
            rightControl={
              <button
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 filter opacity-25"
            ><FaHandPointRight className='w-8 h-8'/></button>
            }>
              <Descripcion titulo={'Nuestra historia'}/>
              <Descripcion titulo={'Nuestra historia'}/>
              <Descripcion titulo={'Nuestra historia'}/>
            </Carousel>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-azulclaro rounded-2xl"></div>
        </div>
        <div className="w-1/2 xl:w-7/12 rounded-2xl md:h-[500px] xl:h-[550px] carousel-imgs">
        {/* <img src="https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730436494/x78krvtel9ferbilid0z.jpg" alt="" className="h-5/6"/>
        <img src="" alt="" /> */}
        </div>
        </div>
      </div>
    </div>
  );
};
