import React from "react";
import { Infocontacto } from "../Minicomponentes/Infocontacto";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";


export const Contacto = ({isVisible}) => {


const {ref, inView} = useInView({
  threshold:.3,
  triggerOnce:false
})

isVisible(inView)

  return (
    <Element name="contacto">
      <div className="bg-slate-900 relative contacto-bg py-12 px-12" ref={ref}>
       <div className="flex flex-col-reverse lg:flex-row max-w-6xl my-0 mx-auto">
       <iframe className="lg:basis-1/2 h-[500px] lg:h-auto" src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1732920529864!5m2!1ses!2sar!6m8!1m7!1sx9ZAvKR0laoB600teuOnyA!2m2!1d-26.83316322866028!2d-65.17931912005217!3f57.61311710782474!4f-7.054542274287783!5f0.7820865974627469" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div className="p-12 px-12 flex flex-col gap-6 basis-1/2">
       <h1 className="uppercase text-white text-4xl font-bold text-center">Contactános</h1>
       <div className=" flex flex-col gap-8 sm:items-center lg:flex-row lg:items-around">
          <div className=" text-white flex flex-col justify-around items-center gap-4 lg:gap-4 basis-2/3 px-4 py-4 lg:pt-2 lg:pb-0">
            <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center  lg:justify-start gap-12 md:py-8 lg:py-2 w-full h-full">
              <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-8 lg:gap-2 xl:gap-4">
                <Infocontacto
                  refe={"dirección"}
                  titulo={"encontrános en"}
                  contenido={"Amadeo Jacques 1186 - S.M. de Tucumán"}
                />
                <Infocontacto
                  refe={"horario"}
                  titulo={"horarios"}
                  contenido={"Lunes-Viernes: 08:00 a 15:00 hrs"}
                />
                <Infocontacto
                  refe={"teléfono"}
                  titulo={"contactanos al"}
                  contenido={"(0381) - 152605700"}
                />
                <Infocontacto
                  refe={"email"}
                  titulo={"envíanos un mail"}
                  contenido={"empresafloridatucuman@gmail.com"}
                />
                <div></div>
              </div>
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <h2 className="md:text-xl xl:text-xl uppercase text-gray-900">
                  nuestras redes
                </h2>
                <div className="flex justify-center gap-4">
                  <a href="https://www.facebook.com/empresaflorida">
                    <FaFacebookF className="text-5xl lg:text-3xl transition-all duration-200 hover:text-blue-600 cursor-pointer" />
                  </a>
                  <a href="https://www.instagram.com/empresa_florida/?hl=es-la">
                    <FaInstagram className="text-5xl lg:text-3xl transition-all duration-200 hover:text-fuchsia-600 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
        <div>
        </div>
       </div>
      </div>
    </Element>
  );
};
