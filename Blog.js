import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Blog extends React.Component {
render (){
    var buttonString = "Ir al Blog";
    return (
        <div id= "Blog">
        <Slider 
        title="BLOG" 
        size= "slider-small" />
    
    
    <div className="center">
    <div id="content">
    
    {/* Listado de articulos que vienen de la API*/}
        </div>
        <Sidebar
        blog = "true"/>
        </div>
</div>

    );
}

}


export default Blog;