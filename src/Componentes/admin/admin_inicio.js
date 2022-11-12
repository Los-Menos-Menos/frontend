import React, {Component} from 'react';
import IconoUsuario from"../../assets/img/iconousuario.png";
import Reserva from "../../assets/img/reserva.png";
import Anuncio from "../../assets/img/megafono.jpg";


class AdminInicio extends Component {
    render(){
        return(
            <div class="container py-4 py-xl-5">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Bienvenido, admin</h2>
                        <p class="w-lg-50">Bienvenido a su espacio, estas son las funcionalidades que puede realizar:</p>
                    </div>
                </div>
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div class="col">
                        <div class="card">
                            <img src={IconoUsuario} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Gestionar Usuarios</h4>
                                <p class="card-text">En esta sección puede gestionar la información de los usuarios.</p>
                                <div class="row">
                                    <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("AdminUsuarios")}>Ir a gestionar usuarios</button></div>
                                </div>
                                <div class="d-flex">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Reserva} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Espacios Comunes</h4>
                                <p class="card-text">En esta sección podrá consultar y reservar los espacios comunes.</p>
                                <div class="d-flex">
                                    <div></div>
                                </div>
                                <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("AdminReservas")}>Ir a Espacios Comunes</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Anuncio} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Anuncios</h4>
                                <p class="card-text">En esta sección puede ver los anuncios del condominio.</p>
                                <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Anuncios")}>Ir a Anuncios</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminInicio;