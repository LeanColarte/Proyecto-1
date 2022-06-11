import React from "react";
import Pelicula from "./Pelicula";



class Peliculas extends React.Component {


    state = {
        peliculas: [
            {titulo: 'Spiderman Homecoming', image:"https://es.web.img2.acsta.net/pictures/17/06/19/14/01/130456.jpg"},
            {titulo: 'Dr Strange',image:"https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-benedict-cumberbatch-sorprende-todos-entrando-tienda-comics-doctor-strange-2020792307.jpg" },
            {titulo: 'Avengers End Game',image:"https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&ssl=1" },
            {titulo: 'Black Panter',image:"https://i.blogs.es/9b25a4/black-panther/840_560.jpeg" },
        ],
        nombre: 'Leandro Colarte',
        favorita: {}
    };

cambiarTitulo = () => {

    var {peliculas} = this.state;
    var random = Math.floor(Math.random()*3);
    peliculas[random].titulo = 'Pantera Negra';
    this.setState ({
        peliculas: peliculas
    });
}


favorita = (pelicula,indice)=> {
    console.log ("Favorita Marcada");
    console.log(pelicula,indice);
    this.setState({
        favorita:pelicula
    })
} 




    render(){
        var pStyle = {
            background: 'Blue',
                        color: 'white',
                        padding: '10px'
        }
        var favorita;
        if (this.state.favorita.titulo){
favorita= (
    <p className= "favorita" style= {
        pStyle
    } >
<strong>La Pelicula favorita es: </strong>
<span> {this.state.favorita.titulo} </span>
</p>
)
        } else {
            favorita= <p>No hay pelicula favorita</p>
        }


        return (
            <div id= "content" className="Peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Peliculas favoritas de  {this.state.nombre}</p>
                <p>
                    <button onClick= {this.cambiarTitulo}>Cambiar Titulo</button>
                </p>
                {favorita}
                {/*
                    this.state.favorita.titulo ? ( 
                    <p className= "favorita" style= {
                        pStyle
                    } >
                <strong>La Pelicula favorita es: </strong>
                <span> {this.state.favorita.titulo} </span>
                </p>
                    ) : (
                        <p>No hay pelicula favorita</p>
                    )
                    */}
                
                {/**Crear el componente de la peliucula */}

            <div id="articles" className= "peliculas">

                {
                    this.state.peliculas.map((pelicula,i) =>{
                        return (
                           <Pelicula 
                           key={i} 
                           pelicula={pelicula} 
                           indice={i}
                           marcarFavorita = {this.favorita}
                           />
                        )})
                }
                </div>
            </div>
        );
    }
}


export default Peliculas;