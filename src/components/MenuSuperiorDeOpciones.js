import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import articulosJson from '../datos/articulos.json';
let codigo="";
let denominacion="";
class MenuSuperiorDeOpciones extends Component {

    constructor(props) {
        super(props);
        this.state={articulosJson}
        this.buscarCodigo=this.buscarCodigo.bind(this)
        this.buscarDenominacion=this.buscarDenominacion.bind(this)
    }

    codigoIngresado(e){
        codigo=e.target.value
    }

    denominacionIngresada(e){
        denominacion=e.target.value
    }

    buscarCodigo(){
        if(codigo===""){
            window.location.href="http://localhost:3000/"
        }else{
            window.location.href=`/codigo/${codigo}`
        }
    }

    buscarDenominacion(){
        if(denominacion===""){
            window.location.href="http://localhost:3000/"
        }else{
            window.location.href=`/denominacion/${denominacion}`
        }
    }
    
    render() {
        let idArticulo="";
        let suma=0;
        let menorPromedio=1000;
        for(let articulo of this.state.articulosJson){
           for(let precio of articulo.preciosRelevados){
               suma+=precio;
           }
           let promedio=suma/articulo.preciosRelevados.length;
           if(promedio<menorPromedio){
               menorPromedio=promedio;
               idArticulo=articulo.foto.replace(".jpg","");
           }
           suma=0;
        }
        return (
            <Navbar bg="primary" variant="dark" style={{marginLeft:"-37px"}}>
                <Form inline>
                <label style={{marginRight:"15px", color:"white"}}>Código: </label>
                <FormControl type="number" placeholder="Search" className="mr-sm-2" onChange={this.codigoIngresado}/>
                <Button variant="outline-light" onClick={this.buscarCodigo}>BUSCAR</Button>
                </Form>
                <Form inline>
                <label style={{marginRight:"15px", marginLeft:"30px", color:"white"}}>Denominación: </label>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.denominacionIngresada}/>
                <Button variant="outline-light" onClick={this.buscarDenominacion}>BUSCAR</Button>
                </Form>
                <Nav className="mr-auto">
                <Nav.Link href={`/detalle/${idArticulo}`} style={{marginLeft:"50px"}}>MÁS BARATO</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MenuSuperiorDeOpciones;