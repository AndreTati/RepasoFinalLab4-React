
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import './assets/css/App.css';
import AgrupadosPorElemento from './components/AgrupadosPorElemento';
import Detalle from './components/Detalle';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/buscar/:mes" component={Home}></Route>
      <Route exact path="/agrupados" component={AgrupadosPorElemento}></Route>
      <Route exact path="/detalle/:id" component={Detalle}></Route>
    </Switch>
  );
}

export default App;
