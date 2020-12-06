import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import MapaArgentina from './components/MapaArgentina';
import DetalleProvincia from './components/DetalleProvincia';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/provincias-puerto" component={Home}></Route>
        <Route exact path="/buscar/:valor" component={Home}></Route>
        <Route exact path="/mapa" component={MapaArgentina}></Route>
        <Route exact path="/detalle/:id" component={DetalleProvincia}></Route>
      </Switch>
    );
  }
}

export default App;
