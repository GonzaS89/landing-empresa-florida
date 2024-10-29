import './App.css'
import { Header } from './Componentes/Header'
import { Nosotros } from './Componentes/Abonos'
import { Portada } from './Componentes/Horarios'
import { Front } from './Componentes/Front'
import { Institucion } from './Componentes/Institucion'

function App() {


  return (
   <div>
       <Header />
       <Front/>
       <Institucion/>
       <Portada />
       <Nosotros/>
      
   </div>
     
  
  )
}

export default App
