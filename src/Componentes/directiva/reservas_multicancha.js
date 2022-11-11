import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data_residentes";
import EspaciosComunes from"../../assets/img/multicancha.png";

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
    name: "Fecha",
    selector: "fecha",
    sortable: true,
    right: true
  },
];

function ReservasMulticancha_Directiva() {
  const [filter, setFilter] = React.useState("");
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(filter)
  );

  return (
    <div className="container">
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-2">
            <div class="col">
                <div class="card" style={{ margin: 10}}>
                    <img src={EspaciosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col d-flex justify-content-center"><p>La multicancha del condominio puede ser reservada por un máximo de 2 horas, puedes jugar fútbol, basketball o volleyball.</p></div>
                        </div>
                        <div class="d-flex">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div> 
        <Card>
            <DataTable
            title="Reservas de Multicacha"
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
    </div>
  );
}
export default ReservasMulticancha_Directiva;

