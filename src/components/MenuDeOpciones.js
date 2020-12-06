import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
let valor="";
class MenuDeOpciones extends Component {

    valorSuperficie(event){
        valor=event.target.value;
    }

    buscarSuperficie(){
        if(valor===""){
            window.location.href="/"
        }else{
            window.location.href="/buscar/"+valor;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{marginLeft:"-37px"}}>
                    <Navbar.Brand href="/">HOME</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/provincias-puerto">Provincias con Puerto</Nav.Link>
                    <Nav.Link href="/mapa">Mapa Argentina</Nav.Link>
                    </Nav>
                    <Form inline>
                    <label style={{color:"white", marginRight:"25px"}}>Superficie Provincia Mayor a:</label>
                    <FormControl type="number" placeholder="Search" className="mr-sm-2" onChange={this.valorSuperficie}/>
                    <Button variant="outline-info" onClick={this.buscarSuperficie}>Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuDeOpciones;