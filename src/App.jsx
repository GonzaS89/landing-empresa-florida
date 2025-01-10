import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import { MainScreen } from "./Landing/MainScreen";
import { Maincons } from "./Consultas/Screens/Maincons";
import { CotizacionAbonos } from "./Consultas/Screens/CotizacionAbonos";
import { Mainhorarios } from "./Consultas/Screens/Mainhorarios";
import Horarios from "./Consultas/Screens/Horarios";
import { useHora } from "./Consultas/HooksCons/useHora";



function App() {

  const [localidadOrigen, setLocalidadOrigen] = useState(null);
  const [localidadDestino, setLocalidadDestino] = useState(null);
  const [viajesIngresados, setViajesIngresados] = useState(null);
  const [tarifaElegida, setTarifaElegida] = useState(null);
  const [via, setVia] = useState(null);

  const [listaHorarios, setListaHorarios] = useState(null);
  const [horaAutoEnMins, setHoraAutoEnMins] = useState(null);
  const [horaManualEnMins, setHoraManualEnMins] = useState(null);
  const [codigoDeterminado, setCodigoDeterminado] = useState(null);
  const [hayDiaAuto, setHayDiaAuto] = useState(null);
  const [diaGrilla, setDiaGrilla] = useState(null);

  const recibirParametrosAbonos = (origen, destino, viajes, tarifa, via) => {
    setLocalidadOrigen(origen);
    setLocalidadDestino(destino);
    setViajesIngresados(viajes);
    setTarifaElegida(tarifa);
    setVia(via)
  }

  const recibirParametrosHorarios = (origen, destino, via, listahorarios, horaManualMin, horaAutoMin, diaAuto, diaManual) => {
    setLocalidadOrigen(origen);
    setLocalidadDestino(destino);
    setListaHorarios(listahorarios)
    setHoraManualEnMins(horaManualMin);
    setHoraAutoEnMins(horaAutoMin);
    setVia(via);
    diaAuto !== null && setHayDiaAuto(true);
    if (diaManual !== null) { setHayDiaAuto(false) }
    if (diaManual === 'lunesAViernes') { setDiaGrilla('lunes a viernes') }
    else if (diaManual === 'sabados') { setDiaGrilla('sábados') }
    else if (diaManual === 'domingos') { setDiaGrilla('domingos') }
    else if (diaManual === 'findeaño') { setDiaGrilla('fin de año') }
    else if (diaManual === 'añonuevo') { setDiaGrilla('año nuevo') }
  }

  const {fecha,mes} = useHora()

  useEffect(() => {
    if(fecha === 31 && mes === 11){setDiaGrilla('fin de año')}
  },[fecha,mes])

  return (
    <div className="App relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/cotizadordeabonos" element={<Maincons enviarParametrosAbonos={recibirParametrosAbonos}/>}></Route>
          <Route path="/cotizacion" element={<CotizacionAbonos origen={localidadOrigen} destino={localidadDestino} viajes={viajesIngresados} tarifa={tarifaElegida} via={via}/>}></Route>
          <Route path="/consultadehorarios" element={<Mainhorarios enviarParametrosHorarios={recibirParametrosHorarios}/>}></Route>
          <Route path='/horarios' element={<Horarios grillaDefinitiva={listaHorarios} origen={localidadOrigen} destino={localidadDestino} horaAuto={horaAutoEnMins} horaManual={horaManualEnMins} codigo={codigoDeterminado} diaAuto={hayDiaAuto} grilla={diaGrilla} via={via}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
