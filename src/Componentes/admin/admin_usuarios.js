import React, {useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import dataR from "./data/data_usuarios.js";
import dataResi from "./data/data_residentes.js";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {useMutation, gql, useQuery} from '@apollo/client';

function Admin_usuarios() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //mutation add residente
    const ADD_RESIDENTE = gql`
        mutation AddResidente(
            $email: String,
            $nombre: String,
            $rut: Int
        ) {
            addResidente(input: {email: $email, nombre: $nombre, rut: $rut}) {
              email
              id
              nombre
              rut
            }
          }
        
    `;

    const GET_ESTADO_CUENTA = gql`
        query Query($getEstadoDeCuentaId: ID!) {
            getEstadoDeCuenta(id: $getEstadoDeCuentaId) {
                morosidad
                multas {
                    detalle
                    fecha
                    monto
                    pagado
                    id
                }
            }
        }
    `

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

    //mutation delete residente
    const DELETE_RESIDENTE = gql`
        mutation Mutation($deleteResidenteId: ID!) {
            deleteResidente(id: $deleteResidenteId) {
                message
            }
        }
    `;

    const ADD_MULTA = gql`
        mutation addMulta(
            $detalle: String!,
            $fecha: String!,
            $monto: Int!,
            $pagado: Boolean!,
            $residente: Residente!
        ) {
            addMulta(input: {detalle: $detalle, fecha: $fecha, monto: $monto, pagado: $pagado, residente: $residente}) {
                detalle
                fecha
                monto
                pagado
                residente{
                    rut
                }
            }
        }
    `;




    //QUERY GETRESIDENTES
    const {data: dataResidentes, loading: loadingResidentes, error: errorResidentes} = useQuery(GET_RESIDENTES);
    const {data: dataEstadoDeCuenta, loading: loadingEstadoDeCuenta, error: errorEstadoDeCuenta} = useQuery(GET_ESTADO_CUENTA,{
        variables:{
            getEstadoDeCuentaId: "63335462cedcef070b0430f6"
        }
    });

    if (!loadingEstadoDeCuenta){
        console.log(dataEstadoDeCuenta.getEstadoDeCuenta);
    }
    //MUTATION's
    const [addMulta, {data: dataMulta, loading: loadingMulta, error: errorMulta}] = useMutation(ADD_MULTA);
    const [deleteResidente, {data: dataDeleteResidente, loading: loadingDeleteResidente, error: errorDeleteResidente}] = useMutation(DELETE_RESIDENTE,{
        refetchQueries: [{query: GET_RESIDENTES},
        ]
    });
    const [addResidente, {data: dataAddResidente, loading: loadingAddResidente, error: errorAddResidente}] = useMutation(ADD_RESIDENTE,{
        refetchQueries: [{query: GET_RESIDENTES},

        ]
    });
    const [formState, SetFormState] = React.useState({
        email: '',
        nombre: '',
        rut: 0
    });

    const SearchIt = ({ onChange, value }) => (
        <input
        placeholder="Search"
        onChange={e => onChange(e)}
        value={value.toLowerCase()}
        />
    );
    //columnas de primera tabla: gestion de usuarios
    const columns = [
        {
            name: "Usuario",
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
            name: "Tipo de usuario",
            selector: row => row.__typename,
            sortable: true
        },
        {
            name: "Id",
            selector: row => row.id,
            omit: true
        },
        {
            name: "Acciones",
            cell: (row) => (
                <button className="btn btn-danger"  onClick={e => {
                    e.preventDefault();
                    deleteResidente({variables: {deleteResidenteId: row.id}});
                }}>Deshabilitar</button>    
            )
        }
    ];
    //columnas de segunda tabla: informacion de residentes
    const columnsResi = [
        {
          name: "Nombre",
          selector: row => row.nombre,
          sortable: true
        },
        {
          name: "Morosidad",
          selector: row => row.morosidad,
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
    var filteredData;
    var filteredDataResi;
    if (loadingResidentes || loadingMulta || loadingDeleteResidente || loadingAddResidente) {
        filteredData = dataR
        filteredDataResi = dataResi;
    }
    else{
        filteredData = dataResidentes.getResidentes;
    }
    filteredDataResi = dataResi
    
    const ExpandedComponent2 = ({dataResi}) => (
        <div className="card" style={{width: '100%'}} >
            <strong>Gastos Comunes:</strong> 
            <ul>{
                dataResi.gastos.map((gasto, index)=>(
                    <li key={index}>{gasto}</li>
                ))
            }
            </ul>
            <strong>Multas:</strong> {dataResi.multas.length > 0 ? 
                <ul>{
                dataResi.multas.map((multa, index) => (
                    <li key={index}>
                        {multa}
                        <button onClick={handleShow2} style={{marginLeft:'20px', border: 'none', borderRadius:'3px', padding: '0!important', fontFamily: 'arial, sans-serif,', color: '#069', cursor: 'pointer'}}> 
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
                    </li>
                    
                ))
                }
                </ul>
            : "No hay multas"}
            <br></br>
            <strong>Reservas:</strong> 
            <ul>{
            dataResi.reservas.map((reserva, index) => (
                <li key={index}>{reserva}</li>
            ))
            }
            </ul>
        </div>
        );
    

    return (
        <>
        <Form>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Multa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Valor</Form.Label>
                    <input value={formState.monto} onChange={e=>
                        SetFormState({
                            ...formState, monto: e.target.value
                        })
                    } type= "text" placeholder="Ingrese valor de la multa"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Motivo</Form.Label>
                    <input value={formState.detalle} onChange={e=>
                        SetFormState({
                            ...formState, detalle: e.target.value
                        })
                    } type= "text" placeholder="Ingrese motivo de la multa"  />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary"   onClick={() => {alert("Multa agregada! >:)"); handleClose();}}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
        </Form>
        
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Multa</Modal.Title>
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
                <Button variant="secondary" onClick={handleClose2}>
                    Cerrar
                </Button>
                <Button variant="primary"  onClick={() => {alert("Multa modificada! >:)"); handleClose();}}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
                <DataTable
                title="Gestión de Usuarios"
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
        </div>
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
            <form onSubmit={e =>{
                const rut = parseInt(formState.rut, 10);
                e.preventDefault();
                addResidente({
                    variables: {
                        nombre: formState.nombre,
                        email: formState.email,
                        rut: rut
                    }
                })


/*                     // check usertype and use the correct apollo query
                    if (TipoUsuario.value === "Residente"){
                        console.log({
                            nombre: NombreUsuario.value,
                            email: EmailUsuario.value,
                            rut: RutUsuario.value
                        })
                        addResidente({
                            variables:{
                                nombre: NombreUsuario.value,
                                email: EmailUsuario.value,
                                rut: RutUsuario.value
                            }
                        });
                    }
                    alert("Usuario creado"); */
                }}>
                <h4>Nuevo Usuario</h4>
                <div className="form-group">
                    <label for="NombreUsuario"></label>
                    <input value={formState.nombre} type="text" className="form-control"  name="nombre" placeholder="Nombre" onChange={e=>
                        SetFormState({
                            ...formState, nombre : e.target.value
                        })
                    }/>  
                </div>
                {/* <div className="form-group">
                    <label for="emailUsuario"></label>
                    <input  type="email" className="form-control" id="emailUsuario"  placeholder="Email" onChange={e=>
                        SetFormState({
                            ...formState, email : e.target.value
                        })
                    } />
                </div> */}
                <div className="form-group">
                    <label for="EmailUsuario"></label>
                    <input type="text" className="form-control" name="email" placeholder="Email" onChange={e=>
                        SetFormState({
                            ...formState, email : e.target.value
                        })
                    } />
                </div>
                <div className="form-group">
                    <label for="RutUsuario"></label>
                    <input type="number" className="form-control" name="rut" placeholder="Rut" onChange={e=>
                        SetFormState({
                            ...formState, rut : e.target.value
                        })
                    } />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1"></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1"></label>
                    <select class="form-control" id="usertype" placeholder="Tipo de usuario">
                        <option disabled={true} value="">
                        --Elige un tipo de usuario--
                        </option>
                        <option>Residente</option>
                        <option>Conserje</option>
                        <option>Directiva</option>
                        <option>Administrador</option>
                    </select>
                </div>
                <button variant="contained" type='submit' style={{margin: 10}}>Crear usuario</button>
            </form>
            </Card>
        </div>
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
                <DataTable
                title="Informacion de Residentes"
                columns={columnsResi}
                data={filteredDataResi}
                expandableRows
                expandableRowsComponent={ExpandedComponent2}
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
        </>
        );
}

export default Admin_usuarios;