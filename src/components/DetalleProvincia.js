import React, { Component } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import provinciasJson from '../datos/lista_provincias.json';
import MenuDeOpciones from './MenuDeOpciones';

class DetalleProvincia extends Component {

    constructor(props) {
        super(props);
        this.state={provinciasJson}
    }
    
    render() {
        const id=this.props.match.params.id
        const provinciaEncontrada=this.state.provinciasJson.filter((provincia)=>provincia.abreviatura===id);
        let tienePuerto="";
        provinciaEncontrada[0].tienePuerto==="Y"?(tienePuerto="Si"):(tienePuerto="No")
        return (
           <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               <Container style={{width:"300px", marginTop:"20px"}}>
                   <Row>
                       <Col><b>Provincia: </b></Col>
                       <Col>{provinciaEncontrada[0].provincia}</Col>
                   </Row>
                   <Row>
                        <Col><b>Abreviatura:</b></Col>
                       <Col>{provinciaEncontrada[0].abreviatura}</Col>
                   </Row>
                   <Row>
                        <Col><b>Capital:</b></Col>
                       <Col>{provinciaEncontrada[0].capital}</Col>
                   </Row>
                   <Row>
                        <Col><b>Bandera:</b></Col>
                       <Col><img src={"/images/"+provinciaEncontrada[0].bandera}></img></Col>
                   </Row>
                   <Row>
                        <Col><b>Fecha Autonomía:</b></Col>
                       <Col>{provinciaEncontrada[0].fechaAutonomia}</Col>
                   </Row>
                   <Row>
                        <Col><b>Población:</b></Col>
                       <Col>{provinciaEncontrada[0].poblacion}</Col>
                   </Row>
                   <Row>
                        <Col><b>Superficie:</b></Col>
                       <Col>{provinciaEncontrada[0].provincia}</Col>
                   </Row>
                   <Row>
                        <Col><b>N° Departamentos:</b></Col>
                       <Col>{provinciaEncontrada[0].nroDepartamentos}</Col>
                   </Row>
                   <Row>
                        <Col><b>Tiene Puerto</b></Col>
                       <Col>{tienePuerto}</Col>
                   </Row>
                   <Nav.Link href="javascript: history.go(-1)"><h3>Volver</h3></Nav.Link>
               </Container>
           </React.Fragment>
        );
    }
}

export default DetalleProvincia;