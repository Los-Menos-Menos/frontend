import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_gastos";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SearchIt = ({ onChange, value }) => (
  <input
    placeholder="Search"
    onChange={e => onChange(e)}
    value={value.toLowerCase()}
  />
);




function Gastoscomunes_residente() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      name: "Tipo",
      selector: "tipo",
      sortable: true
    },
    {
      name: "Valor",
      selector: "valor",
      sortable: true,
      right: true
    },
    {
      name: "Fecha",
      selector: "year",
      sortable: true
    },
    {
      name: "Pagado",
      selector: "pagado",
      sortable: true,
      right: true
    },
    {
      name: "Morosidad",
      selector: "morosidad",
      sortable: true,
      right: true
    },
    {
      name: "Observación",
      cell: row => (
        <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={handleShow}>Agregar</button>
  
      )
  }
  ];
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item => item.title.toLowerCase().includes(filter));

  return (
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
                type="text"
                placeholder="Ingrese Observación"
                required
                autoFocus
            />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
        <Button variant="primary"        onClick={() => {alert("Observación agregada"); handleClose();}}>
            Agregar
        </Button>
        </Modal.Footer>
      </Modal>

      <div className="container mx-auto" style={{margin: '40px'}}>
        <Card>
          <DataTable
            title="Gastos Comunes"
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
              </div>
            }
            
          />
        </Card>
        <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('¡Has pagado la totalidad de tus deudas!')}}>Ir a Pagar</button></div>
      </div>
    </> 
  );
}
export default Gastoscomunes_residente;

