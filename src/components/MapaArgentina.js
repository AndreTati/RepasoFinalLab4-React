import React, { Component } from 'react';
import MenuDeOpciones from './MenuDeOpciones';
/* import mapa from '../assets/images/argentina.png' */

class MapaArgentina extends Component {
    render() {
        return (
           <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               <h3 className="tituloMapa"><b>República Argentina</b></h3>
               <img src={"/images/argentina.png"}></img>
           </React.Fragment>
        );
    }
}

export default MapaArgentina;