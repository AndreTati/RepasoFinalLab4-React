import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import articulosJson from '../datos/articulos.json';
import { Col, Container, Row } from 'react-bootstrap';

class DetalleArticulo extends Component {

    constructor(props) {
        super(props);
        this.state={articulosJson}
    }
    
    render() {
        let suma=0;
        let promedio=0;
        const idArticulo=this.props.match.params.id;
        const articuloEncontrado=this.state.articulosJson.filter((articulo)=>articulo.foto.replace(".jpg", "")===idArticulo);
        console.log(articuloEncontrado)
        const precios=articuloEncontrado[0].preciosRelevados.map((precio, i)=>{
            suma+=precio;
            return(
            <li key={i}>{precio}</li>
        )});
        promedio=suma/articuloEncontrado[0].preciosRelevados.length;
        const esPromocion=(articuloEncontrado[0].esPromocion)?"Si":"No";
        const colorTitulo=(articuloEncontrado[0].esPromocion)?'promocion':'noPromocion';
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <Container>
                    <Row>
                        <Col xs lg="4"><img src={"/images/"+articuloEncontrado[0].foto}></img></Col>
                        <Col xs lg="5" className={colorTitulo} style={{marginTop:"120px"}}>{articuloEncontrado[0].articulo}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">Código:</Col>
                        <Col xs lg="5">{articuloEncontrado[0].codigo}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">Rubro:</Col>
                        <Col xs lg="5">{articuloEncontrado[0].rubro}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">Es Promoción:</Col>
                        <Col xs lg="5">{esPromocion}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">Fecha Vencimiento</Col>
                        <Col xs lg="5">{articuloEncontrado[0].fechaVencimiento}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4" className="alineacionVertical">Precio Relevados</Col>
                        <Col xs lg="5">{precios}</Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">Promedio Precios Relevados</Col>
                        <Col xs lg="5">{promedio}</Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default DetalleArticulo;