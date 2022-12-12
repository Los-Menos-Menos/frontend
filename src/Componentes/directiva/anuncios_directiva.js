import React,{useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_anuncios";
import {gql, useQuery} from '@apollo/client';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SearchIt = ({ onChange, value }) => (
    <input
      placeholder="Search"
      onChange={e => onChange(e)}
      value={value.toLowerCase()}
    />
  );

function Anuncios_Directiva(){
    const [show, setShow] = useState(false);

    function handleShow(data){
        setShow(true);
        SetFormStateUpdateMulta({
            id: data.id,
            detalle: data.detalle,
            fecha: data.fecha,
            monto: data.monto,
            pagado: data.pagado,
            residente: data.residente
        });
    }

    function handleClose(){
        setShow(false);
    }

    const [formStateUpdateMulta, SetFormStateUpdateMulta] = React.useState({ 
        id: '',
        detalle: '',
        fecha: '',
        monto: '',
        pagado: '',
        residente :''
      });

    const [filter, setFilter] = React.useState("");
    var filteredData;
      
      const GET_ANUNCIOS = gql`
              query getAnuncios {
                  getAnuncios {
                      id
                      titulo
                      mensaje
                      fecha
                      autor
                  }
              }
          `;
          const {data: dataAnuncios, loading: loadingAnuncios, error: errorAnuncios} = useQuery(GET_ANUNCIOS);
      
      const columns = [
          {
              name: "Titulo",
              selector: row => row.titulo,
              sortable: true
          },
          {
              name: "Nombre",
              selector: row => row.autor,
              sortable: true,
              right: true
          },
          {
              name: "Fecha",
              selector: row => row.fecha,
              sortable: true,
              right: true
          },
      ];

      var filteredDataR;

        if (loadingAnuncios) {
            filteredDataR = data
        }
        else{
            //concatenar los datos de residentes y conserjes
            filteredDataR = dataAnuncios.getAnuncios;
        }
      
      const ExpandedComponent = ({ data }) => (
          <div className="card" style={{width: '100%'}} >
            <p> 
              <strong>Fecha:</strong> {
                  loadingAnuncios ? () => "Cargando..." : 
                  dataAnuncios.getAnuncios.map(anuncio => {
                      if(anuncio.id == data.id){
                          return (
                              <div className="card-body">
                                  <p className="card-text">Fecha: {anuncio.fecha}</p>
                              </div>
                          )
                      }
                  
              })}
              <br />
              <strong>Mensaje:</strong> {
                  loadingAnuncios ? () => "Cargando..." : 
                  dataAnuncios.getAnuncios.map(anuncio => {
                      if(anuncio.id == data.id){
                          return (
                              <div className="card-body">
                                  <p className="card-text">Mensaje: {anuncio.mensaje}</p>
                              </div>
                          )
                      }
                  
              })}
              <br />
            </p>
          </div>
        );

        return(
            <>
            <Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agregar Anuncio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
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
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary"        onClick={() => {alert("Anuncio creado"); handleClose();}}>
                    Agregar
                </Button>
                </Modal.Footer>
            </Modal>
            </Form>
            <div className="container">
				<Card>
					<DataTable
						title="Anuncios Directiva"
						columns={columns}
						data={filteredDataR}
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
						pagination
						subHeader
						subHeaderComponent={
							<div>
								<SearchIt 
								onChange={e => filter = e.target.value}
								value={filter}
								/>
								<Button variant="contained" onClick={handleShow}e={{margin: 10}}>Nuevo Anuncio</Button>
							</div>
						}
					/>
				</Card>
			</div>
            </>
        )
}

export default Anuncios_Directiva;

