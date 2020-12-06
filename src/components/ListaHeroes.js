import React, { Component } from 'react';
import heroesJson from '../datos/heroes.json';
import Heroe from './Heroe';
import MenuDeOpciones from './MenuDeOpciones';

class ListaHeroes extends Component {
    constructor(props) {
        super(props);
        this.state={heroesJson}
    }
    
    buscar(palabra, heroe){
        if(heroe.nombre.toLowerCase().includes(palabra.toLowerCase())){
            return true;
        }
        if(heroe.bio.toLowerCase().includes(palabra.toLowerCase())){
            return true;
        }
        for(let poder of heroe.poderes){
            if(poder.toLowerCase().includes(palabra.toLowerCase())){
                return true;
            }
        }
        return false;
    }

    render() {
        const url=window.location.href;
        console.log(url)
        let parametro="";
        this.props.match.params.palabra?(parametro=this.props.match.params.palabra):(parametro="");
        
        const listaHeroes=this.state.heroesJson.map((heroe, i)=>{
            if(url.includes("heroes-dc")){
                if(heroe.casa==="DC"){
                    return(
                        <Heroe key={heroe.id} nombre={heroe.nombre} img={heroe.img} poderes={heroe.poderes} id={heroe.id}></Heroe>
                    )
                }else{
                    return null;
                }
            }else if(url.includes("heroes-marvel")){
                if(heroe.casa==="Marvel"){
                    return(
                        <Heroe key={heroe.id} nombre={heroe.nombre} img={heroe.img} poderes={heroe.poderes} id={heroe.id}></Heroe>
                    )
                }else{
                    return null;
                }
            }else if(url.includes("/buscar/")){
                if(this.buscar(parametro, heroe)){
                    return(
                        <Heroe key={heroe.id} nombre={heroe.nombre} img={heroe.img} poderes={heroe.poderes} id={heroe.id}></Heroe>
                    )
                }else{
                    return null;
                }
            }else{
                return(
                    <Heroe key={heroe.id} nombre={heroe.nombre} img={heroe.img} poderes={heroe.poderes} id={heroe.id}></Heroe>
                )
            }
        });
        
        return (
           <React.Fragment>
               <MenuDeOpciones></MenuDeOpciones>
               {listaHeroes}
           </React.Fragment>
        );
    }
}

export default ListaHeroes;