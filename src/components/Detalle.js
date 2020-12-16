import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state=({
            pais:[],
        });
    }

    componentDidMount(){
        this.getPaisXID();
    }
    
    getPaisXID(){
        const parametroID=this.props.match.params.codePais;
        fetch('https://restcountries.eu/rest/v2/alpha/'+parametroID)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({pais:responseJson})
        })
    }

    render() {
        const pais=this.state.pais;
        if(Object.keys(pais).length===0){
            return("");
        }
        const zonasHorarias=pais.timezones.map((zh, i)=>{return(
            <li key={i}>{zh}</li>
        )});
        const idiomas=pais.languages.map((idioma, i)=>{return(
            <li key={i}>{idioma.name}</li>
        )})
        const monedas=pais.currencies.map((moneda,i)=>{return(
            <span key={i}>{moneda.code}-{moneda.name}-{moneda.symbol}</span>
        )})
        return (
           <React.Fragment>
               <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
               <Container style={{marginTop:"20px"}}>
                   <Row>
                       <Col xs lg="4">
                        <span style={{color:"green", fontSize:"24px"}}>PAIS: </span>
                        <span style={{color:"blue", fontSize:"24px"}}>{pais.name}</span>
                       </Col>
                   </Row>
                   <Row>
                        <Col xs lg="4">
                        <span style={{fontWeight:"bold"}}>Capital: </span>
                        <span>{pais.capital}</span>
                        </Col>
                        <Col xs lg="4">
                        <span style={{fontWeight:"bold"}}>Región: </span>
                        <span>{pais.region}</span>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs lg="4">
                        <span style={{fontWeight:"bold"}}>Subregión: </span>
                        <span>{pais.subregion}</span>
                        </Col>
                        <Col xs lg="4">
                        <span style={{fontWeight:"bold"}}>Población: </span>
                        <span>{pais.population} habitantes</span>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs lg="4">
                        <span style={{fontWeight:"bold"}}>Superficie: </span>
                        <span>{pais.area} Km2</span>
                        </Col>
                        <Col xs lg="4">
                            <Row>
                                <Col xs lg="4">
                                <span style={{fontWeight:"bold"}}>Monedas: </span>
                                </Col>
                                <Col xs lg="8">{monedas}</Col>
                            </Row>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs lg="4">
                            <Row>
                                <Col xs lg="5">
                                <span style={{fontWeight:"bold"}}>Zonas Horarias: </span>
                                </Col>
                                <Col xs lg="5">{zonasHorarias}</Col>
                            </Row>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs lg="4">
                            <Row>
                                <Col xs lg="4">
                                <span style={{fontWeight:"bold"}}>Idiomas: </span>
                                </Col>
                                <Col xs lg="4">{idiomas}</Col>
                            </Row>
                        </Col>
                   </Row>
               </Container>
           </React.Fragment>
        );
    }
}

export default Detalle;