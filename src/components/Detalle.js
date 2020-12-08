import React, { Component } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import signosJson from '../datos/zodiaco.json';

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state={signosJson}
    }

    getNombreMes(mes){
        switch(mes){
            case 1:
                return "Enero"
            case 2:
                return "Febrero"
            case 3:
                return "Marzo"
            case 4:
                return "Abril"
            case 5:
                return "Mayo"
            case 6:
                return "Junio"
            case 7:
                return "Julio"
            case 8:
                return "Agosto"
            case 9:
                return "Septiembre"
            case 10:
                return "Octubre"
            case 11:
                return "Noviembre"
            case 12:
                return "Diciembre"
        }
    }
    
    render() {
        const idSigno =this.props.match.params.id;
        const signoEncontrado=this.state.signosJson.filter(signo=>signo.id===parseInt(idSigno));
        
        return (
           <React.Fragment>
               <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
               <Container>
                <table>
                        <tr>
                            <td className="bordes" style={{textAlign:"center", width:"300px"}}><img src={"/images/"+signoEncontrado[0].imagen}></img></td>
                            <td className="bordes anchoColumna" rowSpan="2">
                                <tr style={{borderTop:"white"}}>
                                    <td style={{width:"300px", textAlign:"left"}}>Elemento:</td>
                                    <td style={{width:"300px", textAlign:"left"}}>{signoEncontrado[0].elemento}</td>
                                </tr>
                                <tr>
                                    <td style={{width:"300px", textAlign:"left"}}>Símbolo:</td>
                                    <td style={{width:"300px", textAlign:"left"}}>{signoEncontrado[0].simbolo}</td>
                                </tr>
                                <tr>
                                    <td style={{width:"300px", textAlign:"left"}}>Meses:</td>
                                    <td style={{width:"300px", textAlign:"left"}}>{signoEncontrado[0].meses[0]} ({this.getNombreMes(signoEncontrado[0].meses[0])}) <br></br>
                                   {signoEncontrado[0].meses[1]} ({this.getNombreMes(signoEncontrado[0].meses[1])})</td>
                                </tr>
                                Descripción:<br></br>
                                {signoEncontrado[0].descripcion}    
                            </td>
                        </tr>
                        <tr>
                            <td className="bordes">
                                {signoEncontrado[0].signo}
                            </td>
                        </tr>
                </table>
               </Container>
           </React.Fragment>
        );
    }
}

export default Detalle;