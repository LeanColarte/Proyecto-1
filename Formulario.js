import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Formulario extends React.Component {

    NombreRef = React.createRef();

    ApellidoRef = React.createRef();

    DetalleRef = React.createRef();

    generoHombreRef = React.createRef();

    generoMujerRef = React.createRef();

    generoOtroRef = React.createRef();

recibirFormulario = (e) => {
    e.preventDefault();


    console.log("Formulario Enviado");    
    console.log(this.NombreRef.current.value);
alert("envie el formulario");
}
    render (){
    var buttonString = "Ir al Blog";
    return (
        <div id= "Formulario">
     
    
    <div className="center">
    <div id="content">
    <h1 className = "subheader">Formulario</h1>
    {/*Crear formulario con react*/}
    <form className="mid-form" onSubmit={this.recibirFormulario}>
                    <div className="form-group">
                        <label htmlfor="nombre">Nombre</label>
                        <input type="text" name = "Nonbre" ref={this.NombreRef}/>
                    </div>

                    <div className="form-group">
                        <label htmlfor="apellidos">Apellido</label>
                        <input type="text" name = "apellidos" ref={this.ApellidoRef} />
                    </div>

                    <div className="form-group">
                        <label htmlfor="detalle">Detalle</label>
                        <textarea name="detalle" ref={this.detalleRef}></textarea>
                    </div>

                    <div className="form-group radiobuttons">
                        <input type="radio" name = "genero" value="hombre" ref={this.generoHombreRef}/>Hombre 
                        <input type="radio" name = "genero" value="mujer" ref={this.generoMujerRef}/>Mujer 
                        <input type="radio" name = "genero" value="otro" ref={this.generoOtroRef}/>Otro 
                    </div>
                    <br/>
                    <div className="clearfix"></div>
                    <input type="submit" value="Enviar" classname="btn btn-sucess"/>

               </form>       
        </div>
        <Sidebar
        blog = "false"/>
        </div>
</div>

    );
}

}


export default Formulario;