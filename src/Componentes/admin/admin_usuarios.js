import React, { Component } from "react";
import EntradaTablasUsuario from "./entrada_tablas_usuario";
import "../../assets/css/luis.css"

class Admin_usuarios extends Component{
    usuarios=[
        {nombre:"Juan Perez",ultimoPago:"Enero",morosidad:"$1000",email:"juanitojuanjarry@runin.cl",numero:"123456789",tipoUsuario:"Administrador",idUsuario:"1"},
        {nombre:"Fernanda Cerda",ultimoPago:"Febrero",morosidad:"$2000",email:"fernandacerda@hermosisima.cl",numero:"987654321",tipoUsuario:"Administrador",idUsuario:"2"},
        {nombre:"Luis Corrales",ultimoPago:"Marzo",morosidad:"$3000",email:"colocolinodecorazon@colocolo.cl",numero:"123456789",tipoUsuario:"Administrador",idUsuario:"3"},
        {nombre:"Sofia Mañana",ultimoPago:"Abril",morosidad:"$4000",email:"luchitoesmuymaloelcolocolo@jajajaj.cl",numero:"987654321",tipoUsuario:"Residente",idUsuario:"4"},
        {nombre:"Sebastián Sepúlveda",ultimoPago:"Mayo",morosidad:"$5000",email:"feñitateamo@amor.cl",numero:"123456789",tipoUsuario:"Residente",idUsuario:"5"},
    ]

    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="card" id="TableSorterCard">
                    <div className="card-header py-3">
                        <div className="row table-topper align-items-center">
                            <div className="col-12 col-sm-5 col-md-6 text-start a_u1">
                                <p className="text-primary m-0 fw-bold a_u2">Usuarios</p>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped table tablesorter" id="ipi-table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Estado de cuenta</th>
                                            <th className="text-center">Contacto</th>
                                            <th className="text-center">TIPO</th>
                                            <th className="text-center">Departamento</th>
                                            <th className="text-center filter-false sorter-false">Gestionar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {this.usuarios.map((usuario) => (
                                            <EntradaTablasUsuario usuario={usuario}/>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin_usuarios;