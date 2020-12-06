import React, { Component } from 'react';
import { Container} from 'react-bootstrap';

class Heroe extends Component {

    constructor(props) {
        super(props);
        this.mostrarDetalle=this.mostrarDetalle.bind(this)
    }
    

    mostrarDetalle(id){
        window.location.href="/detalle/"+id;
    }

    render() {
        const poderes=this.props.poderes.map((poder, i)=>{
            return(
                <li key={i} style={{marginLeft:"40px"}}>{poder}</li>
            )
        })
        return (
            <React.Fragment>
                <Container style={{marginTop:"10px"}}>
                <table>
                    <tr>
                        <td className="nombre"><span style={{color:"green"}}><b>{this.props.nombre}</b></span></td>
                        <td style={{color:"red", width:"400px"}}><span>Poderes</span></td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center"}}><img className="maxAltoImg" src={"/images/"+this.props.img}/></td>
                        <td style={{textAlign:"justify"}}>{poderes}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center", height:"40px"}}><a href={`http://localhost:3000/detalle/${this.props.id}`}><button>VER MAS</button></a></td>
                        <td></td>
                    </tr>
                </table>
                
                </Container>
                <hr></hr>
            </React.Fragment>
        );
    }
}

export default Heroe;