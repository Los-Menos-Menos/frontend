import React, { Component } from "react";
import "../styles.css";

class Navbar extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <nav className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button Nabvar">
                <div className="container">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div><a className="navbar-brand text-light" href="#"><span>Condom</span></a></div>
                    <div id="navcol-1" className="collapse navbar-collapse">
                        <ul className="navbar-nav nav-right">
                            <li className="nav-item"></li>
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link text-light" aria-expanded="false" data-bs-toggle="dropdown" href="#" >Gastos Comunes</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item text-light" href="services.html">Price Packages</a>
                                    <a className="dropdown-item text-light" href="#">Order Services</a>
                                    <a className="dropdown-item text-light" href="#">Custom Request</a>
                                </div>
                            </li>
                            <li className="nav-item"><a className="nav-link text-light" href="inicio_resident.html">Reservas</a></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"><a className="nav-link text-light" href="contact.html">contact </a></li>
                        </ul>
                        <p className="ms-auto navbar-text actions"><a className="btn btn-light action-button" role="button" href="signup.html" >Salir</a></p>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;