import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import data from "./data_reservas";
import EspaciosComunes from"../../assets/img/espacios_comunes.png";

const columns = [
  {
    name: "Residente",
    selector: "title",
    sortable: true
  },
  {
    name: "Fecha",
    selector: "year",
    sortable: true,
    right: true
  },
  {
    name: "Pagado",
    selector: "pagado",
    sortable: true,
    right: true
  },
  {
    name: "Instalacion",
    selector: "instalacion",
    sortable: true,
    right: true
  },
];

function ReservasQuincho_Directiva() {
  const [filter, setFilter] = React.useState("");
  const dataQuincho = data.filter(item => item.instalacion == "Quincho");


  return (
    <div style={{margin: '50px'}}>
      <div className="container">
          <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-2">
              <div class="col">
                  <div class="card" style={{ margin: 10}}>
                      <img src={EspaciosComunes} class="card-img-top w-100 d-block fit-cover" alt="" style={{ height: '300px' }} />
                      <div class="card-body p-4">
                          <div class="row">
                              <div class="col d-flex justify-content-center"><p>El Quincho de este condominio cuenta con diversas secciones, parrilla, comedor, patio y ¡muchas cosas más!</p></div>
                          </div>
                          <div class="d-flex">
                              <div></div>
                          </div>
                      </div>
                  </div>
              </div> 
          <Card>
              <DataTable
              title="Reservas del Quincho"
              columns={columns}
              data={dataQuincho}
              pagination
              />
          </Card>
        </div>
      </div>
  </div>
  );
}
export default ReservasQuincho_Directiva;