import { useState } from "react";
import EspaciosComunes from"../../assets/img/espacios_comunes.png";
import Calendar from 'react-calendar';
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import data from './data/data_reservas.js';


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


function Admin_Quincho() {
    const dataQuincho = data.filter(item => item.instalacion == "Quincho");
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
                <div class="row">
                <div>
                
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
                    />
                </Card>
            </div>
        </div>
        </>
    );
}

export default Admin_Quincho;