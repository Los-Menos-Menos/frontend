import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data/datac_residentes";

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
];

const ExpandedComponent = ({ data }) => (
  <div className="card" style={{width: '100%'}} >
    <p> 
      <strong>Gastos Comunes:</strong> {data.gastos}
      <br />
      <strong>Multas:</strong> {data.multas}
      <br />
      <strong>Reservas:</strong> {data.reservas}
      <br />
    </p>
  </div>
);

function InfoResidentes_Conserje() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container mx-auto" style={{margin:'5%'}}>

      <Card>
        <DataTable
          title="Información Residentes"
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
export default InfoResidentes_Conserje;

