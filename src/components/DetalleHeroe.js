import React, { Component } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import heroesJson from '../datos/heroes.json';
import MenuDeOpciones from './MenuDeOpciones';

class DetalleHeroe extends Component {

   constructor(props) {
       super(props);
       this.state={heroesJson}
   }
   

    render() {
        const id=this.props.match.params.id;
        const heroeEncontrado=this.state.heroesJson.filter((heroe)=>heroe.id===id);
        const poderes=heroeEncontrado[0].poderes.map((poder, i)=>{return(
            <li key={i}>{poder}</li>
        )})
        return (
            <React.Fragment>
                <MenuDeOpciones></MenuDeOpciones>
                <Container style={{marginTop:"30px"}}>
                    <Row>
                        <Col style={{textAlign:"center"}}>
                            <img className="minAltoImg" src={"/images/"+heroeEncontrado[0].img}/>
                            <Nav.Link href="javascript: history.go(-1)"><h3>Volver</h3></Nav.Link>
                        </Col>
                        <Col>
                            <Row>
                                <Col><h3><b>Nombre:</b> {heroeEncontrado[0].nombre}</h3></Col>
                            </Row>
                            <Row>
                                <Col><h4><b>Creador:</b> {heroeEncontrado[0].casa}</h4></Col>
                            </Row>
                            <Row>
                                <Col><b>Poderes:</b> {poderes}</Col>
                            </Row>
                            <Row>
                                <Col><b>Biografía:</b> {heroeEncontrado[0].bio}</Col>
                            </Row>
                            <Row>
                                <Col><b>Aparición:</b> {heroeEncontrado[0].aparicion}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default DetalleHeroe;