import { useState } from "react";
import { Contacto } from "./Contacto";
import { Front } from "./Front";
import { Galeria } from "./Galeria";
import { Header } from "./Header";
import { Infoconsultas } from "./Infoconsultas";
import { Nosotros } from "./Nosotros";
import { Nosotros2 } from "./Nosotros2";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import { Footer } from "./Footer";


export const MainScreen = () => {

  const [isVisible, setIsVisible] = useState()

  return (
    <div className="relative overflow-hidden">
      <Header />
      <Front />
      <Nosotros />
      <Nosotros2 />
      <Infoconsultas />
      <Galeria />
      <Contacto isVisible = {setIsVisible}/>
      <Link to="header">
        <motion.span
          initial={{ x: '200px' }}
          animate={{
            x: isVisible ? 0 : '200px',
            transition: { duration: .5, ease: "backInOut"},
          }}
          className='fixed right-0 bottom-0 w-16 h-16 mr-6 mb-12 flex justify-center items-center rounded-md cursor-pointer bg-gray-300'
        >
          <MdKeyboardDoubleArrowUp className="text-4xl font-light" />
        </motion.span>
      </Link>
      <Footer />
    </div>
  );
};
