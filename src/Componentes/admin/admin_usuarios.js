import React from "react";
import DataTable from "react-data-table-component";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import data from "./data/data_usuarios.js";
import dataResi from "./data/data_residentes.js";


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
        selector: "title",
        sortable: true
    },
    {
        name: "Fecha",
        selector: "year",
        sortable: true
    },
    {
        name: "Morosidad",
        selector: "morosidad",
        sortable: true,
        right: true
    },
    {
        name: "Email",
        selector: "email",
        sortable: true
    },
    {
        name: "Numero",
        selector: "numero",
        sortable: true
    },
    {
        name: "Tipo",
        selector: "tipoUsuario",
        sortable: true
    },
    {
        name: "Acciones",
        cell: row => (
            <button className="btn btn-danger" onClick={() => {alert("Usuario deshabilitado")}}>Deshabilitar</button>
            
        )
    }
];

const columnsResi = [
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

const ExpandedComponent2 = ({ data }) => (
    <div className="card" style={{width: '100%'}} >
      <strong>Gastos Comunes:</strong> 
      <ul>{
      data.gastos.map((gasto, index) => (
        <li key={index}>{gasto}</li>
      ))
      }
      </ul>
      <strong>Multas:</strong> {data.multas.length > 0 ? 
        <ul>{
          data.multas.map((multa, index) => (
            <li key={index}>{multa}</li>
          ))
          }
          </ul>
      : "No hay multas"}
      <br></br>
      <strong>Reservas:</strong> 
      <ul>{
      data.reservas.map((reserva, index) => (
        <li key={index}>{reserva}</li>
      ))
      }
      </ul>
    </div>
  );


function Admin_usuarios() {
    const [filter, setFilter] = React.useState("");
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(filter)
    );
    const filteredDataResi = dataResi.filter(item =>
        item.title.toLowerCase().includes(filter)
    );

    return (
        <div>
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
                <DataTable
                title="Gestion de Usuarios"
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
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
            <form>
                <h4>Nuevo Usuario</h4>
                <div className="form-group">
                    <label for="exampleUsername"></label>
                    <input type="text" className="form-control" id="exampleUsername" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1"></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputNumber"></label>
                    <input type="text" className="form-control" id="exampleInputNumber" placeholder="Número de celular"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1"></label>
                    <select class="form-control" id="exampleFormControlSelect1" placeholder="Tipo de usuario">
                    <option disabled={true} value="">
                    --Elige un tipo de usuario--
                    </option>
                    <option>Residente</option>
                    <option>Conserje</option>
                    <option>Directiva</option>
                    <option>Administrador</option>
                    </select>
                </div>

                <Button variant="contained" onClick={() => {alert("Usuario creado")}} style={{margin: 10}} >Crear usuario</Button>
            </form>
            </Card>
        </div>
        <div className="container mx-auto" style={{margin:'5%'}}>
            <Card>
                <DataTable
                title="Informacion de Residentes"
                columns={columnsResi}
                data={filteredDataResi}
                expandableRows
                expandableRowsComponent={ExpandedComponent2}
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

export default Admin_usuarios;