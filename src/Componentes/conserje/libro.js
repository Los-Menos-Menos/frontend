import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data/data";

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import {useMutation, gql} from '@apollo/client';


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
        selector: "title",
        sortable: true
    },
    {
        name: "Fecha",
        selector: "year",
        sortable: true
    },
    {
        name: "Instalación",
        selector: "runtime",
        sortable: true,
        right: true
    },
    {
        name: "Pagado",
        selector: "director",
        sortable: true
    }
];
//Mutation AddReserva
const ADD_RESERVA = gql`
mutation addReserva(
    $fecha: String!, 
    $instalacion: Instalacion,
    $pagado: Boolean!,
    $residente: Residente
) {
    addReserva(input: {fecha: $fecha, instalacion: $instalacion, pagado: $pagado, residente: $residente}) {
        fecha
        instalacion
        pagado
        residente
    }
}
`;

function Libro() {
    // ADDRESERVA
    const [addReserva, {data, loading, error}] = useMutation(ADD_RESERVA);
    const [formState, SetFormState] = React.useState({
        fecha: '',
        instalacion: '',
        pagado: '',
        residente: ''
    });

    //MODAL FORM
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //TABLE
    const [filter, setFilter] = React.useState("");
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(filter)
    );

    return (
        <div className="container mx-auto" style={{margin: '40px'}}>
        <Form onSubmit={e =>{
            e.preventDefault();
            addReserva({variables: {
                fecha: formState.fecha, 
                instalacion: formState.instalacion, 
                pagado: formState.pagado, 
                residente: formState.residente}});
        }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Evento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Residente</Form.Label>
                            <Form.Control
                                type="nombre"
                                placeholder="Nombre residente"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="fecha"
                                placeholder="Fecha"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Instalación</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Estacionamiento</option>
                                <option value="2">Sala de Eventos</option>
                                <option value="3">Quincho</option>
                                <option value="4">MultiCancha</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Estado</Form.Label>
                            <Form.Check 
								type="checkbox"
								id="custom-switch"
								label="Pagado"
							/>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary"  type="submit" onClick={handleClose}>
                        Agregar
                    </Button>
                </Modal.Footer>
            </Modal>
            </Form>
            <Card>
                <DataTable
                    title="Libro de Eventos"
                    columns={columns}
                    data={filteredData}
                    pagination
                    subHeader
                    subHeaderComponent={
                        <div>
							<SearchIt 
							onChange={e => setFilter(e.target.value)}
							value={filter}
							/>
							<Button variant="contained" style={{margin: 10}} onClick={handleShow} >Nuevo Evento</Button>  
                        </div>
                    }
                />
            </Card>
        </div>
    );
}
export default Libro;

