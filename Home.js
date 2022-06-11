import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Home extends React.Component {
render (){
    var buttonString = "Ir al Blog";
    return (
    <div id= "home">
    <Slider title="Bienvenido al Blog de NSLP" 
    btn= {buttonString}
    size="slider-big"
    />
    
    
    <div className="center">
    <div id="content">
    
    <h1 className = "subheader">ultimos articulos</h1>
        </div>
        <Sidebar/>
        </div>
</div>

    );
}

}


export default Home;