import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
let parametro="";
class Home extends Component {

    constructor(props) {
        super(props);
        this.state=({
            db:[],
        })
    }

    componentDidMount(){
        this.getPaises();
    }

    getPaises(){
        parametro=this.props.match.params.parametro;
        if(parametro!==undefined && parametro!=='null' && parametro!==""){
            fetch("https://restcountries.eu/rest/v2/regionalbloc/"+parametro)
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({db:responseJson});
            })
        }
    }
    
    render() {
        let datos="";
        let titulo="";
        let cabecera="";
        if(parametro==='null' || parametro===undefined || parametro===""){
            titulo=<h2>Seleccione una región del combo de opciones disponible en el menú</h2>
        }else{
            cabecera=<Row>
            <Col className="columnaCabecera">País</Col>
            <Col className="columnaCabecera">Capital</Col>
            <Col className="columnaCabecera">Subregión</Col>
            <Col className="columnaCabecera">Población</Col>
            <Col className="columnaCabecera">Superficie</Col>
            <Col className="columnaCabecera"></Col>
        </Row>
            datos=this.state.db.map((pais, i)=>{return(
                <Row key={i}>
                    <Col className="columna">{pais.name}</Col>
                    <Col className="columna">{pais.capital}</Col>
                    <Col className="columna">{pais.subregion}</Col>
                    <Col className="columna">{pais.population}</Col>
                    <Col className="columna">{pais.area}</Col>
                    <Col className="columna"><a href={`/detalle/${pais.alpha2Code}`}>DETALLE</a></Col>
                </Row>
            )})
        }

        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <Container style={{marginTop:"20px"}}>
                {titulo}
                {cabecera}
                {datos}
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;