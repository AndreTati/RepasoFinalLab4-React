import React, { Component } from 'react';
import MenuDeOpciones from './MenuDeOpciones';
import provinciasJson from '../datos/lista_provincias.json';
import Provincia from './Provincia';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={provinciasJson}
    }
    
    render() {
        const url=window.location.href;
        let parametro=""
        this.props.match.params.valor?(parametro=this.props.match.params.valor):(parametro="");
        const provincias=this.state.provinciasJson.map((provincia, i)=>{
            if(url.includes("puerto")){
                if(provincia.tienePuerto==="Y"){
                    return(
                        <div className="col-3">
                            <Provincia key={i} provincia={provincia.provincia} capital={provincia.capital} id={provincia.abreviatura} img={provincia.bandera}></Provincia>
                        </div>
                    )
                }else{
                    return null;
                }
            }else if(url.includes("buscar")){
                if(parseInt(provincia.superficie)>=parseInt(parametro)){
                    return(
                        <div className="col-3">
                            <Provincia key={i} provincia={provincia.provincia} capital={provincia.capital} id={provincia.abreviatura} img={provincia.bandera}></Provincia>
                        </div>
                    )
                }else{
                    return null;
                }
            }else{
                return(
                    <div className="col-3">
                        <Provincia key={i} provincia={provincia.provincia} capital={provincia.capital} id={provincia.abreviatura} img={provincia.bandera}></Provincia>
                    </div>
                )
            }
        })
        return (
            <React.Fragment>
                <MenuDeOpciones></MenuDeOpciones>
                <h1 className="tituloHome"><b>Provincias de la República Argentina</b></h1>
                <div className="container">
                    <div className="row">
                        {provincias}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;