import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Turno from "./paginas/Turno";
import SeccionPrueba from "./SeccionPruebas";
import Error from "./Error";
import MiComponente from "./MiComponente";
import Header from "./Header";
import Footer from './Footer';
import Home from "./Home";
import Blog from "./Blog";
import Peliculas from "./Peliculas";
import Formulario from "./Formulario";

class Router extends React.Component {
    
    
    render (){
 
        return (
            
            <BrowserRouter>
                    <Header/>
                    
        
       
            
            {/* CONFIGURAR RUTAS Y PAGINAS */}

            <Switch>
                <Route exact path = "/" component= {Home}/>
                <Route exact path = "/home" component= {Home}/>
                <Route exact path = "/Blog" component= {Blog} />
                <Route exact path = "/Formulario" component= {Formulario} />
                <Route exact path = "/Peliculas" component= {Peliculas} />
                <Route exact path = "/segunda-ruta" component= {Turno}/>
                {/* OTRA FORMA DE ASIGNAR UNA RUTA ES CON RENDER AL CUAL LE PODEMOS DAR CODIGO HTML */}
                <Route exact path = "/pagina-1" render= {() => (
                    <div>
                    <h1>Estamos en la pagina 1</h1>
                    <MiComponente saludo="Hola como estas" />
                    </div>
                )}/>

            <Route exact path = "/pruebas/:nombre/:apellido?" render = {(props)=> {
                var nombre = props.match.params.nombre;
                var apellido = props.match.params.apellido;

                return(
                <div id="content">
                    <h1 className= "subheader">Página de pruebas</h1>
                    <h2> 
                        {
                            nombre && !apellido &&
                            <span>{nombre}</span>
                        }
                        {
                            nombre && apellido &&
                            <span>{nombre} {apellido}</span>
                        }
                    </h2>
                </div>
                
            )}} />

                <Route component = {Error}/>
            </Switch>

        <div className="clearfix"></div>
        <Footer/>
            </BrowserRouter>
        )
    }
}

export default Router;