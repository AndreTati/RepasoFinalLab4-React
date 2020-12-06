import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MenuDeOpciones from './MenuDeOpciones';
import alumnosJson from '../datos/alumnos.json';

class GrillaAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state={alumnosJson}
    }
    
    render() {
        let url=window.location.href;
        let parametro=this.props.match.params.busqueda;
        const alumnosGrilla=this.state.alumnosJson.map((alumno, i)=>{
            if(url.includes("/legajo/")){
                if(alumno.legajo===parseInt(parametro)){
                    let id=alumno.foto.replace(".jpg", "");
                    let suma=0;
                    let promedio=0;
                    for(let nota of alumno.notas){
                        suma+=nota;
                    }
                    promedio=suma/alumno.notas.length;
                    return(
                    <tr key={i}>
                        <td>{alumno.alumno}</td>
                        <td>{alumno.legajo}</td>
                        <td>{alumno.fechaNacimiento}</td>
                        <td>{promedio}</td>
                        <td><a href={`/detalle/${id}`}>VER DETALLE</a></td>
                    </tr>
                    )
                }else{
                    return null;
                }
            }else if(url.includes("/nombre/")){
                if(alumno.alumno.toLowerCase().includes(parametro.toLowerCase())){
                    let id=alumno.foto.replace(".jpg", "");
                    let suma=0;
                    let promedio=0;
                    for(let nota of alumno.notas){
                        suma+=nota;
                    }
                    promedio=suma/alumno.notas.length;
                    return(
                    <tr key={i}>
                        <td>{alumno.alumno}</td>
                        <td>{alumno.legajo}</td>
                        <td>{alumno.fechaNacimiento}</td>
                        <td>{promedio}</td>
                        <td><a href={`/detalle/${id}`}>VER DETALLE</a></td>
                    </tr>
                    )
                }else{
                    return null;
                }
            }else{
                let id=alumno.foto.replace(".jpg", "");
                let suma=0;
                let promedio=0;
                for(let nota of alumno.notas){
                    suma+=nota;
                }
                promedio=suma/alumno.notas.length;
                return(
                <tr key={i}>
                    <td>{alumno.alumno}</td>
                    <td>{alumno.legajo}</td>
                    <td>{alumno.fechaNacimiento}</td>
                    <td>{promedio}</td>
                    <td><a href={`/detalle/${id}`}>VER DETALLE</a></td>
                </tr>
                )
            }
        })
        return (
           <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Alumno</th>
                        <th>Legajo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Promedio Notas</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnosGrilla}
                    </tbody>
                </Table>
           </React.Fragment>
        );
    }
}

export default GrillaAlumnos;