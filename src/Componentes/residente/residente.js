import { Component } from "react";
import GastosComunes from"../../assets/img/gastos.png";
import Reserva from "../../assets/img/reserva.png";
import Libro from "../../assets/img/libro.jpg";

class Residente extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <>
            <div class="container py-4 py-xl-5">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Hola, Residente</h2>
                        <h5>Bienvenido a su espacio, estas son las funcionalidades que puede realizar:</h5>

                    </div>
                </div>
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div class="col">
                        <div class="card">
                            <img src={GastosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Gastos Comunes</h4>
                                <p class="card-text">En esta sección puede consultar información sobre tus gastos comunes.</p>
                                <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Gastoscomunes_residente")}>Ir a Gastos Comunes</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Reserva} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Espacios Comunes</h4>
                                <p class="card-text">En esta sección podrá consultar y reservar los espacios comunes.</p>
                                <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Reservas_Residente")}>Ir a Espacios Comunes</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Libro} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <h4 class="text-center card-title">Anuncios</h4>
                                <p class="card-text">En esta sección puede ver los anuncios del condominio.</p>
                                <div class="col d-flex justify-content-end"><button class="btn btn-primary" type="button" onClick={() => this.props.cambiarPagina("Anuncios")}>Ir a Anuncios</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Residente;