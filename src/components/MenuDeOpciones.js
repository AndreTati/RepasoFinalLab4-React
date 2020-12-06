import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

let palabra="";

class MenuDeOpciones extends Component {

    constructor(props) {
        super(props);
        this.buscar=this.buscar.bind(this)
    }

    buscar(){
        if(palabra===""){
            window.location.href="/nuestros-autos"
        }else{
            window.location.href=`/nuestros-autos/${palabra}`
        }
    }

    palabraBuscar(event){
       palabra=event.target.value;
    }
    

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{marginLeft: '-37px'}}>
                    <Navbar.Brand href="/home">HOME</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/nuestros-autos">Nuestros Autos</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.palabraBuscar}/>
                    <Button variant="outline-info" onClick={this.buscar}>Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuDeOpciones;