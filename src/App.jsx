import './App.css'
import { Header } from './Componentes/Header'
import { Front } from './Componentes/Front'
import { Nosotros } from './Componentes/Nosotros'
import { Nosotros2 } from './Componentes/Nosotros2'
import { Infoconsultas } from './Componentes/Infoconsultas'
import { Galeria } from './Componentes/Galeria'
import { Contacto } from './Componentes/Contacto'
import { useState } from 'react'


function App() {

  const [url, setUrl] = useState(null);
  const [isClick, setIsClick] = useState(false)

  const recibirUrl = img => {
    setUrl(img);
    setIsClick(true)
  }


  return (
   <div className="relative">
       <Header />
       <Front/>
      <Nosotros2 />
      <Infoconsultas/>
      <Nosotros/>
      <Galeria url={recibirUrl}/>
      <Contacto />
      
   </div>
     
  
  )
}

export default App
