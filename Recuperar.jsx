




import React from "react";


function Recuperar() {

  return (
    
<form name="form-recupero">

    
        <label for="IdUsuario" style="color: antiquewhite;">IdUsuario</label> <br/>
        <input type="text" name= "IdUsuario"></input>

        
    <p>
        <label for="Email" style="color: antiquewhite;">Email</label> <br/>
        <input type="Email" name="Email" ></input>    
    </p>

    <p>
        <label for="Promoción" style="color: antiquewhite;">RecibirPromociones</label>
        <select name="Promoción">
            <option value="Si">SI</option>
            <option value="NO">No</option>
            <option value="En otro Momento">En otro Momento</option>
        </select>
    </p>

    <label for="Acepto las condiciones" style="color: antiquewhite;">Acepto las condiciones</label>
    <input type="checkbox" name="condiciones"/><br />
    
    <input type="submit" value="Enviar Mail" />
    

</form>




  );
}




export default Recuperar;