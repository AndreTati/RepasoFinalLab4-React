import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import signosJson from '../datos/zodiaco.json';
import Elemento from './Elemento';
import { Col, Container, Row } from 'react-bootstrap';

class AgrupadosPorElemento extends Component {

    constructor(props) {
        super(props);
        this.state={signosJson}
    }
    
    render() {
        const fuego=this.state.signosJson.map((signo, i)=>{
            if(signo.elemento==="Fuego"){
                return(
                    <Col xs lg="4">
                        <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                    </Col>
                )
            }
        })
        const agua=this.state.signosJson.map((signo, i)=>{
            if(signo.elemento==="Agua"){
                return(
                    <Col xs lg="4">
                        <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                    </Col>
                )
            }
        })
        const aire=this.state.signosJson.map((signo, i)=>{
            if(signo.elemento==="Aire"){
                return(
                    <Col xs lg="4">
                        <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                    </Col>
                )
            }
        })
        const tierra=this.state.signosJson.map((signo, i)=>{
            if(signo.elemento==="Tierra"){
                return(
                    <Col xs lg="4">
                        <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                    </Col>
                )
            }
        })
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <Container>
                    <Row className="bordesFila" style={{borderTop:"1px solid black"}}>
                        <Col className="bordes" >
                            <p style={{marginTop:"110px"}}>Fuego</p>
                        </Col>
                        <Col className="bordes">
                            <Row>
                                {fuego} 
                            </Row>
                        </Col>
                    </Row>
                    <Row className="bordesFila">
                        <Col className="bordes" >
                            <p style={{marginTop:"110px"}}>Tierra</p>
                        </Col>
                        <Col className="bordes">
                            <Row>
                                {tierra} 
                            </Row>
                        </Col>
                    </Row>
                    <Row className="bordesFila">
                        <Col className="bordes" >
                            <p style={{marginTop:"110px"}}>Aire</p>
                        </Col>
                        <Col className="bordes">
                            <Row>
                                {aire} 
                            </Row>
                        </Col>
                    </Row>
                    <Row className="bordesFila" style={{borderBottom:"1px solid black"}}>
                        <Col className="bordes" >
                            <p style={{marginTop:"110px"}}>Agua</p>
                        </Col>
                        <Col className="bordes">
                            <Row>
                                {agua} 
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <br></br>
            </React.Fragment>
        );
    }
}

export default AgrupadosPorElemento;