import React, { Component } from 'react';
import {Col, Container, Nav, Row } from 'react-bootstrap';
import MenuDeOpciones from './MenuDeOpciones';
import autosJson from '../datos/autos.json';

class DetalleAuto extends Component {

    constructor(props) {
        super(props);
        this.state={autosJson}
    }
    
    render() {
        const parametroId=this.props.match.params.id;
        const autoEncontrado=this.state.autosJson.filter(auto=>auto.imagen.replace(".jpg","")===parametroId);
        const precio=(autoEncontrado[0].precio===0)?"Consultar":"$ "+autoEncontrado[0].precio
        return (
            <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               <Container style={{marginTop:'25px'}}>
                   <Row>
                       <Col>
                            <img className="minAltoImg" src={"/images/"+autoEncontrado[0].imagen.toLowerCase()} />
                            <Nav.Link href="javascript: history.go(-1)"><h3>Volver</h3></Nav.Link>
                       </Col>
                       <Col>
                       <Row>
                           <Col>
                           <h2>Marca: {autoEncontrado[0].marca}</h2>
                           </Col>
                        </Row>
                        <Row>
                           <Col>
                           <h3>Modelo: {autoEncontrado[0].modelo}</h3>
                           </Col>
                        </Row>
                        <Row>
                           <Col>
                           <h4>Año: {autoEncontrado[0].anio}</h4>
                           </Col>
                        </Row>
                        <Row>
                           <Col>
                           <h5>{precio}</h5>
                           </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p>Localidad: {autoEncontrado[0].localidad}</p>
                            </Col>
                        </Row>
                       </Col>
                   </Row>
               </Container>
           </React.Fragment>
        );
    }
}

export default DetalleAuto;