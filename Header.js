
import React from "react";
import {NavLink} from 'react-router-dom';


 
// class component
class Header extends React.Component {
  render() {
    return (
      <header id= "header">

      <div class ="center">

          <div id= "logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="logotipo" class="app-logo" />
          <span id="brand"><strong>BLOG</strong>NSLP</span>
          </div>


          <nav id = "Menu">
          <ul>
              <li>
                  <NavLink to = "/home" activeClassName="active">Inicio</NavLink>
              </li>
              <li>
                <NavLink to = "/Blog" activeClassName="active">Blog</NavLink>
              </li>
              <li>
                <NavLink to = "/formulario">Formulario</NavLink>
              </li>
              <li>
                <NavLink to = "/peliculas">Peliculas</NavLink>
              </li>
          </ul>
          </nav>

          <div class="clearfix"></div>
      </div>
  </header>
    
    );
  }
}
 
export default Header;