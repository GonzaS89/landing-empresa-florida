import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { MainScreen } from "./Landing/MainScreen";
import { Maincons } from "./Consultas/Screens/Maincons";


function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/consultas" element={<Maincons />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
