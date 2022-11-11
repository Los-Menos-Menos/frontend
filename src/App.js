import './App.css';
import React, {Component} from 'react';

import opciones from './opciones.js';


import Navbar from "./Componentes/navbar";
import Footer from './Componentes/footer';

import Login from './Componentes/login';

import AdminInicio from './Componentes/admin/admin_inicio';
import AdminUsuarios from './Componentes/admin/admin_usuarios';
import AdminReservas from './Componentes/admin/admin_reservas';

import Conserje from './Componentes/conserje/conserje';
import Libro from './Componentes/conserje/libro';
import InfoResidentes_Conserje from './Componentes/conserje/infoc_residentes';

import Directiva from './Componentes/directiva/directiva';
import Anuncios_Directiva from './Componentes/directiva/anuncios_directiva';
import Nuevo_Anuncio from './Componentes/directiva/nuevo_anuncio';
import InfoResidentes_Directiva from './Componentes/directiva/info_residentes';
import ReservasEstacionamiento_Directiva from './Componentes/directiva/reservas_estacionamiento';
import ReservasQuincho_Directiva from './Componentes/directiva/reservas_quinchos';
import EspaciosComunes_Directiva from './Componentes/directiva/espacios_comunes';
import ReservasSalaEventos_Directiva from './Componentes/directiva/reservas_salaeventos';
import ReservasMultiCancha_Directiva from './Componentes/directiva/reservas_multicancha';


import Residente from "./Componentes/residente/residente";
import Gastoscomunes_residente from "./Componentes/residente/gastoscomunes_residente";
import Anuncios from './Componentes/residente/anuncios';
import Reservas_Residente from './Componentes/residente/reservas_residente';
import Reservas_Quincho from './Componentes/residente/reserva_quincho';
import Reservas_Estacionamiento from './Componentes/residente/reserva_estacionamiento';
import Reservas_SalaEventos from './Componentes/residente/reserva_salaeventos';
import Reservas_Multicancha from './Componentes/residente/reserva_multicancha';


class App extends Component {
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
			tipoUsuario: "Login",
		};
		this.renderPage = this.renderPage.bind(this);
		this.cambiarPagina = this.cambiarPagina.bind(this);
		this.botonLogin = this.botonLogin.bind(this);
		this.logear = this.logear.bind(this);
    }

	cambiarPagina(pagina, opciones){
		this.setState({
			page: pagina,
		});
		console.log(pagina,opciones);
	}
	
	renderPage(){

		switch(this.state.tipoUsuario){
			case "Residente":
				switch(this.state.page){
					case "Residente":
						return <Residente residentes={this.state.residentes} cambiarPagina={this.cambiarPagina}/>
					case "Gastoscomunes_residente":
						return <Gastoscomunes_residente cambiarPagina={this.cambiarPagina}/>
					case "Reservas_Residente":
						return <Reservas_Residente cambiarPagina={this.cambiarPagina}/>
					case "Reservas_Quincho":
						return <Reservas_Quincho cambiarPagina={this.cambiarPagina}/>
					case "Reservas_Estacionamiento":
						return <Reservas_Estacionamiento cambiarPagina={this.cambiarPagina}/>
					case "Reservas_SalaEventos":
						return <Reservas_SalaEventos cambiarPagina={this.cambiarPagina}/>
					case "Reservas_Multicancha":
						return <Reservas_Multicancha cambiarPagina={this.cambiarPagina}/>
					case "Anuncios":
						return <Anuncios cambiarPagina={this.cambiarPagina}/>
					default:
						return <Residente residentes={this.state.residentes} cambiarPagina={this.cambiarPagina}/>
				};
			case "Administrador":
				switch(this.state.page){
					case "Administrador":
						return <AdminInicio cambiarPagina={this.cambiarPagina}/>
					case "AdminUsuarios":
						return <AdminUsuarios cambiarPagina={this.cambiarPagina}/>
					case "AdminReservas":
						return <AdminReservas cambiarPagina={this.cambiarPagina}/>
					default:
						return <AdminInicio cambiarPagina={this.cambiarPagina}/>
				};
			case "Conserje":
				switch(this.state.page){
					case "Conserje":
						return <Conserje cambiarPagina={this.cambiarPagina}/>
					case "InfoResidentes_Conserje":
						return <InfoResidentes_Conserje cambiarPagina={this.cambiarPagina}/>
					case "Libro":
						return <Libro cambiarPagina={this.cambiarPagina}/>
					default:
						return <Conserje cambiarPagina={this.cambiarPagina}/>
				}
			case "Directiva":
				switch(this.state.page){
					case "Directiva":
						return <Directiva cambiarPagina={this.cambiarPagina}/>
					case "info_residentes":
						return <InfoResidentes_Directiva cambiarPagina={this.cambiarPagina}/>
					case "EspaciosComunes_Directiva":
						return <EspaciosComunes_Directiva cambiarPagina={this.cambiarPagina}/>
					case "ReservasEstacionamiento_Directiva":
						return <ReservasEstacionamiento_Directiva cambiarPagina={this.cambiarPagina}/>
					case "ReservasQuincho_Directiva":
						return <ReservasQuincho_Directiva cambiarPagina={this.cambiarPagina}/>
					case "ReservasSalaEventos_Directiva":
						return <ReservasSalaEventos_Directiva cambiarPagina={this.cambiarPagina}/>
					case "ReservasMulticancha_Directiva":
						return <ReservasMultiCancha_Directiva cambiarPagina={this.cambiarPagina}/>
					case "Anuncios_Directiva":
						return <Anuncios_Directiva cambiarPagina={this.cambiarPagina}/>
					case "Nuevo_Anuncio":
						return <Nuevo_Anuncio cambiarPagina={this.cambiarPagina}/>
					default:
						return <Directiva cambiarPagina={this.cambiarPagina}/>
				}
			case "Login":
				switch(this.state.page){
					case "Login":
						return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
					default:
						return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
				}
			case "SuperUsuario":
				switch(this.state.page){
					case "SuperUsuario":
						return <div>SuperUsuario</div>
					default:
						return <div>SuperUsuario</div>
				};
			default:
				return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
			}
	}

	botonLogin(){
		console.log("Boton login presionado");
		console.log("El usuario es " + this.state.tipoUsuario);
		this.setState({tipoUsuario:"Login"});
		this.setState({
			page: "Login",
		});
	}

	logear(tipoUsuario){
		this.setState({
			tipoUsuario: tipoUsuario,
			page: tipoUsuario,
		});
		console.log("El usuario es " + this.state.tipoUsuario);
	}

    render() {
		let opcionesNavbar = opciones[this.state.tipoUsuario];
        return (
            <div className="App">
                <Navbar opciones={opcionesNavbar} cambiarPagina={this.cambiarPagina} botonLogin={this.botonLogin}/>
                <main>
					{this.renderPage()}
                </main>
                <Footer cambiarPagina={this.cambiarPagina}/>
            </div>
    );}
}

export default App;
