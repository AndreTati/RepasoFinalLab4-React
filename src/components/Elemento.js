import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Elemento extends Component {
    render() {
        return (
            <React.Fragment>
                <Table striped bordered hover >
                    <tbody>
                        <tr>
                            <td style={{width:"50px"}}><img className="img" src={"/images/"+this.props.imagen}></img></td>
                        </tr>
                        <tr>
                            <td style={{width:"50px"}}>{this.props.signo}</td>
                        </tr>
                        <tr>
                            <td style={{width:"50px"}}><a href={`/detalle/${this.props.id}`}>DETALLE</a></td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default Elemento;