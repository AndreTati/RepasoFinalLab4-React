import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
let parametro="";
class MenuSuperiorDeOpciones extends Component {
    constructor(props) {
        super(props);
        
    }

    seleccionarMes(e){
        parametro=e.target.value;
        window.location.href="/buscar/"+parametro;
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{marginLeft:"-37px"}}>
                    <Navbar.Brand href="/">HOME</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/agrupados" style={{width:"350px"}}>Agrupado por Elemento</Nav.Link>
                    <select className="custom-select" onChange={this.seleccionarMes}>
                            <option value="" selected>Seleccione un mes</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuSuperiorDeOpciones;