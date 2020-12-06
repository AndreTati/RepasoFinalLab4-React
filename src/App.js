
import './assets/css/App.css';
import { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import NuestrosAutos from './components/NuestrosAutos';
import Contacto from './components/Contacto';
import DetalleAuto from './components/DetalleAuto';

class App extends Component {
 render(){
  return (
     <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Route exact path="/nuestros-autos" component={NuestrosAutos} ></Route>
      <Route exact path="/nuestros-autos/:palabra" component={NuestrosAutos} ></Route>
      <Route exact path="/contacto" component={Contacto}></Route>
      <Route exact path="/detalle/:id" component={DetalleAuto}></Route>
     </Switch>
  );
 }
}

export default App;
