import React from "react";


class SeccionPrueba extends React.Component {



    HolaMundo (nombre,edad){
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad}</h3>
            </div>
        );
        return presentacion;
    }

//contador similar al de carrito de compras para agregar cantidad de un producto

contador = 0;


//FORMA LARGA

//constructor(props){
//    super(props);
//    this.state = {
//        contador : 0,
//    };
//}

//FORMA CORTA

state = {
contador: 0,
};

sumar = (e)=>{

    this.setState({
        contador: this.state.contador + 1,
    });
    }

restar= (e)=>{

this.setState({
    contador: this.state.contador - 1,
});
}

    render () {
        var nombre= "Jonatan Ismael"; 
        return (
            <section id="content">
            <h2 className="subheader">Ultimos Artículos</h2>
            <p>Hola Bienvenidos a REAC de proramacion 4</p>
            <h2 className="subheader">Funciones</h2>
            {this.HolaMundo (nombre,32)}
            <h2 class="subheader">Componentes</h2>
            <section className="componentes">

            </section>

            <h2 className="subheader">Estados</h2>

            <p>Contador:{this.state.contador} </p>
            <p>
            
            <input type= "button" value = "sumar" onClick={this.sumar}></input>
            <input type= "button" value = "restar" onClick={this.restar}></input>

            </p>
        </section>
        );
    }
}

export default SeccionPrueba;