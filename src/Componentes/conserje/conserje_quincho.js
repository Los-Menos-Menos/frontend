import React, { useState } from "react";
import EspaciosComunes from"../../assets/img/espacios_comunes.png";
import Calendar from 'react-calendar';
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from '@mui/material/Card';
import DataTable from "react-data-table-component";
import dataReser from "./data/data_reservass.js"
import dataResi from "./data/datac_residentes.js"

import {useMutation, gql, useQuery} from '@apollo/client';


const columns = [
    {
      name: "Residente",
      selector: "title",
      sortable: true
    },
    {
      name: "Fecha",
      selector: "year",
      sortable: true,
      right: true
    },
    {
      name: "Pagado",
      selector: "pagado",
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

function Conserje_Quincho() {

    const ADD_RESERVA = gql`
        mutation AddReserva(
            $fecha: String,
            $instalacion: Instalacion,
            $pagado: Boolean,
            $residente: Residente
        ) {
            addReserva(input: {fecha: $fecha, instalacion: $instalacion, residente: $residente}) {
              fecha
              id
              instalacion{
                nombre
              }
              residente{
                rut
              }
            }
          }
        
    `;

    const GET_RESERVAS = gql`
        query getReservas {
            getReservas {
                id
                fecha
                pagado
                residente
                instalacion
            }
        }
    `;
    const GET_INSTALACIONES = gql`
        query getInstalaciones {
            getInstalaciones {
                id
                estado
                monto
                nombre
                reservas
            }
        }
    `;
    const GET_RESIDENTES = gql`
        query getResidentes {
            getResidentes {
                id
                email
                nombre
                rut
                estadodecuenta
            }
        }
    `;

    // QUERY GET
    const {data: dataReservas, loading: loadingReservas, error: errorReservas} = useQuery(GET_RESERVAS);
    const {data: dataResidentes, loading: loadingResidentes, error: errorResidentes} = useQuery(GET_RESIDENTES);
    const {data: dataInstalaciones, loading: loadingInstalaciones, error: errorInstalaciones} = useQuery(GET_INSTALACIONES);

    // MUTATION ADD
    const [addReserva, {data: dataAddReserva, loading: loadingAddReserva, error: errorAddReserva}] = useMutation(ADD_RESERVA,{
        refetchQueries: [{query: GET_RESERVAS},

        ]
    });

    const [formState, SetFormState] = React.useState({ //formulario de agregar reserva
        residente: '',
        fecha: '',
        pagado: '',
        instalacion: '',
    });
    const [formStateUpdateMulta, SetFormStateUpdateMulta] = React.useState({ 
        id: '',
        residente: '',
        fecha: '',
        pagado: '',
        instalacion :''
    });

    const SearchIt = ({ onChange, value }) => (
        <input
        placeholder="Search"
        onChange={e => onChange(e)}
        value={value.toLowerCase()}
        />
    );

    const columns = [
        {
            name: "Residente",
            selector: row => (
                loadingResidentes ? "Cargando..." :
                dataResidentes.getResidentes.map((resi) => {
                    if (resi.id === row.residente){
                        return resi.nombre;
                    }
                })
                
            ),
            sortable: true
        },
        {
            name: "Fecha",
            selector: row => row.fecha,
            sortable: true
        },
        {
            name: "Pagado",
            selector: row => row.pagado,
            omit: true
        },
        {
            name: "Instalacion",
            selector: row => (
                loadingInstalaciones ? "Cargando..." :
                dataInstalaciones.getInstalaciones.map((inst) => {
                    if (inst.id === row.instalacion){
                        return inst.nombre;
                    }
                })

            ),
            sortable: true
        }
    ];

    const [filter, setFilter] = React.useState("");
    var filteredDataReservas;
    var filteredDataResidentes;
    var filteredDataInstalaciones;
    var dataQuincho;
    if (loadingReservas || loadingResidentes || loadingInstalaciones) {
        filteredDataReservas = dataReser;
        filteredDataResidentes = dataResi;
        //dataQuincho = filteredDataReservas.filter(item => item.instalacion == "Quincho");
    }
    else{
        filteredDataReservas = dataReservas.getReservas;
        filteredDataResidentes = dataResidentes.getResidentes;
        filteredDataInstalaciones = dataInstalaciones.getInstalaciones;
        dataQuincho = filteredDataReservas.filter(item => item.instalacion == "63975576b22511639501753d");

    }


    //MODAL FORM
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Reservar para residente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Residente</Form.Label>
                <Form.Control
                    type="nombre"
                    placeholder="Nombre residente"
                    autoFocus
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Estado</Form.Label>
                <Form.Check 
                    type="checkbox"
                    id="custom-switch"
                    label="Pagado"
                    />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary"        onClick={() => {alert("Reserva realizada"); handleClose();}}>
                Agregar
            </Button>
            </Modal.Footer>
        </Modal>
        <div style={{margin: '50px'}}>

        <div class="container mx-auto">
            <h4>Reserva de Quincho:</h4>
        </div>
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
            <div class="col">
                <div class="card" style={{ margin: 10}}>
                    <img src={EspaciosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col d-flex justify-content-center"><p>Recuerde al residente que debe pasar por recepción a validar su reserva.</p></div>
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
                                <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={handleShow}>Reservar</button></div>
                            </div>
                    </div>
                </div>
            </div>
            <div style={{margin: '50px'}}>
                    <div className="container mx-auto" style={{margin:'5%'}}>
                        <Card>
                            <DataTable
                            title="Reservas del Quincho"
                            columns={columns}
                            data={dataQuincho}
                            pagination
                            subHeader
                            subHeaderComponent={
                                <div>
                                    <SearchIt 
                                    onChange={e => setFilter(e.target.value)}
                                    value={filter}
                                    />
                                    
                                </div>
                            }
                            />
                        </Card>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Conserje_Quincho;