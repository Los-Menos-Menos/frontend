import './App.css';
import React, {Component} from 'react';
import Residente from "./Componentes/residente/residente";
import Gastoscomunes_residente from "./Componentes/residente/gastoscomunes_residente";
import Navbar from "./Componentes/navbar";
import Footer from './Componentes/footer';
import Admin from './Componentes/admin/admin';
import Admin_usuarios from './Componentes/admin/admin_usuarios';
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
	};
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <main>
                    <Reservas_Multicancha></Reservas_Multicancha>
                </main>
                <Footer/>
            </div>
    );}
}

export default App;
