import { Component } from "react";
import MultiCancha from"../../assets/img/multicancha.png";
import Calendar from 'react-calendar';
import React, { useState } from 'react';


class Reservas_Multicancha extends Component {
    constructor(){
        super();
        
    }
    render(){
        return(
            <div style={{margin: '50px'}}>
            <div class="container mx-auto">
                <h4>Reserva de Sala de Eventos:</h4>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
                <div class="col">
                    <div class="card" style={{ margin: 10}}>
                        <img src={MultiCancha} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col d-flex justify-content-center"><p>La multicancha del condominio puede ser reservada por un máximo de 2 horas, puedes jugar fútbol, basketball o volleyball.</p></div>
                            </div>
                            <div class="d-flex">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{margin: 30}}>
                    <div class="card" style={{ margin: 10}}>
                        <h5>Selecciona una fecha en la que quieras reservar:</h5>
                            <Calendar />
                            <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => {alert('¡Tu reserva ha sido realizada!')}}>Reservar</button></div>
                                </div>
                        </div>
                    </div>
                    <div class="row">
                    <div>
                    
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Reservas_Multicancha;