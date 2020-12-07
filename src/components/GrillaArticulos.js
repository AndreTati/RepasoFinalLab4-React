import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import articulosJson from '../datos/articulos.json';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';

class GrillaArticulos extends Component {

    constructor(props) {
        super(props);
        this.state={articulosJson}
    }
    
    render() {
        let url=window.location.href;
        let parametro=this.props.match.params.busqueda;
        let suma=0;
        let promedio=0;
        const articulosGrilla=this.state.articulosJson.map((articulo, i)=>{
            if(url.includes("/codigo/")){
                if(articulo.codigo===parseInt(parametro)){
                    suma=0;
                    for(let precio of articulo.preciosRelevados){
                        suma+=precio;
                    }
                    promedio=suma/articulo.preciosRelevados.length;
                    return(
                        <tr key={i}>
                            <td>{articulo.articulo}</td>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.fechaVencimiento}</td>
                            <td>{promedio}</td>
                            <td><a href={`/detalle/${articulo.foto.replace(".jpg", "")}`}>VER DETALLE</a></td>
                        </tr>
                    )
                }else{
                    return null
                }
            }else if(url.includes("/denominacion/")){
                if(articulo.articulo.toLowerCase().includes(parametro.toLowerCase())){
                    suma=0;
                    for(let precio of articulo.preciosRelevados){
                        suma+=precio;
                    }
                    promedio=suma/articulo.preciosRelevados.length;
                    return(
                        <tr key={i}>
                            <td>{articulo.articulo}</td>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.fechaVencimiento}</td>
                            <td>{promedio}</td>
                            <td><a href={`/detalle/${articulo.foto.replace(".jpg", "")}`}>VER DETALLE</a></td>
                        </tr>
                    )
                }else{
                    return null
                }
            }else{
                suma=0;
                for(let precio of articulo.preciosRelevados){
                    suma+=precio;
                }
                promedio=suma/articulo.preciosRelevados.length;
                return(
                    <tr key={i}>
                        <td>{articulo.articulo}</td>
                        <td>{articulo.codigo}</td>
                        <td>{articulo.fechaVencimiento}</td>
                        <td>{promedio}</td>
                        <td><a href={`/detalle/${articulo.foto.replace(".jpg", "")}`}>VER DETALLE</a></td>
                    </tr>
                )
            }
        })
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <Container style={{width:"90%"}}>
                    <Table striped bordered hover style={{marginTop:"30px"}}>
                        <thead>
                            <tr>
                            <th>Artículo</th>
                            <th>Código</th>
                            <th>Fecha Vencimiento</th>
                            <th>Promedio Precio</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulosGrilla}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        );
    }
}

export default GrillaArticulos;