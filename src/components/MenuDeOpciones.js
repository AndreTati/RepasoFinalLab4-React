import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import alumnosJson from '../datos/alumnos.json';
let legajo="";
let nombre="";
class MenuDeOpciones extends Component {

    constructor(props) {
        super(props);
        this.state={alumnosJson}
        this.buscarLegajo=this.buscarLegajo.bind(this)
        this.buscarNombre=this.buscarNombre.bind(this)
    }

    legajoIngresado(e){
        legajo=e.target.value;
    }

    nombreIngresado(e){
        nombre=e.target.value;
    }

    buscarLegajo(){
        if(legajo===null){
            window.location.href="http://localhost:3000"
        }else{
            window.location.href=`/legajo/${legajo}`;
        }
    }

    buscarNombre(){
        if(nombre===""){
            window.location.href="http://localhost:3000"
        }else{
            window.location.href=`/nombre/${nombre}`;
        }
    }
    
    render() {

        let idMejor="";
        let suma=0;
        let promedioMejor=0;
        for(let alumno of this.state.alumnosJson){
            for(let nota of alumno.notas){
                suma+=nota;
            }
            let promedio=suma/alumno.notas.length;
            if(promedio>promedioMejor){
                promedioMejor=promedio
                idMejor=alumno.foto.replace(".jpg","");
            }
            suma=0;
        }

        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark" style={{marginLeft:"-37px"}}>
                    <Form inline>
                    <label style={{marginRight:"10px"}}>Legajo:</label>
                    <FormControl type="number" className="mr-sm-2" onChange={this.legajoIngresado}/>
                    <Button variant="outline-light" onClick={this.buscarLegajo}>Buscar</Button>
                    </Form>
                    <Form inline>
                    <label style={{marginRight:"10px", marginLeft:"20px"}}>Nombre:</label>
                    <FormControl type="text" className="mr-sm-2" onChange={this.nombreIngresado}/>
                    <Button variant="outline-light" onClick={this.buscarNombre}>Buscar</Button>
                    </Form>
                    <Nav className="mr-auto" style={{marginLeft:"30px"}}>
                    <Nav.Link href={`/detalle/${idMejor}`}>MEJOR ALUMNO</Nav.Link>
                    </Nav>
                    
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuDeOpciones;