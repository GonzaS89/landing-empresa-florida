import React from "react";
import { Carousel } from "flowbite-react";
import { Portada } from "../Minicomponentes/Portada";

export const Front = () => {
  return (
    <div className="h-[600px] lg:h-[750px]">
      <Carousel slideInterval={7000}>
        <Portada
          titulo={"70 años juntos a vos brindándote el mejor servicio"}
          contenido={
            "Empresa Florida SRL comenzó a funcionar un 10 de noviembre de 1954. Su fundador fue Belarmino Fernandez Barrioso: Y nuestro comprimiso con nuestros usuarios sigue intacto como hace 70 años."
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
            "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
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
            "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
          }
          urlimg={
            "https://res.cloudinary.com/dwmw7ez8q/image/upload/v1730495716/rwo43n3rdxnlexsd8uu4.jpg"
          }
        />
      </Carousel>
    </div>
  );
};
