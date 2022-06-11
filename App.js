//Inicio de pagina

import './assets/css/App.css';

import React, { Component } from "react";


//import SeccionPrueba from './components/SeccionPruebas';
//import Peliculas from './components/Peliculas';
import Router from './components/Router';


function App () {

  


    return (
      <div className= 'App'>
        <Router/>
        {/*<Peliculas/>*/}
      </div>
    );
  }


export default App;