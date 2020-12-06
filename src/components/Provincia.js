import React, { Component } from 'react';

class Provincia extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <tr>
                        <td>
                            <span style={{color:"green", textAlign:"center"}}>{this.props.provincia}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center"}}>
                            <img className="maxAltoImg" src={"/images/"+this.props.img}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center"}}>
                            <b>Capital-{this.props.capital}</b>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center"}}>
                            <a href={`/detalle/${this.props.id}`}><button type="button">Ver Mas</button></a>
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        );
    }
}

export default Provincia;