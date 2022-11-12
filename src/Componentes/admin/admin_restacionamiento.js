import { useState } from "react";
import Estacionamiento from"../../assets/img/estacionamiento.png";
import Calendar from 'react-calendar';
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Admin_Estacionamiento() {
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre Invitado</Form.Label>
                    <Form.Control
                        type="nombre2"
                        placeholder="Persona que usará el estacionamiento"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rut Invitado</Form.Label>
                    <Form.Control
                        type="rut"
                        placeholder="Rut de quien usara el estacionamiento"
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
                    <h4>Reserva de Estacionamiento:</h4>
                </div>
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center">
                    <div class="col">
                        <div class="card" style={{ margin: 10}}>
                            <img src={Estacionamiento} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                            <div class="card-body p-4">
                                <div class="row">
                                    <div class="col d-flex justify-content-center"><p>Recuerde al residente que su invitado debe pasar por recepción a validar su reserva.</p></div>
                                </div>
                                <div class="d-flex">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container" style={{margin: 30}}>
                        <div class="card" style={{ margin: 10}}>
                                <h5>Seleccione la fecha:</h5>
                                <Calendar />
                                <div class="card-body p-4">
                                        <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" onClick={handleShow} >Reservar</button></div>
                                    </div>
                            </div>
                        </div>
                        <div class="row">
                        <div>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Admin_Estacionamiento;