import React, { Component } from "react";
import "../styles.css";

class Login extends Component{
    constructor(){
        super();
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
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Dirección Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1"></input>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label for="exampleInputPassword1">Contraseña</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                        </div>
                                        <button type="submit" class="btn-theme">Iniciar Sesión</button>
                                        <a href="#l" class="forgot-link float-right text-primary">¿Olvidaste tu contraseña?</a>
                                    </form>
                                </div>
                            </div>

                            <div class="col-lg-6 d-none d-lg-inline-block">
                                <div class="account-block rounded-right">
                                    <div class="overlay rounded-right"></div>
                                    <div class="account-testimonial">
                                        <h4 class="text-white mb-4">This  beautiful theme yours!</h4>
                                        <p class="lead text-white">"La mejor inversión que puedes hacer. Lo recomiendo a nuevos usuarios."</p>
                                        <p>- Usuario Administrador</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                

                <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" class="text-primary ml-1">register</a></p>

            

            </div>
            
        </div>
        
    </div>
    );
    }
}   

export default Login;
