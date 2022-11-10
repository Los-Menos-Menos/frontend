import { Component } from "react";
import SalaEventos from"../../assets/img/salaeventos.png";
import Calendar from 'react-calendar';
import React, { useState } from 'react';


class Reservas_SalaEventos extends Component {
    constructor(){
        super();
        
    }
    render(){
        return(
            <div class="container">

            <div class="container">
                <h4>Selecciona una fecha en la que quieras reservar:</h4>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col">
                    <div class="card" style={{ margin: 10}}>
                        <img src={SalaEventos} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col d-flex justify-content-center"><p>Nuestra Sala de Eventos cuenta con un lindo espacio para realizar tus reuniones familiares o cumpleaños. </p></div>
                            </div>
                            <div class="d-flex">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{margin: 30}}>
                    <div class="card" style={{ margin: 10}}>
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

export default Reservas_SalaEventos;