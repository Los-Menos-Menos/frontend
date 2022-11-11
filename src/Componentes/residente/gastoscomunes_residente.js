import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_gastos";

const SearchIt = ({ onChange, value }) => (
  <input
    placeholder="Search"
    onChange={e => onChange(e)}
    value={value.toLowerCase()}
  />
);
const columns = [
  {
    name: "Tipo",
    selector: "tipo",
    sortable: true
  },
  {
    name: "Valor",
    selector: "valor",
    sortable: true,
    right: true
  },
  {
    name: "Fecha",
    selector: "year",
    sortable: true
  },
  {
    name: "Pagado",
    selector: "pagado",
    sortable: true,
    right: true
  },
  {
    name: "Morosidad",
    selector: "morosidad",
    sortable: true,
    right: true
  }
  ,
  {
    name: "Observacion",
    selector: "boton",
    sortable: false,
    right: true
  }
];

function Gastoscomunes_residente() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container mx-auto" style={{margin: '40px'}}>

      <Card>
        <DataTable
          title="Gastos Comunes"
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
      <div class="col d-flex justify-content-center"><button class="btn btn-primary" type="button" style={{margin: 10}} onClick={() => {alert('¡Has pagado la totalidad de tus deudas!')}}>Ir a Pagar</button></div>
    </div>
  );
}
export default Gastoscomunes_residente;

