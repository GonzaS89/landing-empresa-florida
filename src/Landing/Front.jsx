import React from "react";
import { Carousel } from "flowbite-react";
import { Portada } from "../Minicomponentes/Portada";

export const Front = () => {
  return (
    <div className="h-[600px] lg:h-[650px] xl:h-[850px]">
      <Carousel slideInterval={10000}>
        <Portada
          titulo={"70 años juntos a vos brindándote el mejor servicio"}
          contenido={
            "Desde hace 70 años, conectamos cada rincón del este tucumano, acompañándote en tus viajes con la misma dedicación y compromiso. Gracias por confiar en nosotros durante estas siete décadas, llevándote de forma segura y cómoda a tu destino"
          }
          urlimg={
            "https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730495713/a6cw6vbvjgedounmyxl0.jpg"
          }
        />
        <Portada
          titulo={
            "Mantenéte siempre informado con nuestra sección de consultas"
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
            "Tenemos recorrido por gran parte de la zona este de la provincia"
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
  );
};
