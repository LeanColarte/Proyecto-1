import React from "react";


class MiComponente extends React.Component {
    render (){

        let receta = {
            nombre: "Pizzas",
            ingredientes: ["Muzzarella","Tomate","Jamon","Cebolla","Huevo"],
            calorias: 400,
        };

        return (
            <div className= "mi-componente">
                <h1>{"Nombre: " + receta.nombre}</h1>
                <h2>{"Calorias: " + receta.calorias}</h2>

                {this.props.saludo &&
                <h3>{this.props.saludo}</h3>
                }
            <ol>
                {receta.ingredientes.map((ingrediente,i)=>{
                    console.log (ingrediente);
                    return <li key={i}>{ingrediente}</li>
                })}
            </ol>
                <hr/>
            </div>
        )

    }
}


export default MiComponente;