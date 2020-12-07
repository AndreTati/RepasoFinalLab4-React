
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import './assets/css/App.css';
import DetalleArticulo from './components/DetalleArticulo';
import GrillaArticulos from './components/GrillaArticulos';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GrillaArticulos}></Route>
      <Route exact path="/codigo/:busqueda" component={GrillaArticulos}></Route>
      <Route exact path="/denominacion/:busqueda" component={GrillaArticulos}></Route>
      <Route exact path="/detalle/:id" component={DetalleArticulo}></Route>
    </Switch>
  );
}

export default App;
