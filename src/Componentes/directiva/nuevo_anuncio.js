import { Component } from "react";

class Nuevo_Anuncio extends Component {
    constructor(){
        super();
    }

    render() {
        return (
        <>
            <div>
                <h1>Nuevo Anuncio</h1>

            </div>
            <div class="container">
            <form>
                <div>
                <label>
                    Mensaje:
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

export default Nuevo_Anuncio;