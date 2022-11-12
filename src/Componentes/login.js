import React, { Component } from "react";
import "../assets/css/login.css";

class Login extends Component{
    constructor(){
        super();
        this.login = this.login.bind(this);
        this.triggerLogin = this.triggerLogin.bind(this);
    }

    usuarios = {
        "admin":{
            "nombre": "Administrador",
            "contraseña": "admin",
            "tipo": "Administrador",
        },
        "residente":{
            "nombre": "Residente",
            "contraseña": "residente",
            "tipo": "Residente",
        },
        "conserje":{
            "nombre": "Conserje",
            "contraseña": "conserje",
            "tipo": "Conserje",
        },
        "directiva":{
            "nombre": "Directiva",
            "contraseña": "directiva",
            "tipo": "Directiva",
        } 
    }

    login = (usuario, contraseña) => {
        if (this.usuarios[usuario] && this.usuarios[usuario].contraseña === contraseña){
            this.props.logear(this.usuarios[usuario].tipo);
            this.props.cambiarPagina(this.usuarios[usuario].tipo);
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    }

    triggerLogin = (e) => {
        e.preventDefault();
        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("contraseña").value;
        this.login(usuario, contraseña);
    }

    render(){
        return(
                <div className="login">
                <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <div class="row no-gutters">
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="mb-5">
                                            <h3 class="h4 font-weight-bold text-theme">Inicio de Sesión</h3>
                                        </div>

                                        <h6 class="h5 mb-0">¡Bienvenido!</h6>
                                        <p class="text-muted mt-2 mb-5">Ingresa tu email y contraseña para ingresar al sistema</p>

                                        <form>
                                            <div class="form-group" style={{marginBottom: '10px'}}>
                                                <label for="usuario">Dirección Email</label>
                                                <input type="email" class="form-control" id="usuario"></input>
                                            </div>
                                            <div class="form-group mb-5">
                                                <label for="contraseña">Contraseña</label>
                                                <input type="password" class="form-control" id="contraseña"></input>
                                            </div>
                                            <button type="submit" class="btn-theme" style={{marginBottom: '10px'}} onClick={(e)=>this.triggerLogin(e)}>Iniciar Sesión</button>
                                            
                                        </form>
                                        <a href="#l" class="forgot-link float-right text-primary">¿Olvidaste tu contraseña?</a>
                                    </div>
                                </div>

                                <div class="col-lg-6 d-none d-lg-inline-block">
                                    <div class="account-block rounded-right">
                                        <div class="overlay rounded-right"></div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        }
    }   

export default Login;
