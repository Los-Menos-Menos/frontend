import './App.css';
import React, {Component} from 'react';
import Residente from "./Componentes/residente/residente";
import Navbar from "./Componentes/navbar";
import Footer from './Componentes/footer';
import Admin from './Componentes/admin/admin';
import Admin_usuarios from './Componentes/admin/admin_usuarios';
import Login from './Componentes/login';

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
			page: "login",
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
			case "residentes":
				return <Residente residentes={this.state.residentes} cambiarPagina={this.cambiarPagina}/>
			case "admin":
				return <Admin/>
			case "admin_usuarios":
				return <Admin_usuarios/>
			case "login":
				return <Login cambiarPagina={this.cambiarPagina}/>
			default:
				return <Admin/>
		}
	}

    render() {
		let opciones = null;
		if (this.state.page === "login"){
			opciones = {
				nombre: "AdminCondom",
				paginas: [
					"residentes",
					"admin",
					"admin_usuarios",

					
				],
				botonLogin: {
					texto: "Iniciar Sesion",
				},
			};
		}
		if (this.state.page === "residentes"){
			opciones = {
				nombre: "Camilo",
				paginas: [
					"Gastos comunes",
					"Reservas",
					"Reclamos",
					"Anuncios",
				],
				botonLogin: {
					texto: "Cerrar Sesion",
				},
			};
		}
        return (
            <div className="App">
                <Navbar opciones={opciones} cambiarPagina={this.cambiarPagina}/>
                <main>
                    {this.renderPage()}
                </main>
                <Footer cambiarPagina={this.cambiarPagina}/>
            </div>
    );}
}

export default App;
