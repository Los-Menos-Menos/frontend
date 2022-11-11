import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_anuncios";

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
  }
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


function Anuncios() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

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

