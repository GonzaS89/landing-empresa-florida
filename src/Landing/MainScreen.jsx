import { Contacto } from './Contacto';
import { Front } from './Front';
import { Galeria } from './Galeria';
import {Header} from './Header';
import { Infoconsultas } from './Infoconsultas';
import { Nosotros } from './Nosotros';
import { Nosotros2 } from './Nosotros2';


export const MainScreen = () => {
  return (
    <div className="relative">
      <Header />
      <Front />
      <Nosotros/>
      <Nosotros2 />
      <Infoconsultas />
      <Galeria />
      <Contacto />
    </div>
  )
}
