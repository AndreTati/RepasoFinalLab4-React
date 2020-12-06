import React, { Component } from 'react';
import MenuDeOpciones from './MenuDeOpciones';
import autosJson from '../datos/autos.json';
import Auto from './Auto';
import { Container, Row } from 'react-bootstrap';

class NuestrosAutos extends Component {

    constructor(props) {
        super(props);
        this.state={autosJson}
    }
    
    render() {
        let parametro="";
        this.props.match.params.palabra?(parametro=this.props.match.params.palabra):(parametro="");
        const autos=this.state.autosJson.map((auto, i)=>{
            if(auto.marca.toLowerCase().includes(parametro.toLowerCase()) || auto.modelo.toLowerCase().includes(parametro.toLowerCase()) || auto.anio.toLowerCase().includes(parametro.toLowerCase())){
                const autoId=auto.imagen.replace(".jpg", "");
                return(
                    <Auto key={autoId} imagen={auto.imagen} marca={auto.marca} modelo={auto.modelo} anio={auto.anio} precio={auto.precio} ></Auto>
                )
            }else{
                return null;
            }
        });
        return (
           <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               <br></br>
               <h1 className="titulo"><b>A TODO MOTOR AUTOS</b></h1>
               <p className="parrafo">Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí ofertas en Efectivo de
                    concesionarios registrados. ¡Súper!
                </p>
                <p className="destacado">Destacados</p>
                <Container>
                    <Row>
                        {autos}
                    </Row>
                </Container>
           </React.Fragment>
        );
    }
}

export default NuestrosAutos;