import React, { Component } from 'react';
import MenuDeOpciones from './MenuDeOpciones';

class Contacto extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuDeOpciones></MenuDeOpciones>
                <h2 className="tituloContacto">¿Necesitas ayuda o tenes alguna consulta?</h2><br></br><br></br>
                <p className="parrafoContacto">Es importante que sepas que sólo somos un sitio web de clasificados. <b>No nos hagas consultas
                    respecto a información de los vehículos que se publican en el portal.</b> Éstas son responsabilidad
                    exclusiva de sus anunciantes, y debes contactarlos desde la ficha de cada vehículo.<br></br><br></br>
                    ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o sugerencias a
                    consultas@atodomotor.com.ar, te responderemos a la brevedad.
                </p>
            </React.Fragment>
        );
    }
}

export default Contacto;