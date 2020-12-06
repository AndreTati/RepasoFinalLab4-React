
import './assets/css/App.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import ListaHeroes from './components/ListaHeroes';
import DetalleHeroe from './components/DetalleHeroe';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ListaHeroes}></Route>
      <Route exact path="/heroes-dc" component={ListaHeroes}></Route>
      <Route exact path="/heroes-marvel" component={ListaHeroes}></Route>
      <Route exact path="/buscar/:palabra" component={ListaHeroes}></Route>
      <Route exact path="/detalle/:id" component={DetalleHeroe}></Route>
    </Switch>
  );
}

export default App;
