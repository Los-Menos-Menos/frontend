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
				return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
			case "Inicio":
				return <AdminInicio cambiarPagina={this.cambiarPagina}/>
			case "Gestionar usuarios":
				return <AdminUsuarios cambiarPagina={this.cambiarPagina}/>;
			case "Gestionar espacios":
				return <AdminReservas cambiarPagina={this.cambiarPagina}/>;
			default:
				switch(this.state.tipoUsuario){
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
						return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
					default:
						return <Login cambiarPagina={this.cambiarPagina} logear={this.logear}/>
				}
		}
	}

	botonLogin(){
		console.log("Boton login presionado");
		console.log("El usuario es " + this.state.tipoUsuario);
		this.state.tipoUsuario = "Login";
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
