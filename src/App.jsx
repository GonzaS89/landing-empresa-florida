import './App.css'
import { Header } from './Componentes/Header'
import { Front } from './Componentes/Front'
import { Nosotros } from './Componentes/Nosotros'
import { Nosotros2 } from './Componentes/Nosotros2'
import { Infoconsultas } from './Componentes/Infoconsultas'
import { Galeria } from './Componentes/Galeria'
import { Contacto } from './Componentes/Contacto'
// import { Prueba } from './Componentes/Prueba'


function App() {


  return (
   <div>
       <Header />
       <Front/>
       <Nosotros/>
      <Nosotros2 />
      <Infoconsultas/>
      <Galeria />
      {/* <Prueba/> */}
      <Contacto />
      
   </div>
     
  
  )
}

export default App
