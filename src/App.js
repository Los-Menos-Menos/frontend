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

    }
	
	renderPage(){
		switch(this.state.page){
			case "residentes":
				return <Residente residentes={this.state.residentes}/>
			case "admin":
				return <Admin/>
			case "admin_usuarios":
				return <Admin_usuarios/>
			case "login":
				return <Login/>
			default:
				return <Login/>
		}
	}

    render() {
        return (
            <div className="App">
                <Navbar/>
                <main>
                    {this.renderPage()}
                </main>
                <Footer/>
            </div>
    );}
}

export default App;
