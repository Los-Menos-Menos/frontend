import React, { Component} from "react";
import SalaEventos from"../../assets/img/salaeventos.png";
import Calendar from 'react-calendar';
import Card from '@mui/material/Card';
import DataTable from "react-data-table-component";
import data from "./data_reserve.js"

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

class Reservas_SalaEventos extends Component {
    constructor(){
        super();    
    }
    
    dataSalaEventos= data.filter(item => item.instalacion == "Sala de eventos");

    render(){
        return(
            <div style={{margin: '50px'}}>
                <div class="container mx-auto" >
                    <h4>Reserva de Sala de Eventos:</h4>
                </div>
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
                    <div class="col">
                        <div class="card" style={{ margin: 10}}>
                            <img src={SalaEventos} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <div class="col d-flex justify-content-center"><p>Nuestra Sala de Eventos cuenta con un lindo espacio para realizar tus reuniones familiares o cumpleaños. </p></div>
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
                    </div>
                    <div style={{margin: '50px'}}>
                        <div className="container mx-auto" style={{margin:'5%'}}>
                            <Card>
                                <DataTable
                                title="Reservas de la Sala de Eventos"
                                columns={columns}
                                data={this.dataSalaEventos}
                                pagination
                                />
                            </Card>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Reservas_SalaEventos;