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
    sortable: true
  },
  {
    name: "Mensaje",
    selector: "runtime",
    sortable: true,
    right: true
  }
];

function Anuncios_Directiva() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container">

      <Card>
        <DataTable
          title="Anuncios Directiva"
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
                <Button variant="contained" style={{margin: 10}}>Nuevo Anuncio</Button>

            </div>
          }
          
        />
      </Card>

    </div>
  );
}
export default Anuncios_Directiva;

