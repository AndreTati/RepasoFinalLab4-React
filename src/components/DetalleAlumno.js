import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MenuDeOpciones from './MenuDeOpciones';
import alumnosJson from '../datos/alumnos.json';

class DetalleAlumno extends Component {

    constructor(props) {
        super(props);
        this.state={alumnosJson}
    }
    
    render() {
        const idAl=this.props.match.params.id;
        const alumnoEncontrado=this.state.alumnosJson.filter((alumno)=>alumno.foto.replace(".jpg", "")===idAl);
        let nombreColor=(alumnoEncontrado[0].estaActivo)?'activo':'noActivo'   
        let activo=alumnoEncontrado[0].estaActivo?("Si"):("No");
        let suma=0;
        let promedio=0;
        const notas=alumnoEncontrado[0].notas.map((nota, i)=>{
            suma+=nota;
            return(
            <li key={i}>{nota}</li>
        )})
        promedio=suma/alumnoEncontrado[0].notas.length;
        return (
            <React.Fragment>
                <MenuDeOpciones></MenuDeOpciones>
                <Container>
                    <Row>
                        <Col xs lg="3" className="alineacionVertical" style={{textAlign:"center"}}>
                            <img src={"/images/"+alumnoEncontrado[0].foto}></img>
                        </Col>
                        <Col xs lg="4" className={nombreColor} style={{textAlign:"center", marginTop:"110px"}}>
                            {alumnoEncontrado[0].alumno}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            Legajo:
                        </Col>
                        <Col xs lg="4"> 
                            {alumnoEncontrado[0].legajo}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            Carrera:
                        </Col>
                        <Col xs lg="4">
                            {alumnoEncontrado[0].carrera}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            Esta Activo:
                        </Col>
                        <Col xs lg="4">
                            {activo}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            Fecha de Nacimiento
                        </Col>
                        <Col xs lg="4">
                            {alumnoEncontrado[0].fechaNacimiento}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3" className="alineacionVertical">
                            Notas
                        </Col>
                        <Col xs lg="4">
                            {notas}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            Promedio
                        </Col>
                        <Col xs lg="4">
                            {promedio}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default DetalleAlumno;