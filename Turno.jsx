import React from "react";



//import {MuiPickersutilsProvider} from '@material-ui/pickers';
//import DateFnsUtils from '@date-io/date-fns';




class Turno extends React.Component {
 render (){
  return (
    
    
    <div className= "App-Turno" >
        
    
    <form name="form-turno" className="form-Turno">
    <h1>Solicite su turno</h1>
    
    <div className="row">
    <strong><label class="required" for="name">Ingrese Su Nombre:</label></strong><br />
    <input id="name" className="input" name="input" type="text"  size="30" /><br />
    <span id="name_validation" className="error_message"></span>
    </div>
    <div className="row">
    <strong><label class="required" for="email">Ingrese Su Correo</label></strong><br />
    <input id="email" className="input" name="Email" type="text" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
    </div>
    <div className="row">
    <strong><label class="required" for="message">Indique el problema que tiene:</label></strong><br />
    <textarea id="message" className="input" name="message" rows="7" cols="30" type= "textarea"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    <span><strong>Seleccione Una fecha</strong></span>


</form>
</div>

  );
}

}


export default Turno;