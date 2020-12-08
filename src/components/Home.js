import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import signosJson from '../datos/zodiaco.json';
import Elemento from './Elemento';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={signosJson}
    }
    
    render() {
        const parametro=this.props.match.params.mes;
        let url=window.location.href;
        const datos=this.state.signosJson.map((signo, i)=>{
            if(url.includes("/buscar/")){
                for(let mes of signo.meses){
                    if(mes===parseInt(parametro)){
                        return(
                            <Col xs lg="3">
                                <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                            </Col>
                        )
                    }
                }
            }else{
                return(
                    <Col xs lg="3">
                        <Elemento key={i} imagen={signo.imagen} signo={signo.signo} id={signo.id}></Elemento>
                    </Col>
                )
            }
        })

        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <Container>
                    <Row>
                        {datos}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;