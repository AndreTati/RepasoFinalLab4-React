
import { Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import Detalle from './components/Detalle';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:parametro" component={Home}></Route>
      <Route exact path="/detalle/:codePais" component={Detalle}></Route>
    </Switch>
  );
}

export default App;
