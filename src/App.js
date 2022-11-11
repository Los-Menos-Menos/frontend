import './App.css';
import React, {Component} from 'react';

import opciones from './opciones.js';

import Residente from "./Componentes/residente/residente";
import Gastoscomunes_residente from "./Componentes/residente/gastoscomunes_residente";
import Navbar from "./Componentes/navbar";
import Footer from './Componentes/footer';
import AdminInicio from './Componentes/admin/admin_inicio';
import AdminUsuarios from './Componentes/admin/admin_usuarios';
import AdminReservas from './Componentes/admin/admin_reservas';
import Login from './Componentes/login';
import Conserje from './Componentes/conserje/conserje';
import Reservas_Residente from './Componentes/residente/reservas_residente';
import Reservas_Quincho from './Componentes/residente/reserva_quincho';
import Reservas_Estacionamiento from './Componentes/residente/reserva_estacionamiento';
import Reservas_SalaEventos from './Componentes/residente/reserva_salaeventos';
import Reservas_Multicancha from './Componentes/residente/reserva_multicancha';

class App extends Component {
	tipoUsuario = "Login";
    constructor(){
        super();
		this.state = {
			residentes: [
				{
					nombre: "Sofia",
					edad: 110,
				},
				{
					nombre: "Juan",
					edad: 20,
				},
				{
					nombre: "Pedro",
					edad: 30,
				},
			],
			page: "Login",
		};
		this.renderPage = this.renderPage.bind(this);
		this.cambiarPagina = this.cambiarPagina.bind(this);

    }

	cambiarPagina(pagina, opciones){
		this.setState({
			page: pagina,
		});
		console.log(pagina,opciones);
	}
	
	renderPage(){
		switch(this.state.page){
			case "Residente":
				return <Residente residentes={this.state.residentes} cambiarPagina={this.cambiarPagina}/>
			case "Administrador":
				return <AdminInicio/>
			case "Directiva":
				return <div>Directiva</div>
			case "Conserje":
				return <div>Conserje</div>
			case "Super Administrador":
				return <div>Super Administrador</div>
			case "Login":
				return <Login cambiarPagina={this.cambiarPagina}/>
			case "Inicio":
				return <AdminInicio cambiarPagina={this.cambiarPagina}/>
			case "Gestionar usuarios":
				return <AdminUsuarios cambiarPagina={this.cambiarPagina}/>;
			case "Gestionar espacios":
				return <AdminReservas cambiarPagina={this.cambiarPagina}/>;
			default:
				return <AdminInicio/>
		}
	}

    render() {
        return (
            <div className="App">
                <Navbar opciones={opciones[this.tipoUsuario]} cambiarPagina={this.cambiarPagina}/>
                <main>
					{this.renderPage()}
                </main>
                <Footer cambiarPagina={this.cambiarPagina}/>
            </div>
    );}
}

export default App;
