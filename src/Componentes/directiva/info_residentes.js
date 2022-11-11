import React, {useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_residentes";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SearchIt = ({ onChange, value }) => (
  <input
    placeholder="Search"
    onChange={e => onChange(e)}
    value={value.toLowerCase()}
  />
);

const ExpandedComponent = ({ data }) => (
  <div className="card" style={{width: '100%'}} >
    <strong>Gastos Comunes:</strong> 
    <ul>{
    data.gastos.map((gasto, index) => (
      <li key={index}>{gasto}</li>
    ))
    }
    </ul>
    <strong>Multas:</strong> {data.multas.length > 0 ? 
      <ul>{
        data.multas.map((multa, index) => (
          <li key={index}>{multa}</li>
        ))
        }
        </ul>
    : "No hay multas"}
    <br></br>
    <strong>Reservas:</strong> 
    <ul>{
    data.reservas.map((reserva, index) => (
      <li key={index}>{reserva}</li>
    ))
    }
    </ul>
  </div>
);

function InfoResidentes_Directiva() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      name: "Nombre",
      selector: "title",
      sortable: true
    },
    {
      name: "Depto",
      selector: "depto",
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
      name: "Multa",
      cell: row => (
        <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={handleShow} >Agregar</button>
  
      )
  }
  ];
  
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Agregar Multa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Valor</Form.Label>
          <Form.Control
              type="text"
              placeholder="Ingrese valor de la multa"
              required
              autoFocus
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Motivo</Form.Label>
          <Form.Control
              type="text"
              placeholder="Ingrese motivo de la multa"
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
      <Button variant="primary"        onClick={() => {alert("Multa agregada! >:)"); handleClose();}}>
          Agregar
      </Button>
      </Modal.Footer>
  </Modal>
    <div className="container">

      <Card>
        <DataTable
          title="Información Residentes"
          columns={columns}
          data={filteredData}
          pagination
          subHeader
          expandableRows
          expandableRowsComponent={ExpandedComponent}
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
export default InfoResidentes_Directiva;

