import { Component } from "react";

class Add_Observacion extends Component {
    constructor(){
        super();
    }

    render() {
        return (
        <>
            <div>
                <h1>Agregar Observación</h1>

            </div>
            <div class="container">
            <form>
                <div>
                <label>
                    Observación:
                    <input type="text" name="name" style={{marginLeft:10}}/>
                </label>
                </div>
                <input type="submit" value="Enviar" style={{margin:10}} />
                </form>
            </div>
        </>
        );
    }
}

export default Add_Observacion;