import React, { Component, useState } from "react";
import Estacionamiento from"../../assets/img/estacionamiento.png";
import Calendar from 'react-calendar';
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import data from './data_reserve.js';

const columns = [
    {
      name: "Fecha",
      selector: "year",
      sortable: true,
      right: true
    },
    {
      name: "Instalacion",
      selector: "instalacion",
      sortable: true,
      right: true
    },
];
class Reservas_Estacionamiento extends Component {
    constructor(){
        super();
    }
    dataEst= data.filter(item => item.instalacion == "Estacionamiento");
    render(){
        return(
            <div style={{margin: '50px'}}>
            <div class="container mx-auto">
                <h4>Reserva de Estacionamiento:</h4>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
                <div class="col">
                    <div class="card" style={{ margin: 10}}>
                        <img src={Estacionamiento} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col d-flex justify-content-center"><p>Reserva un estacionamiento para tus visitas y asegúrate de que lleguen a un lugar seguro.</p></div>
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
                            <Calendar 
                            tileDisable={
                                ({date, view}) => 
                                view === 'month' && date.getDay() === 0
                                } />
                            <div class="card-body p-4">
                                    <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={() => {alert('¡Tu reserva ha sido realizada!')}}>Reservar</button></div>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{margin: '50px'}}>
                        <div className="container mx-auto" style={{margin:'5%'}}>
                            <Card>
                                <DataTable
                                title="Reservas de Estacionamiento"
                                columns={columns}
                                data={this.dataEst}
                                pagination
                                />
                            </Card>
                        </div>
                </div>
            </div>
          
        );
    }
}

export default Reservas_Estacionamiento;