import React,{useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data/data_anuncios";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {useMutation, gql, useQuery} from '@apollo/client';


function Anuncios_Admin() {
    const GET_ANUNCIOS = gql`
    query GetAnuncios {
        getAnuncios {
        id
        titulo
        fecha
        autor
        mensaje
        }
    }
    `;

    const ADD_ANUNCIOS = gql`
    mutation addAnuncios(
        $titulo: String!
        $mensaje: String!
        $fecha: String!
        $autor: String!
    ) {
        addAnuncio(input: {titulo: $titulo, mensaje: $mensaje, fecha: $fecha, autor: $autor}) {
            id
            titulo
            mensaje
            fecha
            autor
        }
    }
    `;


    const {data: dataAnuncios, loading: loadingAnuncios, error: errorAnuncios} = useQuery(GET_ANUNCIOS);
    const [addAnuncio, {data: dataAddAnuncios, loading: loadingAddAnuncios, error: errorAddAnuncios}] = useMutation(ADD_ANUNCIOS,
        {
            refetchQueries:[{query: GET_ANUNCIOS}],

        });
    const [formState, SetFormState] = React.useState({
        titulo: "",
        mensaje: "",
        fecha: "",
        autor: ""
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
        name: "Usuario",
        selector: row => row.autor,
        sortable: true
    },
    {
        name: "Titulo",
        selector: row => row.titulo,
        sortable: true
    },
    {
        name: "Fecha",
        selector: row => row.fecha,
        sortable: true,
        right: true
    },
    {
        name: "Id",
        selector: row => row.id,
        omit: true
    }
    ];

    const ExpandedComponent = ({ data }) => (
    <div className="card" style={{width: '100%'}}>
        <strong>Anuncio:</strong>
        {
            loadingAnuncios ? () => "Cargando...":
            dataAnuncios.getAnuncios.map((anuncio) => {
                if(anuncio.id == data.id){
                    return (
                        <div>
                            <p>{anuncio.mensaje}</p>
                        </div>
                    )
                }
            })
        }
        
    </div>

    );

    const rowPreExpanded = row => row.defaultExpanded
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [filter, setFilter] = React.useState("");
    var filteredData;

    if(loadingAnuncios || loadingAddAnuncios){
        filteredData = data;
    }else{
        filteredData = dataAnuncios.getAnuncios;
    }


  
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <form onSubmit ={
                e => {
                    e.preventDefault();
                    addAnuncio({
                        variables: {
                            titulo: formState.titulo,
                            mensaje: formState.mensaje,
                            fecha: formState.fecha,
                            autor: formState.autor
                        }
                    });
                    if(!loadingAddAnuncios){
                        alert("Anuncio agregado");
                        SetFormState({
                            titulo: "",
                            mensaje: "",
                            fecha: "",
                            autor: ""
                        });
                        handleClose();
                    }
                    
                }
            }>
                <Modal.Header closeButton>
                <Modal.Title>Agregar Anuncio</Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-fluid">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titulo</Form.Label>
                        <input value={formState.titulo} onChange={e=>
                            SetFormState({
                                ...formState, titulo: e.target.value
                            })
                        } type= "textarea" placeholder="Ingrese Titulo del anuncio"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="mr-3">Autor</Form.Label>
                        <input value={formState.autor} onChange={e=>
                            SetFormState({
                                ...formState, autor: e.target.value
                            })
                        } type= "text" placeholder="Nombre Autor"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="mr-3">Fecha</Form.Label>
                        <input value={formState.fecha} onChange={e=>
                            SetFormState({
                                ...formState, fecha: e.target.value
                            })
                        } type= "text" placeholder="Ingrese fecha de hoy"  />
                    </Form.Group>
                    <Form.Label className="mr-3">Anuncio</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <textarea value={formState.mensaje} onChange={e=>
                            SetFormState({
                                ...formState, mensaje: e.target.value
                            })
                        } type= "text" placeholder="Ingrese Anuncio"  />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
                </Modal.Footer>
            </form>
        </Modal>
        <div className="container">
            <Card>
                <DataTable
                    title="Anuncios"
                    columns={columns}
                    data= {filteredData}
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
                    }                />
            </Card>
        </div>
        </>
    );
}


export default Anuncios_Admin;

