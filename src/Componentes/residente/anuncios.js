import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_anuncios";


import {gql, useQuery} from '@apollo/client';

function Anuncios() {
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

  const {data: dataAnuncios, loading: loadingAnuncios, error: errorAnuncios} = useQuery(GET_ANUNCIOS);
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


  const [filter, setFilter] = React.useState("");
  var filteredData;

  if(loadingAnuncios){
    filteredData = data;
  }else{
      filteredData = dataAnuncios.getAnuncios;
  }


  return (
    <div className="container mx-auto" style={{margin: '40px'}}>

      <Card>
        <DataTable
          title="Anuncios"
          columns={columns}
          data={filteredData}
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
export default Anuncios;

