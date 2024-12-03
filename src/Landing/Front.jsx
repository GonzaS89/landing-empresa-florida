import React from "react";
import { Carousel } from "flowbite-react";
import { Portada } from "../Minicomponentes/Portada";
import { Element } from "react-scroll";

export const Front = () => {
  return (
    <Element name="front">
       <div className="h-[600px] lg:h-[650px] xl:h-[850px] mt-24">
      <Carousel slideInterval={10000}>
        <Portada
          titulo={"70 años trabajando para brindar el mejor servicio"}
          contenido={
            "Conectamos cada rincón del Este tucumano acompañándote en tus viajes, con la misma dedicación y compromiso de siempre. Gracias por confiar en nosotros durante estas siete décadas."
          }
          urlimg={
            "https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730495713/a6cw6vbvjgedounmyxl0.jpg"
          }
        />
        <Portada
          titulo={
            "Mantente siempre informado con nuestra sección de consultas"
          }
          contenido={
            "Facilitamos tus viajes con nuestro sistema de consulta de horarios, siempre actualizado y disponible para que puedas planificar tus trayectos de manera rápida y conveniente."
          }
          urlimg={
            "https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730496049/qstkvtqbbraecibdhemy.jpg"
          }
        />
        <Portada
          titulo={
            "Nuestro recorrido incluye gran parte de la zona este de la provincia"
          }
          contenido={
            "Conectamos distintas localidades del este tucumano, llevándote de forma cómoda y segura a cada destino. Nuestro servicio de transporte de pasajeros te acompaña en cada viaje, permitiéndote explorar y moverte por toda la región del este de Tucumán."
          }
          urlimg={
            "https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730495716/rwo43n3rdxnlexsd8uu4.jpg"
          }
        />
      </Carousel>
    </div>
    </Element>
   
  );
};
