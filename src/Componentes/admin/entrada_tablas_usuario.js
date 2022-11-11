import React,{Component} from "react";
import "../../assets/css/luis.css"

class EntradaTablasUsuario extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <tr>
                <td>{this.props.usuario.nombre}</td>
                <td>Ultimo mes pagado: {this.props.usuario.ultimoPago}<br></br>Morosidad: {this.props.usuario.morosidad}</td>
                <td>{this.props.usuario.email}<br></br>{this.props.usuario.numero}</td>
                <td>{this.props.usuario.tipoUsuario}</td>
                <td>{this.props.usuario.idUsuario}</td>
                <td className="text-center align-middle a_u4"><button class="btn btn-danger" type="button">Borrar</button></td>
            </tr>
        );
    }
}

export default EntradaTablasUsuario;