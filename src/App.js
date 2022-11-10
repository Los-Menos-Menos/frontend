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
                    <Reservas_Residente></Reservas_Residente>
                </main>
                <Footer/>
            </div>
    );}
}

export default App;
