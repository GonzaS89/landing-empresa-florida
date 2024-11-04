import './App.css'
import { Header } from './Componentes/Header'
import { Front } from './Componentes/Front'
import { Nosotros } from './Componentes/Nosotros'
import { Nosotros2 } from './Componentes/Nosotros2'
import { Infoconsultas } from './Componentes/Infoconsultas'
import { Galeria } from './Componentes/Galeria'
import { Contacto } from './Componentes/Contacto'
import { Modalfoto } from './Componentes/Modalfoto'
import { useState } from 'react'
// import { Prueba } from './Componentes/Prueba'


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
       <Nosotros/>
      <Nosotros2 />
      <Infoconsultas/>
      <Galeria url={recibirUrl}/>
      <Modalfoto img = {url} click = {isClick}/>
      {/* <Prueba/> */}
      <Contacto />
      
   </div>
     
  
  )
}

export default App
