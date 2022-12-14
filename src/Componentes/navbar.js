import React, { Component } from "react";
import "../assets/css/navbar.css";

class Navbar extends Component{
    constructor(){
        super();
        this.triggerBotonLogin = this.triggerBotonLogin.bind(this);
    }

    triggerBotonLogin(){
        this.props.botonLogin();
        //make component update
        this.forceUpdate();
    }

    
    render(){
        console.log(this.props)
        let opciones = this.props.opciones;
        return(
            <nav className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button Nabvar">
                <div className="container">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div><a className="navbar-brand text-light" href="#" onClick={() => this.props.cambiarPagina(opciones.nombre)}><span>{opciones.nombre}</span></a></div>
                    <div id="navcol-1" className="collapse navbar-collapse">
                        <ul className="navbar-nav nav-right">
                            {opciones.paginas.map((pagina, index) => {
                                return(
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link text-light" href="#" onClick={() => this.props.cambiarPagina(pagina[0])}>{pagina[1]}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="ms-auto navbar-text actions"><a className="btn btn-light action-button" role="button" onClick={()=>this.triggerBotonLogin()}>{opciones.botonLogin.texto}</a></p>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;