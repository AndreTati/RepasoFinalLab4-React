import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
let parametro="";
class MenuSuperiorDeOpciones extends Component {

    seleccionarRegion(e){
        parametro=e.target.value;
        window.location.href="/"+parametro;
    }
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/null">HOME</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/" style={{width:"350px"}}>Ordenados Por Diámetro</Nav.Link>
                    <select className="custom-select" onChange={this.seleccionarRegion}>
                            <option value="" selected>--Seleccione una región--</option>
                            <option value="eu">European Union</option>
                            <option value="efta">European Free Trade Association</option>
                            <option value="caricom">Caribbean Community</option>
                            <option value="pa">Pacific Alliance</option>
                            <option value="au">African Union</option>
                            <option value="usan">Union of South American Nations</option>
                            <option value="eeu">Eurasian Economic Union</option>
                            <option value="al">Arab League</option>
                            <option value="asean">Association of Southeast Asian Nations</option>
                            <option value="cais">Central American Integration System</option>
                            <option value="cefta">Central European Free Trade Agreement</option>
                            <option value="nafta">North American Free Trade Agreement</option>
                            <option value="saarc">South Asian Association for Regional Cooperation</option>
                        </select>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuSuperiorDeOpciones;