import React, {useState} from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import dataR from "./data/datac_usuarios.js";
import dataResi from "./data/datac_residentes.js"

import {gql, useQuery} from '@apollo/client';


/*
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
  }
]; */


function InfoResidentes_Conserje() {
  const [show2, setShow2] = useState(false);  
  const handleClose2 = () => setShow2(false);
  function handleShow2(data){
      setShow2(true);
  }

  //queries tipo GET
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


  //QUERY GET
  const {data: dataResidentes, loading: loadingResidentes, error: errorResidentes} = useQuery(GET_RESIDENTES);
  const {data: dataEstadosDeCuenta, loading: loadingEstadosDeCuenta, error: errorEstadosDeCuenta} = useQuery(GET_ESTADOS_CUENTAS);
  const {data: dataGastosComunes, loading: loadingGastosComunes, error: errorGastosComunes} = useQuery(GET_GASTOS_COMUNES);
  const {data: dataMultas, loading: loadingMultas, error: errorMultas} = useQuery(GET_MULTAS);
  const {data: dataReservas, loading: loadingReservas, error: errorReservas} = useQuery(GET_RESERVAS);


  const SearchIt = ({ onChange, value }) => (
    <input
      placeholder="Search"
      onChange={e => onChange(e)}
      value={value.toLowerCase()}
    />
  );
  //columnas de la primera tabla: informacion de residentes
  const columns = [
  {
  name: "Nombre",
  selector: row => row.nombre,
  sortable: true
  },
  {
  name: "Estado Cuenta",
  selector: row => row.estadodecuenta,
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
  }
  ];

  const [filter, setFilter] = React.useState("");
  //var filteredData;
  var filteredDataResi;

  if (loadingResidentes || loadingEstadosDeCuenta || loadingMultas || loadingGastosComunes || loadingReservas) {
      filteredDataResi = dataResi;
  }
  else{
      //concatenar los datos de residentes y conserjes
      //filteredData = dataResidentes.getResidentes.concat(dataConserjes.getConserjes, dataDirectivas.getDirectivas, dataAdministradores.getAdministradores);
      filteredDataResi = dataResidentes.getResidentes;
  }

  const ExpandedComponent = ({data}) => (
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
    <div className="container mx-auto" style={{margin:'5%'}}>

      <Card>
        <DataTable
          title="Información Residentes"
          columns={columns}
          data={filteredDataResi}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
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
  );
}
export default InfoResidentes_Conserje;

