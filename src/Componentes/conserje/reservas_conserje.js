import { Component } from "react";

import EspaciosComunes from"../../assets/img/espacios_comunes.png";
import Estacionamiento from "../../assets/img/estacionamiento.png";
import SalaEventos from "../../assets/img/salaeventos.png";
import MultiCancha from "../../assets/img/multicancha.png";

class Reservas_Conserje extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <div class="mx-auto" style={{paddingTop: '50px'}}>
            <div class="row mb-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h2>Espacios Comunes</h2>
                            <h5>Aquí podrás reservar los espacios comunes disponibles del condominio para los residentes</h5>
                        </div>
                    </div>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-4 mx-auto" style={{paddingBottom: '60px', paddingRight: '40px', paddingLeft: '40px'}}>
                        <div class="col">
                            <div class="card">
                                <div class= "card-title mx-auto"> <b> Quincho </b> </div>
                                <img src={EspaciosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="row">
                                        <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Reservas_Quincho")}>Reservar</button></div>
                                    </div>
                                    <div class="d-flex">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10}}>
                            <div class= "card-title mx-auto"> <b> Estacionamiento </b> </div>
                                <img src={Estacionamiento} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="d-flex">
                                        <div></div>
                                    </div>
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Reservas_Estacionamiento")}>Reservar</button></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10,}}>
                            <div class= "card-title mx-auto"> <b> Sala de Eventos </b> </div>
                                <img src={SalaEventos} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Reservas_SalaEventos")}>Reservar</button></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10}}>
                                <div class= "card-title mx-auto"> <b> Multicancha </b> </div>
                                <img src={MultiCancha} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Reservas_Multicancha")}>Reservar</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default Reservas_Conserje;