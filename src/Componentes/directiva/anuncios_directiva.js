import React,{Component} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_anuncios";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SearchIt = ({ onChange, value }) => (
  <input
    placeholder="Search"
    onChange={e => onChange(e)}
    value={value.toLowerCase()}
  />
);
const columns = [
    {
        name: "Nombre",
        selector: "title",
        sortable: true
    },
    {
        name: "Rol",
        selector: "rol",
        sortable: true,
        right: true
    },
    {
        name: "Fecha",
        selector: "year",
        sortable: true,
        right: true
    },
];

const ExpandedComponent = ({ data }) => (
    <div className="card" style={{width: '100%'}} >
      <p> 
        <strong>Fecha:</strong> {data.year}
        <br />
        <strong>Mensaje:</strong> {data.runtime}
        <br />
      </p>
    </div>
  );

class Anuncios_Directiva extends Component {
    constructor(){
        super();
        this.state = {
            show: false,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    
	filter = "";
	filteredData =  data.filter(item =>
		item.title.toLowerCase().includes(this.filter)
	);

    SearchIt = ({ onChange, value }) => (
        <input
            placeholder="Search"
            onChange={e => onChange(e)}
            value={value.toLowerCase()}
        />
    );

  
    render() {
        return (
            <>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agregar Anuncio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre Autor"
                        required
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Anuncio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese Anuncio"
                        required
                        autoFocus
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary"        onClick={() => {alert("Anuncio creado"); this.handleClose();}}>
                    Agregar
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="container">
				<Card>
					<DataTable
						title="Anuncios Directiva"
						columns={columns}
						data={this.filteredData}
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
						pagination
						subHeader
						subHeaderComponent={
							<div>
								<this.SearchIt 
								onChange={e => this.filter = e.target.value}
								value={this.filter}
								/>
								<Button variant="contained" onClick={this.handleShow}e={{margin: 10}}>Nuevo Anuncio</Button>
							</div>
						}
					/>
				</Card>
			</div>
            </>
        );
    }
}

export default Anuncios_Directiva;

