import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
let palabra="";
class MenuDeOpciones extends Component {
    
    constructor(props) {
        super(props);
        this.buscar=this.buscar.bind(this)
    }

    buscar(){
        if(palabra===""){
            window.location.href="/"
        }else{
            window.location.href="/buscar/"+palabra;
        }
    }

    palabraBuscar(event){
        palabra=event.target.value;
     }
    
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{marginLeft: '-37px'}}>
                    <Navbar.Brand href="/">HOME</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/heroes-dc">Heroes DC</Nav.Link>
                    <Nav.Link href="/heroes-marvel">Heroes Marvel</Nav.Link>
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