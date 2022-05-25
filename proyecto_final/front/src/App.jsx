import Inicio from "./componentes/inicio";
import Registro from "./componentes/registro/registro";
import Login from "./componentes/login/login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export function App() {
  return (   
      <div className = "App">
        <Router>
          <Routes>
            <Route path = "/inicio" element={ <Inicio/> }/>
            <Route path = "/registro" element={ <Registro/> }/>
            <Route path = "/login" element={ <Login/> }/>
          </Routes>
        </Router>
      </div>
  );
}
