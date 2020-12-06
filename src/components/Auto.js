import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Auto extends Component {
    render() {
        
        const precio=(this.props.precio==='0')? "Consultar" :"$ "+this.props.precio;
        const idAuto=this.props.imagen.replace('.jpg', '');
        return (
            <React.Fragment>
                <Card style={{ width: '150px', marginLeft: '10px', marginTop: '5px'}}>
                <a href={`/detalle/${idAuto}`}>
                    <Card.Img variant="top" className="maxAltoImg" src={"/images/"+this.props.imagen.toLowerCase()} />
                </a>
                <Card.Body>
                    <Card.Title className="centrado"><b>{this.props.marca}</b></Card.Title>
                    <Card.Text className="centrado">
                    <span>{this.props.modelo} {this.props.anio}</span><br></br>
                    <span style={{color:'orange'}}>{precio}</span>
                    </Card.Text>
                </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default Auto;