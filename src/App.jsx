import './App.css'
import { Header } from './Componentes/Header'
import { Front } from './Componentes/Front'
import { Nosotros } from './Componentes/Nosotros'
import { Servicios } from './Componentes/Servicios'
import { Consultas } from './Componentes/Consultas'


function App() {


  return (
   <div>
       <Header />
       <Front/>
       <Nosotros/>
       <Consultas/>
       {/* <Portada />
       <Nosotros/> */}
      
   </div>
     
  
  )
}

export default App
