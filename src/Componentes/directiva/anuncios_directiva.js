import React,{Component} from "react";
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



class Anuncios_Directiva extends Component {
    constructor(){
        super();
    }

	filter = "";
	filteredData =  data.filter(item =>
		item.title.toLowerCase().includes(this.filter)
	);

    SearchIt = ({ onChange, value }) => (
        <input
            placeholder="Search"
            onChange={e => onChange(e)}
            value={value.toLowerCase()}
        />
    );
    render() {
        return (
            <div className="container">
				<Card>
					<DataTable
						title="Anuncios Directiva"
						columns={columns}
						data={this.filteredData}
						pagination
						subHeader
						subHeaderComponent={
							<div>
								<this.SearchIt 
								onChange={e => this.filter = e.target.value}
								value={this.filter}
								/>
								<Button variant="contained" onClick={() =>this.props.cambiarPagina("Nuevo_Anuncio")} style={{margin: 10}}>Nuevo Anuncio</Button>
							</div>
						}
					/>
				</Card>
			</div>
        );
    }
}

export default Anuncios_Directiva;

