
import './assets/css/App.css';
import Switch from 'react-bootstrap/esm/Switch';
import GrillaAlumnos from './components/GrillaAlumnos';
import DetalleAlumno from './components/DetalleAlumno';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GrillaAlumnos}></Route>
      <Route exact path="/legajo/:busqueda" component={GrillaAlumnos}></Route>
      <Route exact path="/nombre/:busqueda" component={GrillaAlumnos}></Route>
      <Route exact path="/detalle/:id" component={DetalleAlumno}></Route>
    </Switch>
  );
}

export default App;
