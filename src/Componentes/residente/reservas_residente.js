import { Component } from "react";
import EspaciosComunes from"../../assets/img/espacios_comunes.png";
import { MDBBtn } from 'mdb-react-ui-kit';
import GastosComunes from"../../assets/img/gastos.png";
import Estacionamiento from "../../assets/img/estacionamiento.png";
import Libro from "../../assets/img/libro.jpg";
import SalaEventos from "../../assets/img/salaeventos.png";
import MultiCancha from "../../assets/img/multicancha.png";

class Reservas_Residente extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <>
    <div class="col">
            <div class="card">
                <div className="text-center">
                    <h2 class="text-center card-title">Espacios Comunes</h2>
                    <p class="card-text">Aquí podrás reservar los espacios comunes del condominio</p>
                    
                    </div>
                        
                    <div class="d-flex">
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-4">
                        <div class="col">
                            <div class="card" style={{ margin: 10}}>
                                <img src={EspaciosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="row">
                                        <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button">Reservar Quincho</button></div>
                                    </div>
                                    <div class="d-flex">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10}}>
                                <img src={Estacionamiento} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="d-flex">
                                        <div></div>
                                    </div>
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button">Reservar Estacionamiento</button></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10,}}>
                                <img src={SalaEventos} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button">Reservar Sala de Eventos</button></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ margin: 10}}>
                                <img src={MultiCancha} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                                <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button">Reservar Multicancha</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default Reservas_Residente;