import React,{Component} from "react";

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
                <td className="text-center align-middle a_u4"><a className="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i className="fas fa-money-check-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover a_u5" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders a_u6" ></i></a></td>
            </tr>
        );
    }
}

export default EntradaTablasUsuario;