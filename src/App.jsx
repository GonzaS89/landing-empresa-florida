import './App.css'
import { Header } from './Componentes/Header'
import { Front } from './Componentes/Front'
import { Nosotros } from './Componentes/Nosotros'
import { Nosotros2 } from './Componentes/Nosotros2'
// import { Consultas } from './Componentes/Consultas'


function App() {


  return (
   <div>
       <Header />
       <Front/>
       <Nosotros/>
       {/* <Consultas/> */}
      <Nosotros2 />

        
      
   </div>
     
  
  )
}

export default App
