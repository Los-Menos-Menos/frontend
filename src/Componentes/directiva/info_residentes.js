import React, {useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_residentes";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useMutation, gql, useQuery} from '@apollo/client';


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
  const [show2, setShow2] = useState(false);  

  function handleShow2(data){
    setShow2(true);
    SetFormStateUpdateMulta({
        id: data.id,
        detalle: data.detalle,
        fecha: data.fecha,
        monto: data.monto,
        pagado: data.pagado,
        residente: data.residente
    });
}

const [formStateUpdateMulta, SetFormStateUpdateMulta] = React.useState({ 
  id: '',
  detalle: '',
  fecha: '',
  monto: '',
  pagado: '',
  residente :''
});

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

    const GET_ESTADOS_CUENTAS = gql`
        query getEstadosDeCuentas {
            getEstadosDeCuentas {
                id
                morosidad
                multas 
                residente
            }
        }
    `;

    const GET_GASTOS_COMUNES = gql`
        query getGastosComunes {
            getGastosComunes {
                id
                detalle
                fecha
                monto
                pagado
                residente
            }
        }
    `;

    const GET_MULTAS = gql`
        query GetMultas {
            getMultas {
            id
            residente
            fecha
            monto
            detalle
            pagado
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

  const {data: dataResidentes, loading: loadingResidentes, error: errorResidentes} = useQuery(GET_RESIDENTES);
  const {data: dataEstadosDeCuenta, loading: loadingEstadosDeCuenta, error: errorEstadosDeCuenta} = useQuery(GET_ESTADOS_CUENTAS);
  const {data: dataGastosComunes, loading: loadingGastosComunes, error: errorGastosComunes} = useQuery(GET_GASTOS_COMUNES);
  const {data: dataMultas, loading: loadingMultas, error: errorMultas} = useQuery(GET_MULTAS);
  const {data: dataReservas, loading: loadingReservas, error: errorReservas} = useQuery(GET_RESERVAS);

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Rut",
      selector: row => row.rut,
      omit: true
    },
    {
      name: "Morosidad",
      selector: row => (
          loadingEstadosDeCuenta ? "Cargando..." :
          dataEstadosDeCuenta.getEstadosDeCuentas.map((estado) => {
              if (estado.residente === row.id){
                  if (estado.morosidad === true){
                      return "Sí"
                  }else{
                      return "No"
                  }
              }
          })
          
      ),
      sortable: true
  },
    /*
    {
      name: "Multa",
      cell: row => (
        <button class="btn btn-primary" type="button" style={{margin: 10}} onClick={handleShow} >Agregar</button>
  
      )
  }*/
  ];
  
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  var filteredDataR;

  if (loadingResidentes) {
    filteredDataR = data
  }
  else{
      //concatenar los datos de residentes y conserjes
      filteredDataR = dataResidentes.getResidentes;
  }

  const ExpandedComponent2 = ({data}) => (
    <div className="card" style={{width: '100%'}}>
        <strong>Gastos Comunes:</strong>
        {
            loadingGastosComunes ? () =>"Cargando...":
            dataGastosComunes.getGastosComunes.length === 0 ?
                "No hay gastos comunes registrados" :
                dataGastosComunes.getGastosComunes.map((gasto) => {
                    if (gasto.residente === data.id){
                        return (
                            <div className="card-body">
                                <p className="card-text">Monto: ${gasto.monto}</p>
                                <p className="card-text">Descripción: {gasto.detalle}</p>
                                <p className="card-text">Fecha: {gasto.fecha}</p>
                                <>------------------------------------------------------</>
                            </div>
                        )
                    }
                })
            
        }
        <strong>Multas:</strong>
            <ul>
            {
            loadingMultas ? () =>"Cargando...":
            dataMultas.getMultas.length === 0 ?
                "No hay multas registradas" :
                dataMultas.getMultas.map((multa) => {
                    if (multa.residente === data.id){
                        return (
                            <div className="card-body">
                                <p className="card-text">Monto: ${multa.monto}</p>
                                <p className="card-text">Descripción: {multa.detalle}</p>
                                <p className="card-text">Fecha: {multa.fecha}</p>

                                <p className="card-text">Pagado: {multa.pagado ? "Si" : "No"}</p>
                                <button onClick={()=>{
                                    console.log(multa, "Multa en boton");
                                    handleShow2(multa);
                                    }} style={{marginLeft:'20px', border: 'none', borderRadius:'3px', padding: '0!important', fontFamily: 'arial, sans-serif,', color: '#069', cursor: 'pointer'}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </button>
                                <button onClick={() => {alert("Multa borrada")}} style={{marginLeft:'20px', border: 'none', borderRadius:'3px', padding: '0!important', fontFamily: 'arial, sans-serif,', color: '#069', cursor: 'pointer'}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                                <br></br>
                                <>------------------------------------------------------</>
                            </div>
                        )
                    }
                })
            
        }
            </ul>
        <br></br>
        <strong>Reservas:</strong> 
        {
            loadingReservas ? () =>"Cargando...":
            dataReservas.getReservas.length === 0 ?
                "No hay reservas registradas" :
                dataReservas.getReservas.map((reserva) => {
                    if (reserva.residente === data.id){
                        return (
                            <div className="card-body">
                                <p className="card-text">Reserva:  
                                {
                                    reserva.instalacion === "6330d229c951d540fe470e4d" ?    "Estacionamiento" :
                                    "popo"
                                }
                                </p>
                                <p className="card-text">Pagado: {reserva.pagado ? "Si" : "No"}
                                </p>
                                <p className="card-text">Fecha: {reserva.fecha}</p>
                                <>------------------------------------------------------</>
                            </div>
                        )
                    }
                })
            
        }
    </div>
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
          data={filteredDataR}
          pagination
          subHeader
          expandableRows
          expandableRowsComponent={ExpandedComponent2}
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

