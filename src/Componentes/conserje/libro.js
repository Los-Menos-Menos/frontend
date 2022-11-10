import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data";




const SearchIt = ({ onChange, value }) => (
  <input
    placeholder="Search"
    onChange={e => onChange(e)}
    value={value.toLowerCase()}
  />
);
const columns = [
  {
    name: "Residente",
    selector: "title",
    sortable: true
  },
  {
    name: "Fecha",
    selector: "year",
    sortable: true
  },
  {
    name: "Instalación",
    selector: "runtime",
    sortable: true,
    right: true
  },
  {
    name: "Pagado",
    selector: "director",
    sortable: true
  }
];

function Libro() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container">

      <Card>
        <DataTable
          title="Libro de Eventos"
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
                <Button variant="contained">Nuevo Evento</Button>
            </div>
          }
          
        />
      </Card>
    </div>
  );
}
export default Libro;

