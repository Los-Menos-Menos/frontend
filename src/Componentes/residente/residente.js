import { Component } from "react";

class Residente extends Component {
    constructor(){
        super();
    }

    render() {
        return (
        <div>
            <h1>Residente</h1>
            <p>Nombre: {this.props.nombre}</p>
            <p>Edad: {this.props.edad}</p>
        </div>
        );
    }
}

export default Residente;