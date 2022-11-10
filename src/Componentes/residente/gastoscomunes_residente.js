import { Component } from "react";
import GastosComunes from"../../assets/img/gastos2.png";
import { MDBBtn } from 'mdb-react-ui-kit';

class Gastoscomunes_residente extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <>
    <div class="col">
            <div class="card"><img src={GastosComunes} class="card-img-top w-100 d-block" alt="" style={{ height: '350px', objectFit: "contain" }} />
                <div className="text-center">
                    <h4 class="text-center card-title">Gastos Comunes</h4>
                    <p class="card-text">Aquí se encuentran tu deudas</p>
                    <div>
                        <div class="col"><strong  style={{ float: "left", paddingLeft: 550}}>Gastos Comunes</strong><small >$120.000</small></div>
                        <div class="col"><strong  style={{ float: "left", paddingLeft: 550}}>Reserva de Piscina</strong><small >$5.000</small></div>
                        <div class="col"><strong  style={{ float: "left", paddingLeft: 550}}>Multa</strong><small style={{ marginLeft: 100}}>$5.000</small></div>
                        <div class="col"><small ></small></div>
                    </div><strong>Total</strong><small >$130.000</small>
                    </div>
                        <div className="text-center">
                        <MDBBtn style={{ width: "30%"}}>Ir a Pagar</MDBBtn>
                        </div>
                    <div class="d-flex">
                        <div></div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Gastoscomunes_residente;