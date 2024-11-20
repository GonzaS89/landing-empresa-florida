import { Contacto } from './Contacto';
import { Front } from './Front';
import { Galeria } from './Galeria';
import {Header} from './Header';
import { Infoconsultas } from './Infoconsultas';
import { Nosotros } from './Nosotros';
import { Nosotros2 } from './Nosotros2';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from 'react-scroll';


export const MainScreen = () => {

  const {ref,inView} = useInView({
    threshold:.8,
    triggerOnce:false
  })

  return (
    <div className="relative" ref={ref}>
      <Header />
      <Front />
      <Nosotros/>
      <Nosotros2 />
      <Infoconsultas />
      <Galeria />
      <Contacto />
      <Link to="header">
    <motion.span 
        initial={{y:0}}
        animate={{y:'-15%', 
        transition:{duration:1, ease:'backInOut', repeat:Infinity}
      }}
        className={`fixed right-0 bottom-0 w-16 h-16 bg-white mr-12 mb-12 flex justify-center  items-center rounded-md cursor-pointer opacity-${inView ? 1 : 0}`}>
          <MdKeyboardDoubleArrowUp className="text-4xl font-light" />
        </motion.span>
    </Link>
    </div>
  )
}
