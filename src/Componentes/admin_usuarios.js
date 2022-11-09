import React, { Component } from "react";
import "../styles.css";

class Admin_usuarios extends Component{
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
                            <div className="col-12 col-sm-7 col-md-6 text-end a_u1"><button className="btn btn-primary btn-sm reset a_u3" type="button">Borrar Filtros</button><button className="btn btn-warning btn-sm a_u3" id="zoom_in" type="button" zoomclick="ChangeZoomLevel(-10);"><i className="fa fa-search-plus"></i></button><button className="btn btn-warning btn-sm a_u3" id="zoom_out" type="button" zoomclick="ChangeZoomLevel(-10);"><i className="fa fa-search-minus"></i></button></div>
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
                                        <tr>
                                            <td>Sebastian Cerda</td>
                                            <td>Ultimo mes pagado: Septiembre, 2022<br></br>Morosidad: Sí</td>
                                            <td>sebastianrex@gmail.cl<br></br>+56912345678</td>
                                            <td>Administrador</td>
                                            <td>11</td>
                                            <td className="text-center align-middle"><a className="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i className="fas fa-money-check-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" ></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>Sofia Llanos</td>
                                            <td><br></br>Ultimo mes pagado: Noviembre, 2022<br></br>Morosidad: No<br></br></td>
                                            <td>sofia.gamer777@gmail.com<br></br>+56977779999</td>
                                            <td>Conserje</td>
                                            <td>13</td>
                                            <td className="text-center align-middle"><a className="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i className="fas fa-money-check-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>Alfredo Aceituno</td>
                                            <td><br></br>Ultimo mes pagado: Noviembre, 2022<br></br>Morosidad: No<br></br></td>
                                            <td>alfreditoxbnalgarete@gamil.com<br></br>+56900000001</td>
                                            <td>Residente</td>
                                            <td>69</td>
                                            <td className="text-center align-middle"><a className="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i className="fas fa-money-check-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i className="fas fa-trash btnNoBorders" ></i></a></td>
                                        </tr>
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